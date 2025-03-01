const { successCode, errorCode, failCode } = require("../../config/response");
const RapPhim = require('../../Models/RapPhim.model');

const updateRapPhim = async (req, res) => {
    try {
        const { id } = req.query;
        const { ten_rap, ma_cum_rap } = req.body;
        const rapphim = await RapPhim.findOneAndUpdate({ _id: id },
            {
                ten_rap,
                ma_cum_rap
            },
            { new: true });
        if (!rapphim) {
            return failCode(res, "", "Không tìm thấy rạp phim để cập nhật!");
        };
        return successCode(res, rapphim, "Cập nhật rạp phim thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { updateRapPhim }