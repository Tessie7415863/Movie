const express = require('express');
const phimRoute = express.Router();

const { getAllPhim } = require('../../Controllers/Phim/getAllPhim');
const { verifyToken } = require('../../middlewares/baseToken');

phimRoute.get('/get-all-phim', verifyToken, getAllPhim);

module.exports = phimRoute;