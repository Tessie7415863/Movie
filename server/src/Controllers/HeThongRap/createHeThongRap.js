const { successCode, errorCode, failCode } = require("../../config/response");
const HeThongRap = require("../../Models/HeThongRap.model");

const createHeThongRap = async (req, res) => {
    try {
        const { ten_he_thong_rap, logo } = req.body;
        if (await HeThongRap.findOne({ ten_he_thong_rap })) {
            return failCode(res, "", "Hệ thống rạp đã tồn tại!");
        }
        const hethongrap = await HeThongRap.create({
            ten_he_thong_rap,
            logo
        });
        return successCode(res, hethongrap, "Tạo hệ thống rạp thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { createHeThongRap }