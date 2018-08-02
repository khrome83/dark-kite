import uuid from 'uuid';
import * as AWS from 'aws-sdk';
import * as options from '../../lib/config/db';

export default async (event) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.s3 !== 'string') {
    return { statusCode: 400, body: JSON.stringify({ message: 'Incorrect Paramaters.' }) };
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v4(),
      s3: data.s3,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  const client = new AWS.DynamoDB.DocumentClient(options);

  try {
    await client.put(params).promise();
    return { statusCode: 201, body: JSON.stringify(params.Item) };
  } catch (error) {
    return { statusCode: error.statusCode || 400, body: JSON.stringify(error) };
  }
};
