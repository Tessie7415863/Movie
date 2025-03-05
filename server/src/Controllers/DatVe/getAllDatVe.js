const { successCode, errorCode, failCode } = require("../../config/response");
const DatVe = require("../../Models/DatVe.model");

const getAllDatVe = async (req, res) => {
    const {
        keyword,
        order = "asc",
        sortBy = "ma_lich_chieu",
        page = 1,
        limit = 10,
    } = req.query;
    const { id } = req.query;
    try {
        if (id) {
            const datve = await DatVe.findOne({ _id: id }).populate("ma_lich_chieu", "ma_lich_chieu ma_ghe");
            if (!datve) {
                return failCode(res, "Không tìm thấy vé đã đặt!");
            }
            return successCode(res, datve, "Lấy vé đặt thành công!");
        }
        // lọc theo keyword ?keyword=
        const filter = keyword ? { ma_lich_chieu: { $regex: new RegExp(keyword, "i") } }
            : {};
        // sắp xếp theo sortBy ?sortBy=
        // sắp xếp theo order ?order=
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;

        const result = await DatVe.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
            .populate("ma_lich_chieu", "ma_lich_chieu ma_ghe");
        // Đếm tổng số vé
        const totalDatVes = await DatVe.countDocuments(filter)
        // Tính tổng số trang
        const totalPages = Math.ceil(totalDatVes / limitInt);
        if (result) {
            return successCode(res, { result, totalDatVes, page: pageInt, totalPages: totalPages }, "Lấy danh sách vé đặt thành công");
        }
        return failCode(res, "", "Danh sách đặt vé trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}

module.exports = { getAllDatVe }