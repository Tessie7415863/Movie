const express = require('express');
const datveRoute = express.Router();

const { updateDatVe } = require('../../Controllers/DatVe/updateDatVe');
const { verifyToken } = require('../../middlewares/baseToken');

datveRoute.put('/update-dat-ve', verifyToken, updateDatVe);

module.exports = datveRoute;