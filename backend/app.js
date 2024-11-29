//dotenv
const dotenv = require('dotenv')
dotenv.config()


const express = require('express')
const cors = require('cors')


const userRoutes = require('./routes/user.routes')
const connectDb = require('./database/db')


//creating our app for using express features
const app = express()



connectDb() //connecting db


app.use(cors())//cors

app.use(express.json())
app.use(express.urlencoded({ extended: true })) //are middleware functions in Express that handle the parsing of incoming request bodies.



//routes+controller logic coming from userRoute
//basically server visit from /user then /register then will chekc middlewares and move to controller for req,res logic
app.use("/user", userRoutes)



//port
const port = process.env.PORT || 3000




//test
app.get('/', (req, res) => {
    res.send('Hello World! sounabh')
})








//listening our app 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})