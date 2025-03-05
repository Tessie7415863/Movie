const express = require('express');
const lichchieuRoute = express.Router();

const { deleteLichChieu } = require('../../Controllers/LichChieu/deleteLichChieu');
const { verifyToken } = require('../../middlewares/baseToken');

lichchieuRoute.delete('/delete-lich-chieu', verifyToken, deleteLichChieu);

module.exports = lichchieuRoute;