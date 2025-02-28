const { successCode, errorCode, failCode } = require("../../config/response");
const NguoiDungModel = require("../../Middlewares/Models/NguoiDung.model");

const getAllNguoiDung = async (req, res) => {
    const { keyword, sortBy = "name",
        page = 1,
        limit = 10,
        order = "asc" } = req.query;
    try {
        const filter = keyword ? { name: { $regex: new RegExp(keyword, "i") } }
            : {};
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;
        const result = await NguoiDungModel.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
        const totalNguoiDungs = await NguoiDungModel.countDocuments(filter)
        const totalPages = Math.ceil(totalNguoiDungs / limitInt);
        if (result) {
            return successCode(res, { result, totalNguoiDungs, page: pageInt, totalPages: totalPages }, "Dấy danh sách người dùng thành công");
        }
        return failCode(res, "", "Danh sách người dùng trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}

module.exports = { getAllNguoiDung };