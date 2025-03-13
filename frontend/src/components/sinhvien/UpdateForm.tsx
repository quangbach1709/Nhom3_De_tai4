import "../../styles/sinhvien/UpdateForm.css"; // Import CSS

export default function UpdateForm() {
  return (
    <div className="update-form-container">
      <div className="update-form-header">Cập nhật</div>
      <div className="update-form-body">
        <div className="update-form-group">
          <label htmlFor="fullName">Họ và tên</label>
          <input id="fullName" type="text" value="Nguyễn Văn An" readOnly placeholder="Nhập họ và tên" />
        </div>

        <div className="update-form-group">
          <label htmlFor="gender">Giới tính</label>
          <input id="gender" type="text" value="Nam" readOnly placeholder="Nhập giới tính" />
        </div>

        <div className="update-form-group">
          <label htmlFor="dob">Ngày sinh</label>
          <input id="dob" type="text" value="22/02/2000" readOnly placeholder="Nhập ngày sinh" />
        </div>

        <div className="update-form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input id="phone" type="text" value="0912345678" readOnly placeholder="Nhập số điện thoại" />
        </div>

        <div className="update-form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value="pxhoan12@gmail.com" readOnly placeholder="Nhập email" />
        </div>

        <div className="update-form-group">
          <label htmlFor="major">Chuyên ngành</label>
          <input id="major" type="text" value="Công nghệ thông tin" readOnly placeholder="Nhập chuyên ngành" />
        </div>

        <div className="update-form-actions">
          <button className="update-form-save-btn">Lưu thay đổi</button>
          <button className="update-form-cancel-btn">Hủy</button>
        </div>
      </div>
    </div>
  );
}
