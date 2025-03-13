interface InfoItem {
  key: string;
  label: string;
  value: string;
}

import "../../styles/sinhvien/PersonalInfo.css";

const personalInfo: InfoItem[] = [
  { key: "fullName", label: "Họ và tên", value: "Trần Văn Bình" },
  { key: "gender", label: "Giới tính", value: "Nam" },
  { key: "dob", label: "Ngày sinh", value: "15/08/1985" },
  { key: "phone", label: "Số điện thoại", value: "0987654321" },
  { key: "email", label: "Email", value: "binh.tran@tlu.edu.vn" },
  { key: "department", label: "Khoa", value: "Công nghệ thông tin" },
  { key: "teacherId", label: "Mã giảng viên", value: "GV00123" },
  { key: "position", label: "Chức vụ", value: "Giảng viên" },
];

export default function PersonalInfo() {
  return (
    <div className="personal-info-container">
      <h2 className="title">Thông tin cá nhân</h2>
      <div className="info-grid">
        {personalInfo.map((item) => (
          <div className="info-item" key={item.key}>
            <label htmlFor={item.key}>{item.label}</label>
            <input
              id={item.key}
              type="text"
              value={item.value}
              readOnly
              aria-label={item.label}
              title={item.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
