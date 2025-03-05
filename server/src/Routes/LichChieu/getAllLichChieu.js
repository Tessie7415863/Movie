const express = require('express');
const lichchieuRoute = express.Router();

const { getAllLichChieu } = require('../../Controllers/LichChieu/getAllLichChieu');
const { verifyToken } = require('../../middlewares/baseToken');

lichchieuRoute.get('/get-all-lich-chieu', verifyToken, getAllLichChieu);

module.exports = lichchieuRoute;