const { successCode, errorCode, failCode } = require("../../config/response");
const DatVe = require("../../Models/DatVe.model");

const deleteDatVe = async (req, res) => {
    try {
        const { id } = req.query;
        const datve = await DatVe.findOneAndDelete({ _id: id });
        if (!datve) {
            return failCode(res, "Không có vé để xóa!");
        }
        return successCode(res, "", "Xóa vé thành công!");
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}

module.exports = { deleteDatVe }