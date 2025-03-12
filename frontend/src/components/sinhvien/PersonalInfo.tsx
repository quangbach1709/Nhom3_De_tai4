
interface InfoItem {
  key: string;
  label: string;
  value: string;
}
import "../../styles/sinhvien/PersonalInfo.css";

const personalInfo: InfoItem[] = [
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
