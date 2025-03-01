const { successCode, errorCode, failCode } = require('../../config/response');
const RoleModel = require('../../Models/Role.model');

const createRole = async (req, res) => {
    try {
        //lấy dữ liệu role truyền vào từ body
        const { loai_nguoi_dung, mo_ta } = req.body;

        //tạo role mới
        const role = await RoleModel.create({
            loai_nguoi_dung,
            mo_ta,
        });

        //trả về thông báo thành công
        if (role) {
            return successCode(res, role, "Tạo thành công!");
        }
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { createRole };