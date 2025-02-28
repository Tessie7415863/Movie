const { successCode, errorCode } = require("../../config/response");
const NguoiDung = require("../../Middlewares/Models/NguoiDung.model");

const createNguoiDung = async (req, res) => {
    try {
        const { ho_ten, email, so_dt, mat_khau, loai_nguoi_dung } = req.body;
        const nguoidung = await NguoiDung.create({
            ho_ten,
            email,
            so_dt,
            mat_khau,
            loai_nguoi_dung
        });
        return successCode(res, nguoidung, "Tạo người dùng thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { createNguoiDung }