const { successCode, errorCode, failCode } = require("../../config/response");
const RapPhim = require("../../Models/RapPhim.model");

const getAllRapPhim = async (req, res) => {
    const {
        keyword,
        order = "asc",
        sortBy = "ten_rap",
        page = 1,
        limit = 10,
    } = req.query;
    const { id } = req.query;
    try {
        if (id) {
            const rapphim = await RapPhim.findOne({ _id: id }).populate("ma_cum_rap", "ma_cum_rap ten_cum_rap");
            if (!rapphim) {
                return failCode(res, "Không tìm thấy rạp phim!");
            }
            return successCode(res, rapphim, "Lấy dữ liệu rạp phim thành công!");
        }
        // lọc theo keyword ?keyword=
        const filter = keyword ? { ten_rap: { $regex: new RegExp(keyword, "i") } }
            : {};
        // sắp xếp theo sortBy ?sortBy=
        // sắp xếp theo order ?order=
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;

        const result = await RapPhim.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
            .populate("ma_cum_rap", "ma_cum_rap ten_cum_rap");
        // Đếm tổng số rạp phim
        const totalRapPhims = await RapPhim.countDocuments(filter)
        // Tính tổng số trang
        const totalPages = Math.ceil(totalRapPhims / limitInt);
        if (result) {
            return successCode(res, { result, totalRapPhims, page: pageInt, totalPages: totalPages }, "Lấy danh sách rạp phim thành công");
        }
        return failCode(res, "", "Danh sách rạp phim trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}

module.exports = { getAllRapPhim };