const express = require('express');
const hethongrapRoute = express.Router();

const { getAllHeThongRap } = require('../../Controllers/HeThongRap/getAllHeThongRap');
const { verifyToken } = require('../../middlewares/baseToken');

hethongrapRoute.get('/get-all-he-thong-rap', verifyToken, getAllHeThongRap);

module.exports = hethongrapRoute;