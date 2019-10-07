import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Firebase from './firebase'

const AUTH_EMAIL: string = 'email@domain.com'
const AUTH_PASSWORD: string = 'password'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  await Firebase.authenticate(AUTH_EMAIL, AUTH_PASSWORD)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}
