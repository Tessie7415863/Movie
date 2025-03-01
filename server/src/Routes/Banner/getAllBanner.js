const express = require('express');
const bannerRoute = express.Router();

const { getAllBanner } = require('../../Controllers/Banner/getAllBanner');
const { verifyToken } = require('../../middlewares/baseToken');

bannerRoute.put('/get-all-banner', verifyToken, getAllBanner);

module.exports = bannerRoute;