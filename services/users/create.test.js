import * as AWS from 'aws-sdk-mock';
import * as handler from './create';

describe('Creating Snapshot Entry', () => {
  beforeEach(() => {
    process.env.DYNAMODB_TABLE = 'snapshot-test-table';
  });

  afterEach(() => {
    AWS.restore();
  });

  test('Should create snapshot entry and return signature of entry created', async () => {
    const event = {
      body: JSON.stringify({
        s3: 'path/to/file',
      }),
    };

    AWS.mock('DynamoDB.DocumentClient', 'put', () => Promise.resolve());

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(201);
    expect(typeof response.body).toBe('string');
  });

  test('Should error with code 400 when bad paramters is set or missing', async () => {
    const event = {
      body: JSON.stringify({
        sg3: 'path/to/file',
      }),
    };

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(400);
    expect(typeof response.body).toBe('string');
  });

  test('Should handle DynamoDB errors correctly', async () => {
    const event = {
      body: JSON.stringify({
        s3: 'path/to/file',
      }),
    };

    AWS.mock('DynamoDB.DocumentClient', 'put', () => Promise.reject({
      statusCode: 500,
      message: 'testing error',
    }));

    const response = await handler.default(event);
    expect(response.statusCode).toEqual(500);
    expect(typeof response.body).toBe('string');
  });
});
