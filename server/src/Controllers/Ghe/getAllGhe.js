const { successCode, errorCode, failCode } = require("../../config/response");
const Ghe = require("../../Models/Ghe.model");

const getAllGhe = async (req, res) => {
    const {
        keyword,
        order = "asc",
        sortBy = "ten_ghe",
        page = 1,
        limit = 10,
    } = req.query;
    const { id } = req.query;
    try {
        if (id) {
            const ghe = await Ghe.findOne({ _id: id }).populate("ma_rap", "ma_rap ten_rap");
            if (!ghe) {
                return failCode(res, "Không tìm thấy ghế!");
            }
            return successCode(res, ghe, "Lấy dữ liệu ghế thành công!");
        }
        // lọc theo keyword ?keyword=
        const filter = keyword ? { ten_ghe: { $regex: new RegExp(keyword, "i") } }
            : {};
        // sắp xếp theo sortBy ?sortBy=
        // sắp xếp theo order ?order=
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;

        const result = await Ghe.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
            .populate("ma_rap", "ma_rap ten_rap");
        // Đếm tổng số ghế
        const totalGhes = await Ghe.countDocuments(filter)
        // Tính tổng số trang
        const totalPages = Math.ceil(totalGhes / limitInt);
        if (result) {
            return successCode(res, { result, totalGhes, page: pageInt, totalPages: totalPages }, "Lấy danh sách ghế thành công");
        }
        return failCode(res, "", "Danh sách ghế trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}

module.exports = { getAllGhe }; 