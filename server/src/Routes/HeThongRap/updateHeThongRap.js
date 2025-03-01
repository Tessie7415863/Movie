const express = require('express');
const hethongrapRoute = express.Router();

const { updateHeThongRap } = require('../../Controllers/HeThongRap/updateHeThongRap');
const { verifyToken } = require('../../middlewares/baseToken');

hethongrapRoute.put('/update-he-thong-rap', verifyToken, updateHeThongRap);

module.exports = hethongrapRoute;