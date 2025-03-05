const { successCode, errorCode, failCode } = require("../../config/response");
const Phim = require("../../Models/Phim.model");


const createPhim = async (req, res) => {
    try {
        const { ten_phim, mo_ta, ngay_khoi_chieu, danh_gia, hot, dang_chieu, sap_chieu } = req.body;
        if (!req.files || !req.files.hinh_anh || !req.files.trailer) {
            return failCode(res, "", "Vui lòng tải lên một hình ảnh và trailer!");
        }
        if (await Phim.findOne({ ten_phim })) {
            return failCode(res, "", "Phim đã tồn tại!");
        }

        // Lấy URL từ Cloudinary
        const imageUrl = req.files.hinh_anh[0].path;
        const videoURL = req.files.trailer[0].path;

        // Lưu vào database
        const phim = await Phim.create({
            ten_phim,
            trailer: videoURL,
            hinh_anh: imageUrl,
            mo_ta,
            ngay_khoi_chieu: new Date(ngay_khoi_chieu),
            danh_gia,
            hot,
            dang_chieu,
            sap_chieu
        });
        if (!phim) {
            return failCode(res, "", "Tạo phim thất bại!");
        };
        return successCode(res, phim, "Tạo phim thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { createPhim };