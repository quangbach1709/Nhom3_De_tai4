import { Hono } from "hono";
import { db } from "./config/db";
import { logger } from "hono/logger";
import { dotDoAnRoute } from "./routes/dot-do-an.routes";
import { dotThucTapRoute } from "./routes/dot-thuc-tap.routes";
import { doAnRoute } from "./routes/do-an.routes";
import { congTyRoute } from "./routes/cong-ty.routes";
import { nganhRoute } from "./routes/nganh.routes";
import { giangVienRoute } from "./routes/giang-vien.routes";
import { sinhVienRoute } from "./routes/sinh-vien.routes";
import { thucTapRoute } from "./routes/thuc-tap.routes";
import { loginUser, roleMiddleware } from "./middlewares/auth.middleware";
import { authController } from "./controllers/auth.controller";

export const app = new Hono();


// Kiểm tra kết nối database
db.getConnection()
  .then((conn) => {
    console.log("Kết nối MySQL thành công!");
    conn.release();
  })
  .catch((err) => {
    console.error("Lỗi kết nối MySQL:", err);
  });

// Middleware
app.use('*', logger());

// Route đăng nhập
app.post("/api/login", loginUser);

// Route đổi mật khẩu
app.post("/api/change-password", async (c) => {
  const { email, currentPassword, newPassword } = await c.req.json();

  if (!email || !currentPassword || !newPassword) {
    return c.json({ success: false, message: "Thiếu thông tin bắt buộc!" }, 400);
  }

  const result = await authController.changePassword(email, currentPassword, newPassword);
  return c.json(result);
});

// Khai báo các routes
app.route("/api/dot-do-an", dotDoAnRoute);
app.route("/api/dot-thuc-tap", dotThucTapRoute);
app.route("/api/do-an", doAnRoute);
app.route("/api/thuc-tap", thucTapRoute);
app.route("/api/cong-ty", congTyRoute);
app.route('/api/nganh', nganhRoute);

// Bảo vệ routes theo role
app.use("/api/sinh-vien", roleMiddleware(["sinh_vien"]));
app.route("/api/sinh-vien", sinhVienRoute);

app.use("/api/giang-vien", roleMiddleware(["giang_vien"]));
app.route("/api/giang-vien", giangVienRoute);

app.use("/api/truong-khoa", roleMiddleware(["truong_khoa"]));
app.get("/api/truong-khoa", (c) => c.text("Welcome Trưởng Khoa"));

// Route mặc định
app.get("/", (c) => c.text("Welcome to the Project & Internship Management API "));