const { successCode, errorCode, failCode } = require("../../config/response");
const HeThongRap = require("../../Models/HeThongRap.model");

const deleteHeThongRap = async (req, res) => {
    try {
        const { id } = req.query;
        const hethongrap = await HeThongRap.findOneAndDelete(
            { _id: id });
        if (!hethongrap) {
            return failCode(res, "Không tìm thấy hệ thống rạp để xóa!");
        }
        return successCode(res, '', "Xóa hệ thống rạp thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { deleteHeThongRap }