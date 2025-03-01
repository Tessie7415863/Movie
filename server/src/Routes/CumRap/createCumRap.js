const express = require('express');
const cumrapRoute = express.Router();

const { createCumRap } = require('../../Controllers/CumRap/createCumRap');
const { verifyToken } = require('../../middlewares/baseToken');

cumrapRoute.post('/create-cum-rap', verifyToken, createCumRap);

module.exports = cumrapRoute;