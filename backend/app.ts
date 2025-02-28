import { Hono } from "hono";
import { logger } from "hono/logger";
import { nganhRouter } from "./routes/nganh";

const app = new Hono();

app.use('*', logger())

app.route('/api/nganh', nganhRouter)

export default app