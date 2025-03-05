const { successCode, errorCode, failCode } = require("../../config/response");
const Phim = require("../../Models/Phim.model");

const getAllPhim = async (req, res) => {
    const {
        keyword,
        order = "asc",
        sortBy = "ten_phim",
        page = 1,
        limit = 10,
    } = req.query;
    const { id } = req.query;
    try {
        if (id) {
            const phim = await Phim.findOne({ _id: id }).populate("ten_phim", "ten_phim mo_ta ngay_khoi_chieu");
            if (!phim) {
                return failCode(res, "Không tìm thấy phim!");
            }
            return successCode(res, phim, "Lấy dữ liệu phim thành công!");
        }
        // lọc theo keyword ?keyword=
        const filter = keyword ? { ten_phim: { $regex: new RegExp(keyword, "i") } }
            : {};
        // sắp xếp theo sortBy ?sortBy=
        // sắp xếp theo order ?order=
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;

        const result = await Phim.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
            .populate("ten_phim", "ten_phim mo_ta ngay_khoi_chieu");
        // Đếm tổng số phim
        const totalPhims = await Phim.countDocuments(filter)
        // Tính tổng số trang
        const totalPages = Math.ceil(totalPhims / limitInt);
        if (result) {
            return successCode(res, { result, totalPhims, page: pageInt, totalPages: totalPages }, "Lấy danh sách phim thành công");
        }
        return failCode(res, "", "Danh sách phim trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}
module.exports = { getAllPhim }