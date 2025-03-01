const { successCode, errorCode, failCode } = require("../../config/response");
const Banner = require("../../Models/Banner.model");

const createBanner = async (req, res) => {
    try {
        const { ma_phim, hinh_anh } = req.body;
        const banner = await Banner.create({
            ma_phim,
            hinh_anh
        });
        if (!banner) {
            return failCode(res, "", "Tạo banner thất bại!");
        }
        return successCode(res, banner, "Tạo banner thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { createBanner }