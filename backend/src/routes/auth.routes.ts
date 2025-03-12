import { Hono } from 'hono';
import { login, changePassword } from '../controllers/auth.controller';

const authRoute = new Hono();

authRoute.post('/login', login);
authRoute.post('/change-password', changePassword);

export default authRoute;
