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
    Key: {
      id: event.pathParameters.id,
    },
    UpdateExpression: 'SET s3 = :s3, updatedAt = :updatedAt',
    ConditionExpression: 'attribute_exists(id)',
    ExpressionAttributeValues: {
      ':s3': data.s3,
      ':updatedAt': timestamp,
    },
    ReturnValues: 'ALL_NEW',
  };

  const client = new AWS.DynamoDB.DocumentClient(options);

  try {
    const result = await client.update(params).promise();
    if (result.code === 'ConditionalCheckFailedException') {
      return { statusCode: 404, body: JSON.stringify({ message: `No screenshot entry found with ID '${event.pathParameters.id}'` }) };
    }

    return { statusCode: 200, body: JSON.stringify(result.Attributes) };
  } catch (error) {
    return { statusCode: error.statusCode || 400, body: JSON.stringify(error) };
  }
};
