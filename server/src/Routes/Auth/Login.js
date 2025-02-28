const express = require('express');
const authRoute = express.Router();

const { Login } = require('../../Controllers/Auth/Login');

authRoute.post('/login', Login);

module.exports = authRoute;
