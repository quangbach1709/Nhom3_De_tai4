import { useState } from "react";
import "../../styles/login/ChangePassword.css";

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Kiểm tra mật khẩu nhập lại có khớp không
        if (newPassword !== confirmPassword) {
            setError("Mật khẩu mới và nhập lại mật khẩu không khớp!");
            return;
        }

        // Lấy thông tin user từ localStorage
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            setError("Bạn chưa đăng nhập!");
            return;
        }

        const user = JSON.parse(storedUser);
        const userId = user.id;

        try {
            // Gửi yêu cầu đến API để xác thực và cập nhật mật khẩu
            const response = await fetch(`http://localhost:5000/users/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: newPassword,
                }),
            });

            if (!response.ok) {
                throw new Error("Đổi mật khẩu thất bại!");
            }

            setSuccess("Đổi mật khẩu thành công!");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error) {
            setError("Có lỗi xảy ra khi đổi mật khẩu!");
        }
    };

    return (
        <div className="change-password-container">
            <form onSubmit={handleChangePassword}>
                <h2 className="change-password-header">Đổi Mật Khẩu</h2>

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                <div className="form-group">
                    <label>Mật khẩu hiện tại</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mật khẩu mới</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Nhập lại mật khẩu mới</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button className="btn btn-submit" type="submit">
                    Đổi mật khẩu
                </button>
                <button type="button" className="btn btn-cancel" onClick={() => setError("")}>
                    Hủy
                </button>
            </form>
        </div>
    );
}
