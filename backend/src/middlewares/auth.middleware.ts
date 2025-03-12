import type { Context, Next } from "hono";
import { db } from "../config/db";
import type { RowDataPacket } from "mysql2";

export const authMiddleware = async (c: Context, next: Next) => {
  const email = c.req.header("X-User-Email");

  if (!email) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT username, role FROM NGUOI_DUNG WHERE email = ? LIMIT 1",
    [email]
  );

  if (rows.length === 0) {
    return c.json({ error: "User not found" }, 401);
  }

  c.set("user", rows[0]);
  await next();
};

export const roleMiddleware = (allowedRoles: string[]) => {
  return async (c: Context, next: Next) => {
    const user = c.get("user");

    if (!user || !allowedRoles.includes(user.role)) {
      return c.json({ error: "Forbidden" }, 403);
    }

    await next();
  };
};
