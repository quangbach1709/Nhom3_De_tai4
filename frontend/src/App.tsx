import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/sinhvien/Dashboard";
import PersonalInfo from "./components/sinhvien/PersonalInfo";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
