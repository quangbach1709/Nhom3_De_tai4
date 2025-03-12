import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import DashboardSinhvien from "./components/sinhvien/DashboardSinhvien";
import PersonalInfo from "./components/sinhvien/PersonalInfo";
import Login from "./components/login/Login";
import ChangePassword from "./components/login/ChangePassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/dashboard/sinhvien" element={<DashboardSinhvien />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
