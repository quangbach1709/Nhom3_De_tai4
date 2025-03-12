import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DashboardSinhvien from "./components/sinhvien/DashboardSinhvien";
import PersonalInfo from "./components/sinhvien/PersonalInfo";
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Unauthorized from "./components/auth/Unauthorized";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/dashboard/sinhvien" element={<DashboardSinhvien />} />
        <Route path="/change-password" element={<ChangePassword />} />
        {/* Trang đăng nhập */}
        <Route path="/login" element={<Login />} />

        {/* Trang lỗi quyền truy cập */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Bảo vệ trang Trưởng Khoa */}
        {/* <Route element={<ProtectedRoute allowedRoles={["truongkhoa"]} />}>
          <Route path="/dashboard/truongkhoa" element={<DashboardTruongKhoa />} />
        </Route> */}

        {/* Bảo vệ trang Giảng Viên */}
        {/* <Route element={<ProtectedRoute allowedRoles={["giangvien"]} />}>
          <Route path="/dashboard/giangvien" element={<DashboardGiangVien />} />
        </Route> */}

        {/* Bảo vệ trang Sinh Viên */}
        <Route element={<ProtectedRoute allowedRoles={["sinhvien"]} />}>
          <Route path="/dashboard/sinhvien" element={<DashboardSinhvien />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
