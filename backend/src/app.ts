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

// Khai báo các routes
app.route("/api/dot-do-an", dotDoAnRoute);
app.route("/api/dot-thuc-tap", dotThucTapRoute);
app.route("/api/do-an", doAnRoute);
app.route("/api/thuc-tap", thucTapRoute);
app.route("/api/cong-ty", congTyRoute);
app.route('/api/nganh', nganhRoute);
app.route('/api/giang-vien', giangVienRoute);
app.route('/api/sinh-vien', sinhVienRoute);

// Route mặc định
app.get("/", (c) => c.text("Welcome to the Project & Internship Management API "));