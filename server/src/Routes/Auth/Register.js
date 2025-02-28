const express = require('express');
const authRoute = express.Router();

const { Register } = require('../../Controllers/Auth/Register');

authRoute.post('/register', Register);

module.exports = authRoute;
