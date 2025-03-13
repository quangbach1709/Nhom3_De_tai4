import { Hono } from "hono";
import {
  getAllSinhVien,
  getSinhVienByNganh,
  createSinhVien,
  updateSinhVien,
  deleteSinhVien,
} from "../controllers/sinh-vien.controller";

export const sinhVienRoute = new Hono();

sinhVienRoute.get("/", getAllSinhVien);
sinhVienRoute.get("/nganh/:ma_nganh", getSinhVienByNganh);
sinhVienRoute.post("/", createSinhVien);
sinhVienRoute.put("/:ma_sv", updateSinhVien);
sinhVienRoute.delete("/:ma_sv", deleteSinhVien);

export default sinhVienRoute;