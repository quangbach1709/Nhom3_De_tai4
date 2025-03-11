import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { dotDoAnRoute } from "./routes/dot-do-an.routes";
import { dotThucTapRoute } from "./routes/dot-thuc-tap.routes";
import { doAnRoute } from "./routes/do-an.routes";
import { congTyRoute } from "./routes/cong-ty.routes";
import { db } from "./config/db";

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

// Khai báo các routes

app.route("/api/dot-do-an", dotDoAnRoute);
app.route("/api/dot-thuc-tap", dotThucTapRoute);
app.route("/api/do-an", doAnRoute);
app.route("/api/cong-ty", congTyRoute);

// Route mặc định
app.get("/", (c) => c.text("tự tìm đến routes nào đó đi. Vd: localhost:3000/api/dot-do-an"));



console.log(`Server đang chạy tại app.ts`);
