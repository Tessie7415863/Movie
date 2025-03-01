const express = require('express');
const gheRoute = express.Router();

const { updateGhe } = require('../../Controllers/Ghe/updateGhe');
const { verifyToken } = require('../../middlewares/baseToken');

gheRoute.put('/update-ghe', verifyToken, updateGhe);

module.exports = gheRoute;