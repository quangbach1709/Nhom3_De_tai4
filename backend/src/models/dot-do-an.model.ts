import { db } from '../config/db';

export interface DotDoAn {
  ma_dot: string;
  ten_dot: string;
  loai_dot: string;
  thoi_gian_bat_dau: Date;
  thoi_gian_ket_thuc: Date;
  trang_thai: boolean;
  ma_tk: string;
}

// export class DotDoAnModel {
//   static async getAll(): Promise<DotDoAn[]> {
//     const [rows] = await db.query('SELECT * FROM DOT_DANG_KY');
//     return rows as DotDoAn[];
//   }

//   static async getById(id: number): Promise<DotDoAn | null> {
//     const [rows] = await db.query('SELECT * FROM DOT_DANG_KY WHERE id = ?', [id]);
//     return rows.length ? (rows[0] as DotDoAn) : null;
//   }

//   static async create(dotDoAn: Omit<DotDoAn, 'id'>): Promise<void> {
//     await db.query('INSERT INTO DOT_DANG_KY (tenDot, ngayBatDau, ngayKetThuc) VALUES (?, ?, ?)', 
//       [dotDoAn.tenDot, dotDoAn.ngayBatDau, dotDoAn.ngayKetThuc]);
//   }

//   static async update(id: number, dotDoAn: Omit<DotDoAn, 'id'>): Promise<void> {
//     await db.query('UPDATE DOT_DANG_KY SET tenDot = ?, ngayBatDau = ?, ngayKetThuc = ? WHERE id = ?', 
//       [dotDoAn.tenDot, dotDoAn.ngayBatDau, dotDoAn.ngayKetThuc, id]);
//   }

//   static async delete(id: number): Promise<void> {
//     await db.query('DELETE FROM DOT_DANG_KY WHERE id = ?', [id]);
//   }
// }
