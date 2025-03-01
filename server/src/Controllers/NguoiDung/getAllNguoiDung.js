const { successCode, errorCode, failCode } = require("../../config/response");
const NguoiDungModel = require("../../Models/NguoiDung.model");

const getAllNguoiDung = async (req, res) => {
    const {
        keyword,
        order = "asc",
        sortBy = "ho_ten",
        page = 1,
        limit = 10,
    } = req.query;
    const { id } = req.query;
    try {
        if (id) {
            const nguoidung = await NguoiDungModel.findOne({ _id: id }).populate("loai_nguoi_dung", "loai_nguoi_dung mo_ta");
            if (!nguoidung) {
                return failCode(res, "Không tìm thấy người dùng!");
            }
            return successCode(res, nguoidung, "Lấy dữ liệu người dùng thành công!");
        }
        // lọc theo keyword ?keyword=
        const filter = keyword ? { ho_ten: { $regex: new RegExp(keyword, "i") } }
            : {};
        // sắp xếp theo sortBy ?sortBy=
        // sắp xếp theo order ?order=
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;

        const result = await NguoiDungModel.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
            .populate("loai_nguoi_dung", "loai_nguoi_dung mo_ta");
        // Đếm tổng số người dùng
        const totalNguoiDungs = await NguoiDungModel.countDocuments(filter)
        // Tính tổng số trang
        const totalPages = Math.ceil(totalNguoiDungs / limitInt);
        if (result) {
            return successCode(res, { result, totalNguoiDungs, page: pageInt, totalPages: totalPages }, "Lấy danh sách người dùng thành công");
        }
        return failCode(res, "", "Danh sách người dùng trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}

module.exports = { getAllNguoiDung };