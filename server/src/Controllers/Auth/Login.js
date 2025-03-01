const { failCode, errorCode, successCodeLogin } = require("../../config/response");
const NguoiDung = require("../../Models/NguoiDung.model");
const bcrypt = require('bcrypt');
const Login = async (req, res) => {
    try {
        const { email, mat_khau } = req.body;
        const result = await NguoiDung.findOne({ email })
        if (result) {
            const { mat_khau: matkhauHash, ...userInfo } = result.toObject();
            const checkPass = bcrypt.compareSync(mat_khau, matkhauHash);
            if (checkPass) {
                return successCodeLogin(res, userInfo, "Đăng nhập thành công!");
            } else {
                return failCode(res, "", "Mật khẩu không đúng!");
            }
        }
        return failCode(res, "", "Email không tồn tại!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { Login };