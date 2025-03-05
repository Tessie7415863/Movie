const { successCode, errorCode, failCode } = require("../../config/response");
const LichChieu = require("../../Models/LichChieu.model");

const updateLichChieu = async (req, res) => {
    try {
        const { id } = req.query;
        const { ma_rap, ma_phim, ngay_gio_chieu, gia_ve } = req.body;
        const lichchieu = await LichChieu.findOneAndUpdate(
            { _id: id },
            {
                ma_rap,
                ma_phim,
                ngay_gio_chieu,
                gia_ve
            },
            { new: true });
        if (!lichchieu) {
            return failCode(res, "Lịch chiếu không tồn tại!");
        }
        return successCode(res, lichchieu, "Cập nhật lịch chiếu thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { updateLichChieu }