const { successCode, errorCode, failCode } = require("../../config/response");
const HeThongRap = require("../../Models/HeThongRap.model");

const getAllHeThongRap = async (req, res) => {
    const {
        keyword,
        order = "asc",
        sortBy = "ten_he_thong_rap",
        page = 1,
        limit = 10,
    } = req.query;
    const { id } = req.query;
    try {
        if (id) {
            const hethongrap = await HeThongRap.findOne({ _id: id }).populate("ten_he_thong_rap", "ten_he_thong_rap logo");
            if (!hethongrap) {
                return failCode(res, "Không tìm thấy hệ thống rạp!");
            }
            return successCode(res, hethongrap, "Lấy dữ liệu hệ thống rạp thành công!");
        }
        // lọc theo keyword ?keyword=
        const filter = keyword ? { ten_he_thong_rap: { $regex: new RegExp(keyword, "i") } }
            : {};
        // sắp xếp theo sortBy ?sortBy=
        // sắp xếp theo order ?order=
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;

        const result = await HeThongRap.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
            .populate("ten_he_thong_rap", "ten_he_thong_rap logo");
        // Đếm tổng số hệ thống rạp
        const totalHeThongRaps = await HeThongRap.countDocuments(filter)
        // Tính tổng số trang
        const totalPages = Math.ceil(totalHeThongRaps / limitInt);
        if (result) {
            return successCode(res, { result, totalHeThongRaps, page: pageInt, totalPages: totalPages }, "Lấy danh sách hệ thống rạp thành công");
        }
        return failCode(res, "", "Danh sách hệ thống rạp trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}

module.exports = { getAllHeThongRap }