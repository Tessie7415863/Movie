const express = require('express');
const lichchieuRoute = express.Router();

const { updateLichChieu } = require('../../Controllers/LichChieu/updateLichChieu');
const { verifyToken } = require('../../middlewares/baseToken');

lichchieuRoute.put('/update-lich-chieu', verifyToken, updateLichChieu);

module.exports = lichchieuRoute;