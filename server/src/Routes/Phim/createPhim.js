const express = require('express');
const phimRoute = express.Router();

const { createPhim } = require('../../Controllers/Phim/createPhim');
const { verifyToken } = require('../../middlewares/baseToken');

phimRoute.post('/create-phim', verifyToken, createPhim);

module.exports = phimRoute;