const express = require("express");
const nguoidungRoute = express.Router();
const { getAllNguoiDung } = require("../../../Controllers/NguoiDung/getAllNguoiDung");

nguoidungRoute.get("/get-all-nguoidung", getAllNguoiDung);

module.exports = nguoidungRoute;
