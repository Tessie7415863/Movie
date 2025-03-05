const express = require('express');
const datveRoute = express.Router();

const { getAllDatVe } = require('../../Controllers/DatVe/getAllDatVe');
const { verifyToken } = require('../../middlewares/baseToken');

datveRoute.put('/get-all-dat-ve', verifyToken, getAllDatVe);

module.exports = datveRoute;