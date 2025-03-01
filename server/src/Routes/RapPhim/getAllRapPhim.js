const express = require('express');
const rapphimRoute = express.Router();

const { getAllRapPhim } = require('../../Controllers/RapPhim/getAllRapPhim');
const { verifyToken } = require('../../middlewares/baseToken');

rapphimRoute.get('/get-all-rap-phim', verifyToken, getAllRapPhim);

module.exports = rapphimRoute;