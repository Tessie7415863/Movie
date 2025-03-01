const express = require('express');
const gheRoute = express.Router();

const { getAllGhe } = require('../../Controllers/Ghe/getAllGhe');
const { verifyToken } = require('../../middlewares/baseToken');

gheRoute.get('/get-all-ghe', verifyToken, getAllGhe);

module.exports = gheRoute;  