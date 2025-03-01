const express = require('express');
const phimRoute = express.Router();

const { deletePhim } = require('../../Controllers/Phim/deletePhim');
const { verifyToken } = require('../../middlewares/baseToken');

phimRoute.delete('/delete-phim', verifyToken, deletePhim);

module.exports = phimRoute;