const express = require('express');
const phimRoute = express.Router();

const { createPhim } = require('../../Controllers/Phim/createPhim');
const { verifyToken } = require('../../middlewares/baseToken');
const { uploadCloud } = require('../../config/cloudinary');

phimRoute.post('/create-phim', verifyToken, uploadCloud('phims').fields([
    { name: 'hinh_anh', maxCount: 1 },
    { name: 'trailer', maxCount: 1 }
]), createPhim);

module.exports = phimRoute;