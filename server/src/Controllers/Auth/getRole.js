const { successCode, errorCode, failCode } = require('../../config/response');
const RoleModel = require('../../Models/Role.model');

const getRole = async (req, res) => {
    try {
        //tạo role mới
        const role = await RoleModel.find();

        //trả về thông báo thành công
        if (role) {
            return successCode(res, role, "Lấy dữ liệu thành công!");
        }
    } catch (error) {
        return errorCode(res, "Back-end error!");
    }
}
module.exports = { getRole };