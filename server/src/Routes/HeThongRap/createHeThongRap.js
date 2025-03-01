const express = require('express');
const hethongrapRoute = express.Router();

const { createHeThongRap } = require('../../Controllers/HeThongRap/createHeThongRap');
const { verifyToken } = require('../../middlewares/baseToken');

hethongrapRoute.post('/create-he-thong-rap', verifyToken, createHeThongRap);

module.exports = hethongrapRoute;