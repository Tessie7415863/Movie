const { successCode, errorCode, failCode } = require("../../config/response");
const Phim = require("../../Models/Phim.model");

const deletePhim = async (req, res) => {
    try {
        const { id } = req.query;
        const phim = await Phim.findOneAndDelete({ _id: id });
        if (!phim) {
            return failCode(res, "", "Không có phim để xóa!");
        }
        return successCode(res, '', "Xóa phim thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { deletePhim }