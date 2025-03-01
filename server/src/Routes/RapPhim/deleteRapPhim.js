const express = require('express');
const rapphimRoute = express.Router();

const { deleteRapPhim } = require('../../Controllers/RapPhim/deleteRapPhim');
const { verifyToken } = require('../../middlewares/baseToken');

rapphimRoute.delete('/delete-rap-phim', verifyToken, deleteRapPhim);

module.exports = rapphimRoute;