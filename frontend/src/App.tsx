import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Import các component của Sinh viên
import DashboardSinhvien from "./components/sinhvien/DashboardSinhvien";
import PersonalInfo from "./components/sinhvien/PersonalInfo";
import Internship from "./components/sinhvien/Internship";
import InternshipResult from "./components/sinhvien/InternshipResult";
import Project from "./components/sinhvien/Project";
import ProjectResult from "./components/sinhvien/ProjectResult";
import RegisterTopic from "./components/sinhvien/RegisterTopic";

// Import các component của Giảng viên
import DashboardGiangVien from "./components/giangvien/DashboardGiangVien";

// Import các component của Trưởng khoa (đang bị comment)
// import DashboardTruongKhoa from "./components/truongkhoa/DashboardTruongKhoa";

// Import các component liên quan đến xác thực
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword";
import Unauthorized from "./components/auth/Unauthorized";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Hàm kiểm tra trạng thái đăng nhập và lấy vai trò người dùng
const getUserRole = () => {
  const user = localStorage.getItem("user"); // Giả sử lưu thông tin người dùng trong localStorage
  if (!user) return null;
  try {
    return JSON.parse(user).role; // Lấy vai trò từ dữ liệu người dùng
  } catch (error) {
    return null;
  }
};

function App() {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    setUserRole(getUserRole());
  }, []);

  return (
    <Router>
      <Routes>
        {/* Route mặc định `/` */}
        <Route path="/" element={userRole ? <Navigate to={`/dashboard/${userRole}`} /> : <Navigate to="/login" />} />

        {/* Trang đăng nhập */}
        <Route path="/login" element={<Login />} />

        {/* Trang đổi mật khẩu */}
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Trang lỗi quyền truy cập */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Bảo vệ các trang dành riêng cho Sinh viên */}
        <Route element={<ProtectedRoute allowedRoles={["sinh_vien"]} />}>
          <Route path="/dashboard/sinhvien" element={<DashboardSinhvien />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/internship-result" element={<InternshipResult />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-result" element={<ProjectResult />} />
          <Route path="/dang-ky-de-tai" element={<RegisterTopic />} />
        </Route>

        {/* Bảo vệ các trang dành riêng cho Giảng viên */}
        <Route element={<ProtectedRoute allowedRoles={["giang_vien"]} />}>
          <Route path="/dashboard/giangvien" element={<DashboardGiangVien />} />
        </Route>

        {/* Bảo vệ các trang dành riêng cho Trưởng khoa */}
        {/* <Route element={<ProtectedRoute allowedRoles={["truong_khoa"]} />}>
          <Route path="/dashboard/truongkhoa" element={<DashboardTruongKhoa />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
