import { createMiddleware } from "hono/factory";

const validateApiKey = createMiddleware(async (c, next) => {
    const apiKey = c.req.header('x-api-key');
    if (apiKey !== process.env.API_KEY) {
        return c.json({ error: 'Not Authorized' }, 401);
    }
    await next();
})

export { validateApiKey }