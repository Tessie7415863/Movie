const express = require('express');
const gheRoute = express.Router();

const { createGhe } = require('../../Controllers/Ghe/createGhe');
const { verifyToken } = require('../../middlewares/baseToken');

gheRoute.post('/create-ghe', verifyToken, createGhe);

module.exports = gheRoute;