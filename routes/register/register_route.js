const express = require('express')
const router = express.Router();
const {registerController} = require('./register_controller')

router.post('/register', registerController)





module.exports = router