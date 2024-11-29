const express = require('express')
const router = express.Router()

const {body } = require('express-validator') //package for our data validation works as a middleware 
const userController = require('../controller/user.controller')



//on register route

router.post("/register",[


    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("Firstname should have minimum 3 character long"),
    body('password').isLength({min:6}).withMessage("password must be atleast 6 character long"),


],userController.RegisterUser)// <--controller

module.exports = router