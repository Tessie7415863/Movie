const { successCode, errorCode, failCode } = require("../../config/response");
const CumRap = require("../../Models/CumRap.model");

const getAllCumRap = async (req, res) => {
    const {
        keyword,
        order = "asc",
        sortBy = "ten_cum_rap",
        page = 1,
        limit = 10,
    } = req.query;
    const { id } = req.query;
    try {
        if (id) {
            const cumrap = await CumRap.findOne({ _id: id }).populate("ma_he_thong_rap", "ma_he_thong_rap ten_he_thong_rap");
            if (!cumrap) {
                return failCode(res, "Không tìm thấy cụm rạp!");
            }
            return successCode(res, cumrap, "Lấy dữ liệu cụm rạp thành công!");
        }
        // lọc theo keyword ?keyword=
        const filter = keyword ? { ten_cum_rap: { $regex: new RegExp(keyword, "i") } }
            : {};
        // sắp xếp theo sortBy ?sortBy=
        // sắp xếp theo order ?order=
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;

        const result = await CumRap.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
            .populate("ma_he_thong_rap", "ma_he_thong_rap ten_he_thong_rap");
        // Đếm tổng số cụm rạp
        const totalCumRaps = await CumRap.countDocuments(filter)
        // Tính tổng số trang
        const totalPages = Math.ceil(totalCumRaps / limitInt);
        if (result) {
            return successCode(res, { result, totalCumRaps, page: pageInt, totalPages: totalPages }, "Lấy danh sách cụm rạp thành công");
        }
        return failCode(res, "", "Danh sách cụm rạp trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}

module.exports = { getAllCumRap };