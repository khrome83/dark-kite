import * as AWS from 'aws-sdk-mock';
import * as handler from './update';

describe('Updating Snapshot Entry', () => {
  beforeEach(() => {
    process.env.DYNAMODB_TABLE = 'snapshot-test-table';
  });

  afterEach(() => {
    AWS.restore();
  });

  test('Should update snapshot entry and return signature of entry', async () => {
    const event = {
      pathParameters: {
        id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
      },
      body: JSON.stringify({
        s3: 'path/to/file/over/9000',
      }),
    };

    AWS.mock('DynamoDB.DocumentClient', 'update', () => {
      const timestamp = new Date().getTime();
      return Promise.resolve({
        Attributes: {
          id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
          s3: 'path/to/file/over/9000',
          createdAt: 1531065239596,
          updatedAt: timestamp,
        },
      });
    });

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe('string');
  });

  test('Should error with code 400 when bad paramters is set or missing', async () => {
    const event = {
      pathParameters: {
        id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
      },
      body: JSON.stringify({
        sg3: 'path/to/file/over/9000',
      }),
    };

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(400);
    expect(typeof response.body).toBe('string');
  });

  test('Should return 404 if item is not found', async () => {
    const event = {
      pathParameters: {
        id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
      },
      body: JSON.stringify({
        s3: 'path/to/file/over/9000',
      }),
    };

    AWS.mock('DynamoDB.DocumentClient', 'update', () => Promise.resolve({
      code: 'ConditionalCheckFailedException',
    }));

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(404);
    expect(typeof response.body).toBe('string');
  });

  test('Should handle DynamoDB errors correctly', async () => {
    const event = {
      pathParameters: {
        id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
      },
      body: JSON.stringify({
        s3: 'path/to/file/over/9000',
      }),
    };

    AWS.mock('DynamoDB.DocumentClient', 'update', () => Promise.reject({
      statusCode: 500,
      message: 'testing error',
    }));

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(500);
    expect(typeof response.body).toBe('string');
  });
});
