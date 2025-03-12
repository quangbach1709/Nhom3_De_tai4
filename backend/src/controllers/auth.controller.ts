import { db } from '../config/db';
import bcrypt from 'bcrypt';
import type { Context } from 'hono';

export const login = async (c: Context) => {
  const { email, password } = await c.req.json();

  // 🔹 Truy vấn user từ MySQL
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  const user = (rows as any[])[0];

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return c.json({ message: 'Invalid email or password' }, 401);
  }

  return c.json({ message: 'Login successful' });
};

export const changePassword = async (c: Context) => {
  const { email, oldPassword, newPassword } = await c.req.json();

  // 🔹 Lấy thông tin user từ DB
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  const user = (rows as any[])[0];

  if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
    return c.json({ message: 'Invalid credentials' }, 400);
  }

  // 🔹 Cập nhật mật khẩu
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await db.execute('UPDATE users SET password = ? WHERE email = ?', [hashedPassword, email]);

  return c.json({ message: 'Password changed successfully' });
};

