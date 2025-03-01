const express = require('express');
const phimRoute = express.Router();

const { updatePhim } = require('../../Controllers/Phim/updatePhim');
const { verifyToken } = require('../../middlewares/baseToken');

phimRoute.put('/update-phim', verifyToken, updatePhim);

module.exports = phimRoute;