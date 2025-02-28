const express = require('express');
const rootRoute = express.Router();

//auth
const Login = require('./Auth/Login');
const Register = require('./Auth/Register');
const createRole = require('./Auth/createRole');
const getRole = require('./Auth/getRole');

//NguoiDung
const createNguoiDung = require('./Auth/NguoiDung/createNguoiDung');
const updateNguoiDung = require('./Auth/NguoiDung/updateNguoiDung');
const deleteNguoiDung = require('./Auth/NguoiDung/deleteNguoiDung');
const getAllNguoiDung = require('./Auth/NguoiDung/getAllNguoiDung');

//auth
rootRoute.use('/auth', Login)
rootRoute.use('/auth', Register)
rootRoute.use('/auth', createRole)
rootRoute.use('/auth', getRole)

//NguoiDung
rootRoute.use('/NguoiDung', createNguoiDung)
rootRoute.use('/NguoiDung', updateNguoiDung)
rootRoute.use('/NguoiDung', deleteNguoiDung)
rootRoute.use('/NguoiDung', getAllNguoiDung)


module.exports = rootRoute;