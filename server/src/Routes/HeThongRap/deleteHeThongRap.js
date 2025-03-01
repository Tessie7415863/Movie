const express = require('express');
const hethongrapRoute = express.Router();

const { deleteHeThongRap } = require('../../Controllers/HeThongRap/deleteHeThongRap');
const { verifyToken } = require('../../middlewares/baseToken');

hethongrapRoute.delete('/delete-he-thong-rap', verifyToken, deleteHeThongRap);

module.exports = hethongrapRoute;