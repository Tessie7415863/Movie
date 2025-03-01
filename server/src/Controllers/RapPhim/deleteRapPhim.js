const { successCode, errorCode, failCode } = require("../../config/response");
const RapPhim = require('../../Models/RapPhim.model');

const deleteRapPhim = async (req, res) => {
    try {
        const { id } = req.query;
        const rapphim = await RapPhim.findOneAndDelete({ _id: id });
        if (!rapphim) {
            return failCode(res, "", "Không tìm thấy rạp phim để xóa!");
        };
        return successCode(res, '', "Xóa rạp phim thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { deleteRapPhim }