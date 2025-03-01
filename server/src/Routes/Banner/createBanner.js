const express = require('express');
const bannerRoute = express.Router();

const { createBanner } = require('../../Controllers/Banner/createBanner');
const { verifyToken } = require('../../middlewares/baseToken');

bannerRoute.post('/create-banner', verifyToken, createBanner);

module.exports = bannerRoute;