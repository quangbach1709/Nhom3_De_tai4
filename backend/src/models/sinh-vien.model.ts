<<<<<<< HEAD
export interface SinhVien {
    ma_sv: string;
    username: string;
    lop: string;
    ma_nganh: string;
}
=======
import { db } from '../config/db';
import type { Context } from 'hono';

export const getAllSinhVien = async (c: Context) => {
  const [rows] = await db.execute('SELECT * FROM sinh_vien');
  return c.json(rows);
};

export const getSinhVienByNganh = async (c: Context) => {
  const ma_nganh = c.req.param('ma_nganh');
  const [rows] = await db.execute('SELECT * FROM sinh_vien WHERE ma_nganh = ?', [ma_nganh]);
  return c.json(rows);
};

export const createSinhVien = async (c: Context) => {
  const { ma_sv, username, lop, ma_nganh } = await c.req.json();
  await db.execute(
    'INSERT INTO sinh_vien (ma_sv, username, lop, ma_nganh) VALUES (?, ?, ?, ?)',
    [ma_sv, username, lop, ma_nganh]
  );
  return c.json({ message: 'Sinh viên đã được tạo' }, 201);
};
>>>>>>> 2ffd58c (good luck)
