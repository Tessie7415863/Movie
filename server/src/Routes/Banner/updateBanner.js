const express = require('express');
const bannerRoute = express.Router();

const { updateBanner } = require('../../Controllers/Banner/updateBanner');
const { verifyToken } = require('../../middlewares/baseToken');

bannerRoute.put('/update-banner', verifyToken, updateBanner);

module.exports = bannerRoute;