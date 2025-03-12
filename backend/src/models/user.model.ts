import type { RowDataPacket } from "mysql2";
import { db } from "../config/db";

export interface User {
  id: number;
  email: string;
  password: string;
  role: "admin" | "giang-vien" | "sinh-vien";
}

// Lấy thông tin user theo email
export const getUserByEmail = async (email: string): Promise<User | null> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  if (rows.length === 0) return null;
  return rows[0] as User;
};

// Thêm user mới
export const createUser = async (user: User): Promise<void> => {
  await db.execute(
    "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
    [user.email, user.password, user.role]
  );
};

// Cập nhật mật khẩu
export const updatePassword = async (email: string, newPassword: string): Promise<void> => {
  await db.execute("UPDATE users SET password = ? WHERE email = ?", [newPassword, email]);
};
