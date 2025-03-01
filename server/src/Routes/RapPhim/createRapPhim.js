const express = require('express');
const rapphimRoute = express.Router();

const { createRapPhim } = require('../../Controllers/RapPhim/createRapPhim');
const { verifyToken } = require('../../middlewares/baseToken');

rapphimRoute.post('/create-rap-phim', verifyToken, createRapPhim);

module.exports = rapphimRoute;