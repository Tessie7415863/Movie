const { successCode, errorCode, failCode } = require("../../config/response");
const LichChieu = require("../../Models/LichChieu.model");

const createLichChieu = async (req, res) => {
    try {
        const { ma_rap, ma_phim, ngay_gio_chieu, gia_ve } = req.body;
        if (await LichChieu.findOne({ ma_rap, ma_phim, ngay_gio_chieu })) {
            return failCode(res, "Lịch chiếu đã tồn tại!");
        }
        const lichchieu = await LichChieu.create({
            ma_rap,
            ma_phim,
            ngay_gio_chieu,
            gia_ve
        });
        await lichchieu.populate({
            path: 'ma_rap',
            populate: {
                path: 'ma_cum_rap',
                populate: {
                    path: 'ma_he_thong_rap',
                    select: 'ten_he_thong_rap logo'
                }
            }
        });
        await lichchieu.populate('ma_phim', 'ten_phim');
        return successCode(res, lichchieu, "Tạo lịch chiếu thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { createLichChieu }