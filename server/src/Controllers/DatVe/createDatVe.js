const { successCode, errorCode, failCode } = require("../../config/response");
const DatVe = require("../../Models/DatVe.model");

const createDatVe = async (req, res) => {
    try {
        const { ma_lich_chieu, ma_ghe } = req.body;
        if (await DatVe.findOne({ ma_lich_chieu, ma_ghe })) {
            return failCode(res, "Vé đã tồn tại!");
        }
        const datve = await DatVe.create({
            ma_lich_chieu,
            ma_ghe
        });
        await datve.populate([
            {
                path: 'ma_lich_chieu',
                populate: {
                    path: 'ma_rap',
                    populate: {
                        path: 'ma_cum_rap',
                        populate: {
                            path: 'ma_he_thong_rap',
                            select: 'ten_he_thong_rap'
                        }
                    }
                }
            },
            {
                path: 'ma_ghe',
                select: 'ten_ghe loai_ghe'
            }
        ]);
        return successCode(res, datve, "Tạo vé thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { createDatVe }