const UserModel = require("../models/user.model")



//creating the user in mongoDb service file 
//we called this function in controller
module.exports.createUser = async ({ firstname, lastname, email, password }) => {


    //if null or undefined or empty
    if (!firstname || !email || !password) {

        throw new Error("All fields are required")
    }


    //else create user
    const user = UserModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })


    //return the user 
    return user
}