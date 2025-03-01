const { successCode, errorCode, failCode } = require("../../config/response");
const BannerModel = require("../../Models/Banner.model");

const getAllBanner = async (req, res) => {
    const {
        keyword,
        order = "asc",
        sortBy = "ma_phim",
        page = 1,
        limit = 10,
    } = req.query;
    const { id } = req.query;
    try {
        if (id) {
            const banner = await BannerModel.findOne({ _id: id }).populate("ma_phim", "ma_phim hinh_anh");
            if (!banner) {
                return failCode(res, "Không tìm thấy banner!");
            }
            return successCode(res, banner, "Lấy dữ liệu banner thành công!");
        }
        // lọc theo keyword ?keyword=
        const filter = keyword ? { ma_phim: { $regex: new RegExp(keyword, "i") } }
            : {};
        // sắp xếp theo sortBy ?sortBy=
        // sắp xếp theo order ?order=
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;

        const result = await BannerModel.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
            .populate("ma_phim", "ma_phim hinh_anh");
        // Đếm tổng số banner
        const totalBanners = await BannerModel.countDocuments(filter)
        // Tính tổng số trang
        const totalPages = Math.ceil(totalBanners / limitInt);
        if (result) {
            return successCode(res, { result, totalBanners, page: pageInt, totalPages: totalPages }, "Lấy danh sách banner thành công");
        }
        return failCode(res, "", "Danh sách banner trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}

module.exports = { getAllBanner };