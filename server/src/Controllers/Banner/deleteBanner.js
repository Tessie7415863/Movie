const { successCode, errorCode, failCode } = require("../../config/response");
const Banner = require("../../Models/Banner.model");

const deleteBanner = async (req, res) => {
    try {
        const { id } = req.query;
        const banner = await Banner.findOneAndDelete({ _id: id });
        if (!banner) {
            return failCode(res, "", "Không tìm thấy banner để xóa!");
        }
        return successCode(res, '', "Xóa banner thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { deleteBanner }