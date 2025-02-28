const express = require('express');
const nguoidungRoute = express.Router();

const { deleteNguoiDung } = require('../../../Controllers/NguoiDung/deleteNguoiDung');
const { verifyToken } = require('../../../middlewares/baseToken');

nguoidungRoute.delete('/delete-nguoidung', verifyToken, deleteNguoiDung);

module.exports = nguoidungRoute;