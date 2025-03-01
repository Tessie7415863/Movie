const { successCode, errorCode, failCode } = require("../../config/response");
const CumRap = require("../../Models/CumRap.model");

const createCumRap = async (req, res) => {
    try {
        const { ten_cum_rap, dia_chi, ma_he_thong_rap } = req.body;
        if (await CumRap.findOne({ ten_cum_rap })) {
            return failCode(res, "Cụm rạp đã tồn tại!");
        }
        const cumrap = await CumRap.create({
            ten_cum_rap,
            dia_chi,
            ma_he_thong_rap
        });
        return successCode(res, cumrap, "Tạo cụm rạp thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { createCumRap }