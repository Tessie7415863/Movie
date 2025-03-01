const { successCode, errorCode, failCode } = require("../../config/response");
const HeThongRap = require("../../Models/HeThongRap.model");

const updateHeThongRap = async (req, res) => {
    try {
        const { id } = req.query;
        const { ten_he_thong_rap, logo } = req.body;
        const hethongrap = await HeThongRap.findOneAndUpdate(
            { _id: id },
            {
                ten_he_thong_rap,
                logo
            }, { new: true });
        if (!hethongrap) {
            return failCode(res, "Hệ thống rạp không tồn tại!");
        }
        return successCode(res, hethongrap, "Cập nhật hệ thống rạp thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { updateHeThongRap }