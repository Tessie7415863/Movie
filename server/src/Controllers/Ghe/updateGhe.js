const { successCode, errorCode, failCode } = require("../../config/response");
const Ghe = require("../../Models/Ghe.model");

const updateGhe = async (req, res) => {
    try {
        const { id } = req.query;
        const { ten_ghe, loai_ghe, ma_rap } = req.body;
        const ghe = await Ghe.findOneAndUpdate({ _id: id }, {
            ten_ghe,
            loai_ghe,
            ma_rap
        }, { new: true });
        if (!ghe) {
            return failCode(res, "Không tìm thấy ghế để cập nhật!");
        }
        return successCode(res, ghe, "Cập nhật ghế thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { updateGhe }