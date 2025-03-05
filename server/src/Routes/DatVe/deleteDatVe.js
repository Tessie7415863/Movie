const express = require('express');
const datveRoute = express.Router();

const { deleteDatVe } = require('../../Controllers/DatVe/deleteDatVe');
const { verifyToken } = require('../../middlewares/baseToken');

datveRoute.delete('/delete-dat-ve', verifyToken, deleteDatVe);

module.exports = datveRoute;