const express = require('express');
const bannerRoute = express.Router();

const { createBanner, uploadCloud } = require('../../Controllers/Banner/createBanner');
const { verifyToken } = require('../../middlewares/baseToken');

bannerRoute.post('/create-banner', verifyToken, uploadCloud.single('hinh_anh'), createBanner);

module.exports = bannerRoute;
