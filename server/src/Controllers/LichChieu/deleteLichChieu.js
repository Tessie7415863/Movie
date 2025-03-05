const { successCode, errorCode, failCode } = require("../../config/response");
const LichChieu = require("../../Models/LichChieu.model");

const deleteLichChieu = async (req, res) => {
    try {
        const { id } = req.query;
        const lichchieu = await LichChieu.findOneAndDelete(
            { _id: id },
        );
        if (!lichchieu) {
            return failCode(res, "Không tìm thấy lịch chiếu để xóa!");
        }
        return successCode(res, "", "Xóa lịch chiếu thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { deleteLichChieu }