const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')




const app = express()


app.use(cors())



const port =  process.env.PORT || 3000





app.get('/', (req, res) => {
    res.send('Hello World! sounabh')
})









app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})