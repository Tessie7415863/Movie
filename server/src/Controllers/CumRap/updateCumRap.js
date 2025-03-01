const { successCode, errorCode, failCode } = require("../../config/response");
const CumRap = require("../../Models/CumRap.model");

const updateCumRap = async (req, res) => {
    try {
        const { id } = req.query;
        const { ten_cum_rap, dia_chi, ma_he_thong_rap } = req.body;

        const cumrap = await CumRap.findOneAndUpdate({ _id: id },
            {
                ten_cum_rap,
                dia_chi,
                ma_he_thong_rap
            },
            { new: true });

        if (!cumrap) {
            return failCode(res, "Cụm rạp không tồn tại!");
        }
        return successCode(res, cumrap, "Cập nhật cụm rạp thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { updateCumRap }