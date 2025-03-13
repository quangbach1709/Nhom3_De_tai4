import { useState } from "react";
import "../../styles/sinhvien/PersonalInfo.css";

interface InfoItem {
  key: string;
  label: string;
  value: string;
}

const initialPersonalInfo: InfoItem[] = [
  { key: "fullName", label: "Họ và tên", value: "Nguyễn Văn An" },
  { key: "gender", label: "Giới tính", value: "Nam" },
  { key: "dob", label: "Ngày sinh", value: "22/02/2000" },
  { key: "phone", label: "Số điện thoại", value: "0912345678" },
  { key: "email", label: "Email", value: "pihanx1@gmail.com" },
  { key: "major", label: "Chuyên ngành", value: "Công nghệ thông tin" },
  { key: "majorCode", label: "Mã ngành", value: "CSE123" },
  { key: "studentId", label: "Mã sinh viên", value: "12345678" },
  { key: "class", label: "Lớp", value: "CNTT1" },
];

export default function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [editInfo, setEditInfo] = useState(initialPersonalInfo);
  const [isEditing, setIsEditing] = useState(false);

  // Xử lý khi người dùng thay đổi thông tin
  const handleChange = (key: string, value: string) => {
    setEditInfo((prevInfo) =>
      prevInfo.map((item) =>
        item.key === key ? { ...item, value } : item
      )
    );
  };

  // Lưu thay đổi
  const handleSave = () => {
    setPersonalInfo(editInfo);
    setIsEditing(false);
  };

  // Hủy thay đổi, quay lại dữ liệu cũ
  const handleCancel = () => {
    setEditInfo(personalInfo);
    setIsEditing(false);
  };

  return (
    <div className="personal-info-container">
      <h2 className="title">Thông tin cá nhân</h2>
      <div className="info-grid">
        {editInfo.map((item) => (
          <div className="info-item" key={item.key}>
            <label htmlFor={item.key}>{item.label}</label>
            <input
              id={item.key}
              type="text"
              value={item.value}
              readOnly={!isEditing}
              onChange={(e) => handleChange(item.key, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="button-group">
        {isEditing ? (
          <>
            <button className="save-btn" onClick={handleSave}>Lưu</button>
            <button className="cancel-btn" onClick={handleCancel}>Hủy</button>
          </>
        ) : (
          <button className="update-btn" onClick={() => setIsEditing(true)}>
            Cập nhật
          </button>
        )}
      </div>
    </div>
  );
}
