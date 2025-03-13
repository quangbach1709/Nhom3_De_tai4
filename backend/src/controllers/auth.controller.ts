import { db } from "../config/db";
import type { RowDataPacket } from "mysql2";
import type { ResultSetHeader } from "mysql2/promise";

export const authController = {
  getUserByEmailAndPassword: async (email: string, password: string) => {
    const [rows] = await db.execute<RowDataPacket[]>(
      "SELECT * FROM NGUOI_DUNG WHERE email = ? AND password = ? LIMIT 1",
      [email, password]
    );

    return rows.length > 0 ? rows[0] : null;
  },

  async getUserByEmail(email: string) { // 🛠️ Thêm hàm này
    const [rows] = await db.execute<RowDataPacket[]>(
      "SELECT * FROM NGUOI_DUNG WHERE email = ? LIMIT 1",
      [email]
    );

    return rows.length ? rows[0] : null;
  },

  async changePassword(email: string, currentPassword: string, newPassword: string) {
    // Kiểm tra người dùng có tồn tại và mật khẩu hiện tại đúng không
    const user = await authController.getUserByEmailAndPassword(email, currentPassword);
    if (!user) {
      return { success: false, message: "Email hoặc mật khẩu hiện tại không đúng!" };
    }

    // Cập nhật mật khẩu mới
    const [result] = await db.execute<ResultSetHeader>(
      "UPDATE NGUOI_DUNG SET password = ? WHERE email = ?",
      [newPassword, email]
    );

    if (result.affectedRows > 0) {
      return { success: true, message: "Đổi mật khẩu thành công!" };
    }
    return { success: false, message: "Không thể đổi mật khẩu, vui lòng thử lại!" };
  }
};
