const userService = require('../service/user.service.js');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model.js');


// This syntax adds a property (RegisterUser) to the module.exports object. The value of this property is the RegisterUser function.
// We use this when we have multiple exports from a file

// Controller login for registering a user in the database


module.exports.RegisterUser = async (req, res, next) => {


    const errors = validationResult(req); // In router body we have validate something hence

    // console.log(errors);

    // console.log(errors.isEmpty());

    if (!errors.isEmpty()) { // Checking that from validation if we get an error or not by isEmpty method
        return res.status(400).json({ errors: errors.array() }); // Return response on error
    }



    const { fullname, email, password } = req.body; // Extracting values from body

    // console.log(fullname.firstname, fullname.lastname, email, password);



    async function hashPassword(password) { // Function to hash the password - secret code  
        return await bcrypt.hash(password, 10);
    }


    const hashedPassword = await hashPassword(password);

    // console.log(hashedPassword);


    async function generateAuthToken(userId) { // Function to create the token
        const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET);
        return token;
    }


    // Create the user in database from user service
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });



    // From user_id we generate the token and return as response
    const token = await generateAuthToken(user._id);

    res.status(201).json({ token, user });
};


module.exports.LoginUser = async (req, res, next) => {



    const errors = validationResult(req);


    if (!errors.isEmpty()) { // Checking that from validation if we get an error or not by isEmpty method
        return res.status(400).json({ errors: errors.array() }); // Return response on error
    }


    const { email, password } = req.body; // Extracting values from body



    //checking that if user exist or not selct because at first we didnt select password in user model
    const userExist = await UserModel.findOne({ email }).select('+password')



    //if user dont exist 
    if (!userExist) {

        return res.status(401).json({ message: 'Invalid Email' });
    }


    //console.log(password);

    //console.log(userExist.password);



    //compare the password
    const isMatch = async function (password) {

        return await bcrypt.compare(userExist.password, password)


    }


    //if not same
    if (!isMatch) {

        return res.status(401).json({ message: 'Invalid Password' });
    }



    //generate token
    async function generateAuthToken(userId) { // Function to create the token
        const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET);
        return token;
    }



    const token = await generateAuthToken(userExist._id);


    //sending response
    res.status(200).json({ token, userExist });

}