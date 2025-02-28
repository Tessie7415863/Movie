const NguoiDung = require("../../Middlewares/Models/NguoiDung.model");
const Role = require("../../Middlewares/Models/Role.model");
const { successCode, errorCode, failCode } = require('../../config/response');
const bcrypt = require('bcrypt');

const Register = async (req, res) => {
    try {
        //lấy dữ liệu người dùng truyền vào từ body
        const { ho_ten, email, so_dt, mat_khau } = req.body;
        if (await NguoiDung.findOne({ email })) {
            return failCode(res, "", "Email đã tồn tại!");
        }

        const role = await Role.findOne({ loai_nguoi_dung: "user" });


        //tạo người dùng mới
        const nguoiDung = await NguoiDung.create({
            ho_ten,
            email,
            so_dt,
            mat_khau: await bcrypt.hash(mat_khau, 10),
            loai_nguoi_dung: role._id,
        });

        //trả về thông báo thành công
        if (nguoiDung) {
            return successCode(res, {
                ho_ten: nguoiDung.ho_ten,
                email: nguoiDung.email,
                so_dt: nguoiDung.so_dt,
            }, "Đăng ký thành công!");
        }
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { Register };