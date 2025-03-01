const express = require('express');
const rapphimRoute = express.Router();

const { updateRapPhim } = require('../../Controllers/RapPhim/updateRapPhim');
const { verifyToken } = require('../../middlewares/baseToken');

rapphimRoute.put('/update-rap-phim', verifyToken, updateRapPhim);

module.exports = rapphimRoute;