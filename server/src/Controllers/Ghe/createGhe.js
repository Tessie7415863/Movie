const { successCode, errorCode, failCode } = require("../../config/response");
const Ghe = require("../../Models/Ghe.model");

const createGhe = async (req, res) => {
    try {
        const { ten_ghe, loai_ghe, ma_rap } = req.body;
        if (await Ghe.findOne({ ten_ghe })) {
            return failCode(res, "Ghế đã tồn tại!");
        }
        const ghe = await Ghe.create({
            ten_ghe,
            loai_ghe,
            ma_rap
        });
        await ghe.populate({
            path: 'ma_rap',
            populate: {
                path: 'ma_cum_rap',
                populate: {
                    path: 'ma_he_thong_rap',
                    select: 'ten_he_thong_rap'
                }
            }
        });
        return successCode(res, ghe, "Tạo ghế thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { createGhe }