const express = require('express');
const authRoute = express.Router();

const { createRole } = require('../../Controllers/Auth/createRole');
const { verifyToken } = require('../../middlewares/baseToken');

authRoute.post('/create-role', verifyToken, createRole);

module.exports = authRoute;
