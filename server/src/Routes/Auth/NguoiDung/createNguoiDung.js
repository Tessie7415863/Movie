const express = require('express');
const nguoidungRoute = express.Router();

const { createNguoiDung } = require('../../../Controllers/NguoiDung/createNguoiDung');
const { verifyToken } = require('../../../middlewares/baseToken');

nguoidungRoute.post('/create-nguoidung', verifyToken, createNguoiDung);

module.exports = nguoidungRoute;