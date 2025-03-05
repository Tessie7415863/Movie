const express = require('express');
const lichchieuRoute = express.Router();

const { createLichChieu } = require('../../Controllers/LichChieu/createLichChieu');
const { verifyToken } = require('../../middlewares/baseToken');

lichchieuRoute.post('/create-lich-chieu', verifyToken, createLichChieu);

module.exports = lichchieuRoute;