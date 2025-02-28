const express = require('express');
const authRoute = express.Router();

const { getRole } = require('../../Controllers/Auth/getRole');
const { verifyToken } = require('../../middlewares/baseToken');

authRoute.get('/get-role', verifyToken, getRole);

module.exports = authRoute;
