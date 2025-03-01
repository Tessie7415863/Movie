const { successCode, errorCode, failCode } = require("../../config/response");
const NguoiDung = require("../../Models/NguoiDung.model");

const deleteNguoiDung = async (req, res) => {
    try {
        const { id } = req.query;
        const nguoidung = await NguoiDung.findOneAndDelete({ _id: id });
        if (!nguoidung) {
            return failCode(res, "Không tìm thấy người dùng để xóa!");
        }
        return successCode(res, '', "Xóa người dùng thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
};

module.exports = { deleteNguoiDung };