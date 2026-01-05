import app from "./index";
import {serve} from "@hono/node-server";

const serverPort = 3100;

const server = serve({
    fetch: app.fetch,
    port: serverPort,
})

console.log(`Running on port ${serverPort}...`);

process.on('SIGINT', () => {
    server.close()
    process.exit(0)
})
process.on('SIGTERM', () => {
    server.close((err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        process.exit(0)
    })
})
