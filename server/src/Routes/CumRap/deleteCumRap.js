const express = require('express');
const cumrapRoute = express.Router();

const { deleteCumRap } = require('../../Controllers/CumRap/deleteCumRap');
const { verifyToken } = require('../../middlewares/baseToken');

cumrapRoute.delete('/delete-cum-rap', verifyToken, deleteCumRap);

module.exports = cumrapRoute;