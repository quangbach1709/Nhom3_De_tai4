import type { Context, Next } from "hono";
import { decode, verify } from "hono/jwt";

const SECRET_KEY = process.env.JWT_SECRET || "secret";

export const authenticate = async (c: Context, next: Next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = await verify(token, SECRET_KEY);
    if (!decoded) {
      return c.json({ message: "Invalid token" }, 401);
    }

    c.set("user", decoded);
    await next();
  } catch (error) {
    return c.json({ message: "Invalid token" }, 401);
  }
};

export const authorize = (roles: string[]) => {
  return async (c: Context, next: Next) => {
    const user = c.get("user") as { id: number; role: string } | undefined;
    if (!user || !roles.includes(user.role)) {
      return c.json({ message: "Forbidden" }, 403);
    }
    await next();
  };
};
