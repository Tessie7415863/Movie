const { successCode, errorCode, failCode } = require("../../config/response");
const RapPhim = require('../../Models/RapPhim.model');
const CumRap = require('../../Models/CumRap.model');

const createRapPhim = async (req, res) => {
    try {
        const { ten_rap, ma_cum_rap } = req.body;
        if (await RapPhim.findOne({ ten_rap })) {
            return failCode(res, "", "Rạp phim đã tồn tại!");
        }
        const rapphim = await RapPhim.create({
            ten_rap,
            ma_cum_rap
        });
        await rapphim.populate({
            path: 'ma_cum_rap',
            populate: {
                path: 'ma_he_thong_rap',
                select: 'ten_he_thong_rap logo'
            }
        });
        return successCode(res, rapphim, "Tạo rạp phim thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { createRapPhim }