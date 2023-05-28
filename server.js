const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 2000;
require('dotenv').config({path: './config.env'});
const connectDb = require('./db/db');
const User = require('./route/userroute');


app.use('./getAllUsers', User)
connectDb()
  .then(() => {
    console.log('Database connection is successful');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });