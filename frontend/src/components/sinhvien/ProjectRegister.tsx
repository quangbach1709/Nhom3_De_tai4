import { useState } from "react";
import "../../styles/sinhvien/project.css";

const Project = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <div className="project-page-container">
      <div className="project-page-header">
        <div className="project-page-filter">
          <label htmlFor="doan-radio">Loại đợt:</label>
          <button className="button2">Đồ án</button>
        </div>
        <div className="project-page-date-info">
          <p>Ngày bắt đầu: <strong>20-01-2025</strong></p>
          <p>Ngày kết thúc: <strong>22-01-2025</strong></p>
        </div>
      </div>

      <div className="project-page-register-section">
        <h1 className="project-page-dangki">Đăng kí</h1>
      </div>

      <div className="project-page-content">
        <div className="project-page-grid-icon">▦</div>
        <div className="project-page-table-container">
          {showRegisterForm ? (
            <div className="register-form">
              <h2>Đăng ký đề tài</h2>
              <label>
                Tên đề tài:
                <input type="text" placeholder="Nhập tên đề tài" />
              </label>
              <label>
                Công nghệ sử dụng:
                <textarea placeholder="Nhập công nghệ sẽ sử dụng"></textarea>
              </label>
              <button className="button-submit" onClick={() => setShowRegisterForm(false)}>
                Gửi đăng ký
              </button>
            </div>
          ) : (
            <button className="project-page-register-topic" onClick={() => setShowRegisterForm(true)}>
              Click vào đây để đăng kí đề tài
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
