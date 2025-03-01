const { successCode, errorCode, failCode } = require("../../config/response");
const NguoiDung = require("../../Models/NguoiDung.model");

const updateNguoiDung = async (req, res) => {
    try {
        const { id } = req.query;
        const { ho_ten, email, so_dt, mat_khau } = req.body;
        const nguoidung = await NguoiDung.findOneAndUpdate(
            { _id: id },
            {
                ho_ten,
                email,
                so_dt,
                mat_khau
            }, { new: true });
        if (!nguoidung) {
            return failCode(res, "Người dùng không tồn tại!");
        }
        return successCode(res, nguoidung, "Cập nhật người dùng thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
};

module.exports = { updateNguoiDung };