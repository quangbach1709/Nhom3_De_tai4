import { db } from "../config/db";
import type { RowDataPacket } from "mysql2";
import type { Context } from "hono";

export const loginUser = async (c: Context) => {
  const { email, password } = await c.req.json();

  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM NGUOI_DUNG WHERE email = ? AND password = ? LIMIT 1",
    [email, password]
  );

  if (rows.length === 0) {
    return c.json({ error: "Sai email hoặc mật khẩu" }, 401);
  }

  return c.json({ message: "Đăng nhập thành công", user: rows[0] });
};
