const { successCode, errorCode, failCode } = require("../../config/response");
const DatVe = require("../../Models/DatVe.model");

const updateDatVe = async (req, res) => {
    try {
        const { id } = req.query;
        const { ma_lich_chieu, ma_ghe } = req.body;
        const datve = await DatVe.findOneAndUpdate({ _id: id },
            {
                ma_lich_chieu,
                ma_ghe
            },
            { new: true });
        if (!datve) {
            return failCode(res, "Vé không tồn tại!");
        }
        return successCode(res, datve, "Cập nhật vé thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { updateDatVe }