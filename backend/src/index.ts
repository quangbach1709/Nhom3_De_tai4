import { app } from './app';

const PORT = process.env.PORT;

console.log(`Server đang chạy ở index.ts`);

export default {
  port: PORT,
  fetch: app.fetch,
};
