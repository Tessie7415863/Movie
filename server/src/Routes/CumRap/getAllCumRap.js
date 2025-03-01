const express = require('express');
const cumrapRoute = express.Router();

const { getAllCumRap } = require('../../Controllers/CumRap/getAllCumRap');
const { verifyToken } = require('../../middlewares/baseToken');

cumrapRoute.get('/get-all-cum-rap', verifyToken, getAllCumRap);

module.exports = cumrapRoute;