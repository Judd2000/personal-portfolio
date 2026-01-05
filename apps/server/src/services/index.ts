import { Hono } from 'hono'
import { validator } from "hono/validator";
import { sendMessage } from "./send-message/send-message";

const app = new Hono()

app.post('/send-message',
    validator('json', (body, c) => {
        console.log('Body!', body)
        if (!body || !(body.message && typeof body.message === 'string' && body.message.length)) {
            return c.text('Malformed Request', 400)
        }
        return {
            body: body,
        }
    }),
    async (c) => {
        const { body } = c.req.valid('json');
        console.log('Body message', body.message);
        try {
            await sendMessage(body.message);
            return c.text('')
        } catch (e) {
            console.error('Error sending message', e);
            c.status(500);
            return c.text('Error sending message.');
        }
    }
)

export default app