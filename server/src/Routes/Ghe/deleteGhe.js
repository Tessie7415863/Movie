const express = require('express');
const gheRoute = express.Router();

const { deleteGhe } = require('../../Controllers/Ghe/deleteGhe');
const { verifyToken } = require('../../middlewares/baseToken');

gheRoute.delete('/delete-ghe', verifyToken, deleteGhe);

module.exports = gheRoute;