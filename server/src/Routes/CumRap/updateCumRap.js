const express = require('express');
const cumrapRoute = express.Router();

const { updateCumRap } = require('../../Controllers/CumRap/updateCumRap');
const { verifyToken } = require('../../middlewares/baseToken');

cumrapRoute.put('/update-cum-rap', verifyToken, updateCumRap);

module.exports = cumrapRoute;