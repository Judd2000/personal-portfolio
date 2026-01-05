import app from './index.js'
import { handle } from 'hono/aws-lambda'
import type { APIGatewayProxyEventV2, Context } from 'aws-lambda'

const honoHandler = handle(app)

export const handler = async (event: APIGatewayProxyEventV2, context: Context) => {
    // Pass AWS Lambda request ID via header so middleware can access it
    event.headers = {
        ...event.headers,
        'x-amzn-request-id': context.awsRequestId
    }
    return honoHandler(event, context);
}
