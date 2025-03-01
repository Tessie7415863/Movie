const { successCode, errorCode, failCode } = require("../../config/response");
const Banner = require("../../Models/Banner.model");

const updateBanner = async (req, res) => {
    try {
        const { id } = req.query;
        const { ma_phim, hinh_anh } = req.body;
        const banner = await Banner.findOneAndUpdate({ _id: id },
            {
                ma_phim,
                hinh_anh
            }, { new: true });
        if (!banner) {
            return failCode(res, "", "Banner không tồn tại!");
        }
        return successCode(res, banner, "Cập nhật banner thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { updateBanner }