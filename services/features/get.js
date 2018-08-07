import * as AWS from 'aws-sdk';
import * as options from '../../lib/config/db';

export default async (event) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  const client = new AWS.DynamoDB.DocumentClient(options);

  try {
    const result = await client.get(params).promise();
    if (!result.Item) {
      return { statusCode: 404, body: JSON.stringify({ message: `No screenshot entry found with ID '${event.pathParameters.id}'` }) };
    }

    return { statusCode: 200, body: JSON.stringify(result.Item) };
  } catch (error) {
    return { statusCode: error.statusCode || 400, body: JSON.stringify(error) };
  }
};
