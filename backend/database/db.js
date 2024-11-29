const mongoose = require('mongoose')


function connectDb(){

//database connection

    mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
        console.log("Database is connected");
        
    }).catch(err=>console.log(err))
}



module.exports = connectDb