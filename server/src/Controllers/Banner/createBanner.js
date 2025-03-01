const { successCode, errorCode, failCode } = require("../../config/response");
const Banner = require("../../Models/Banner.model");
const { uploadCloud } = require("../../config/cloudinary");

const createBanner = async (req, res) => {
    try {
        const { ma_phim } = req.body;
        if (!req.file) {
            return failCode(res, "", "Vui lòng tải lên một hình ảnh!");
        }

        // Lấy URL từ Cloudinary
        const imageUrl = req.file.path;

        // Lưu vào database
        const banner = await Banner.create({
            ma_phim,
            hinh_anh: imageUrl
        });

        if (!banner) {
            return failCode(res, "", "Tạo banner thất bại!");
        }

        return successCode(res, banner, "Tạo banner thành công!");
    } catch (error) {
        return errorCode(res, "Lỗi máy chủ!");
    }
}

module.exports = { createBanner, uploadCloud: uploadCloud("banners") };
