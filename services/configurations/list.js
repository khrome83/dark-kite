import * as AWS from 'aws-sdk';
import * as options from '../../lib/config/db';

export default async () => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  const client = new AWS.DynamoDB.DocumentClient(options);

  try {
    const result = await client.scan(params).promise();
    if (!result.Items.length) {
      return { statusCode: 404, body: JSON.stringify({ message: 'No screenshot entries found' }) };
    }

    return { statusCode: 200, body: JSON.stringify(result.Items) };
  } catch (error) {
    return { statusCode: error.statusCode || 400, body: JSON.stringify(error) };
  }
};
