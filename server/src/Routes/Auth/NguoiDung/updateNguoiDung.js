const express = require('express');
const nguoidungRoute = express.Router();

const { updateNguoiDung } = require('../../../Controllers/NguoiDung/updateNguoiDung');
const { verifyToken } = require('../../../middlewares/baseToken');

nguoidungRoute.put('/update-nguoidung', verifyToken, updateNguoiDung);

module.exports = nguoidungRoute;