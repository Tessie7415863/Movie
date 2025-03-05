const { successCode, errorCode, failCode } = require("../../config/response");
const Phim = require("../../Models/Phim.model");

const updatePhim = async (req, res) => {
    try {
        const { id } = req.query;
        // fromDay, toDay
        const { ten_phim, trailer, hinh_anh, mo_ta, ngay_khoi_chieu, danh_gia, hot, dang_chieu, sap_chieu } = req.body;
        const phim = await Phim.findOneAndUpdate({ _id: id },
            {
                ten_phim,
                trailer,
                hinh_anh,
                mo_ta,
                ngay_khoi_chieu,
                danh_gia,
                hot,
                dang_chieu,
                sap_chieu
            }, { new: true });
        if (!phim) {
            return failCode(res, "", "Không có phim để cập nhật!");
        }
        return successCode(res, phim, "Cập nhật phim thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { updatePhim }