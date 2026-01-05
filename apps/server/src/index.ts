import { Hono } from 'hono'
import { validateApiKey } from "./middleware/validate-api-key";
import { logger } from "hono/logger";
import "dotenv/config"

import servicesApp from './services/index.js'
import { cors } from "hono/cors";

const app = new Hono();

app.use('*', cors({
    origin: [process.env.FRONTEND_URL ?? 'http://localhost:3000', process.env.ALT_FRONTEND_URL ?? 'http://localhost:3000'],
    allowHeaders: ['*'],
    allowMethods: ['POST', 'GET', 'PUT', 'PATCH', 'OPTIONS', 'DELETE'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
}));

app.use(logger());

app.use(validateApiKey);

app.route('/services', servicesApp);

export default app