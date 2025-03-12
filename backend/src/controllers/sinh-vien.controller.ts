import type { Context } from "hono";
import { db } from "../config/db";

export const getAllSinhVien = async (c: Context) => {
    const [rows] = await db.execute('SELECT * FROM SINH_VIEN');
    return c.json(rows);
};

export const getSinhVienByNganh = async (c: Context) => {
    const { ma_nganh } = c.req.param();
    const [rows] = await db.execute('SELECT * FROM SINH_VIEN WHERE MA_NGANH = ?', [ma_nganh]);
    return c.json(rows);
};

export const createSinhVien = async (c: Context) => {
    const body = await c.req.json();
    await db.execute(
        'INSERT INTO SINH_VIEN (ma_sv, username, lop, ma_nganh) VALUES (?, ?, ?, ?)', 
        [body.ma_sv, body.username, body.lop, body.ma_nganh]
    );
    return c.json({ message: 'Sinh viên đã được tạo' });
};