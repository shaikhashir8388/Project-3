const express = require('express');
const router = express.Router()
const {getAllUsers} = require('../controller/controller')


router.get('/', getAllUsers);
module.exports = router;
