const { successCode, errorCode, failCode } = require("../../config/response");
const CumRap = require("../../Models/CumRap.model");

const deleteCumRap = async (req, res) => {
    try {
        const { id } = req.query;
        const cumrap = await CumRap.findOneAndDelete({ _id: id });
        if (!cumrap) {
            return failCode(res, "Không tìm thấy cụm rạp để xóa!");
        }
        return successCode(res, '', "Xóa cụm rạp thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { deleteCumRap }