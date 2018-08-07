import * as AWS from 'aws-sdk-mock';
import * as handler from './get';

describe('Get Snapshot Entry', () => {
  beforeEach(() => {
    process.env.DYNAMODB_TABLE = 'snapshot-test-table';
  });

  afterEach(() => {
    AWS.restore();
  });

  test('Should return snapshot entry', async () => {
    const event = {
      pathParameters: {
        id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
      },
    };

    AWS.mock('DynamoDB.DocumentClient', 'get', () => Promise.resolve({
      Item: {
        s3: 'path/to/file/testing/100',
        createdAt: 1531090668256,
        id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
        updatedAt: 1531090668256,
      },
    }));

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe('string');
  });

  test('Should return 404 if no entries are found', async () => {
    const event = {
      pathParameters: {
        id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
      },
    };

    AWS.mock('DynamoDB.DocumentClient', 'get', () => Promise.resolve({}));

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(404);
    expect(typeof response.body).toBe('string');
  });

  test('Should handle DynamoDB errors correctly', async () => {
    const event = {
      pathParameters: {
        id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
      },
    };

    AWS.mock('DynamoDB.DocumentClient', 'get', () => Promise.reject({
      statusCode: 500,
      message: 'testing error',
    }));

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(500);
    expect(typeof response.body).toBe('string');
  });
});
