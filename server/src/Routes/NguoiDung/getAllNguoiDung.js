const express = require("express");
const nguoidungRoute = express.Router();
const { getAllNguoiDung } = require("../../Controllers/NguoiDung/getAllNguoiDung");
const { verifyToken } = require('../../middlewares/baseToken');

nguoidungRoute.get("/get-all-nguoi-dung", verifyToken, getAllNguoiDung);

module.exports = nguoidungRoute;
