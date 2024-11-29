const mongoose = require('mongoose');
const jwt    = require('jsonwebtoken')
const bcrypt    = require('bcrypt')




// Define the User schema
const userSchema = new mongoose.Schema({

    fullname: {

        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name must be atleast 3 characters long"]
        },
        lastname: {
            type: String,
            minlength: [3, "Last name must be atleast 3 characters long"]
        },

    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'] // Basic email validation

    },
    password: {
        type: String,
        required: true,
        select:false

    },
    SocketId:{
        type:String
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});













// Create the User model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
