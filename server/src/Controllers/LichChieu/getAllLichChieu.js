const { successCode, errorCode, failCode } = require("../../config/response");
const LichChieu = require("../../Models/LichChieu.model");

const getAllLichChieu = async (req, res) => {
    const {
        keyword,
        order = "asc",
        sortBy = "ma_rap",
        page = 1,
        limit = 10,
    } = req.query;
    const { id } = req.query;
    try {
        if (id) {
            const lichchieu = await LichChieu.findOne({ _id: id }).populate([
                {
                    path: 'ma_rap',
                    populate: {
                        path: 'ma_cum_rap',
                        populate: {
                            path: 'ma_he_thong_rap',
                            select: 'ten_he_thong_rap'
                        }
                    }
                },
                {
                    path: 'ma_phim',
                    select: 'ten_phim ngay_gio_chieu'
                }
            ]);
            if (!lichchieu) {
                return failCode(res, "Không tìm thấy lịch chiếu!");
            }
            return successCode(res, lichchieu, "Lấy dữ liệu lịch chiếu thành công!");
        }
        // lọc theo keyword ?keyword=
        const filter = keyword ? { ma_rap: { $regex: new RegExp(keyword, "i") } }
            : {};
        // sắp xếp theo sortBy ?sortBy=
        // sắp xếp theo order ?order=
        const sortOrder = order === "desc" ? -1 : 1;

        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        const skip = (pageInt - 1) * limitInt;

        const result = await LichChieu.find(filter)
            .sort({ [sortBy]: sortOrder })
            .skip(skip)
            .limit(limitInt)
            .populate([
                {
                    path: 'ma_rap',
                    populate: {
                        path: 'ma_cum_rap',
                        populate: {
                            path: 'ma_he_thong_rap',
                            select: 'ten_he_thong_rap'
                        }
                    }
                },
                {
                    path: 'ma_phim',
                    select: 'ten_phim ngay_gio_chieu'
                }
            ]);
        // Đếm tổng số lịch chiếu
        const totalLichChieus = await LichChieu.countDocuments(filter)
        // Tính tổng số trang
        const totalPages = Math.ceil(totalLichChieus / limitInt);
        if (result) {
            return successCode(res, { result, totalLichChieus, page: pageInt, totalPages: totalPages }, "Lấy danh sách lịch chiếu thành công");
        }
        return failCode(res, "", "Danh sách lịch chiếu trống");
    } catch (error) {
        return errorCode(res, error, "Lỗi server");
    }
}
module.exports = { getAllLichChieu }