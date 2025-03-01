const { successCode, errorCode, failCode } = require("../../config/response");
const Ghe = require("../../Models/Ghe.model");

const deleteGhe = async (req, res) => {
    try {
        const { id } = req.query;
        const ghe = await Ghe.findOneAndDelete({ _id: id });
        if (!ghe) {
            return failCode(res, "Không tìm thấy ghế để xóa!");
        }
        return successCode(res, '', "Xóa ghế thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { deleteGhe }