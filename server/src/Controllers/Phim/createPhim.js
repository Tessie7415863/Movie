const { successCode, errorCode, failCode } = require("../../config/response");
const Phim = require("../../Models/Phim.model");

const createPhim = async (req, res) => {
    try {
        const { ten_phim, trailer, hinh_anh, mo_ta, ngay_khoi_chieu, danh_gia, hot, dang_chieu, sap_chieu } = req.body;
        if (await Phim.findOne({ ten_phim })) {
            return failCode(res, "", "Phim đã tồn tại!");
        }
        const phim = await Phim.create({
            ten_phim,
            trailer,
            hinh_anh,
            mo_ta,
            ngay_khoi_chieu,
            danh_gia,
            hot,
            dang_chieu,
            sap_chieu
        });
        return successCode(res, phim, "Tạo phim thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { createPhim }