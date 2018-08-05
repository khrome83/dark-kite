import * as AWS from 'aws-sdk-mock';
import * as handler from './list';

describe('List Snapshot Entries', () => {
  beforeEach(() => {
    process.env.DYNAMODB_TABLE = 'snapshot-test-table';
  });

  afterEach(() => {
    AWS.restore();
  });

  test('Should list snapshot entries', async () => {
    AWS.mock('DynamoDB.DocumentClient', 'scan', () => Promise.resolve({
      Items: [
        {
          s3: 'path/to/file/testing/100',
          createdAt: 1531090668256,
          id: '4effa0e9-d96f-40b6-b32c-35a2facd6caf',
          updatedAt: 1531090668256,
        },
        {
          s3: 'path/to/file/testing/100',
          createdAt: 1531065239596,
          id: '59c78149-6bf2-429d-841d-5a3847c23792',
          updatedAt: 1531065239596,
        },
        {
          s3: 'path/to/file/testing/100',
          createdAt: 1531090655404,
          id: '4f4e05a4-5ec3-4afd-8bde-2fb0901d927c',
          updatedAt: 1531090655404,
        },
      ],
    }));

    const response = await handler.default();
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe('string');
    const output = JSON.parse(response.body);
    expect(output.length).toBe(3);
  });

  test('Should return 404 if no entries are found', async () => {
    AWS.mock('DynamoDB.DocumentClient', 'scan', () => Promise.resolve({
      Items: [],
    }));

    const response = await handler.default();
    expect(response.statusCode).toEqual(404);
    expect(typeof response.body).toBe('string');
  });

  test('Should handle DynamoDB errors correctly', async () => {
    AWS.mock('DynamoDB.DocumentClient', 'scan', () => Promise.reject({
      statusCode: 500,
      message: 'testing error',
    }));

    const response = await handler.default();
    expect(response.statusCode).toEqual(500);
    expect(typeof response.body).toBe('string');
  });
});
