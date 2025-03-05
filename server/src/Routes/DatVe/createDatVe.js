const express = require('express');
const datveRoute = express.Router();

const { createDatVe } = require('../../Controllers/DatVe/createDatVe');
const { verifyToken } = require('../../middlewares/baseToken');

datveRoute.post('/create-dat-ve', verifyToken, createDatVe);

module.exports = datveRoute;