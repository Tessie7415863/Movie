const express = require('express');
const bannerRoute = express.Router();

const { deleteBanner } = require('../../Controllers/Banner/deleteBanner');
const { verifyToken } = require('../../middlewares/baseToken');

bannerRoute.delete('/delete-banner', verifyToken, deleteBanner);

module.exports = bannerRoute;