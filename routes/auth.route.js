const express = require('express');
let app = express();
const authRoute = express.Router();
let authController = require('./../Controller/auth.controller');

app.use(function (req, res, next) {
  res.header({'Access-Control-Allow-Headers':"*"}, 'token, Origin, Content-Type, Accept');
  next();
});

authRoute.post('/signup', authController.signup);
authRoute.post('/login',authController.login)
authRoute.patch('/edit',authController.editAuth)

module.exports = authRoute;
