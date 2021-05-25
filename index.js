const express = require('express')
const connectDB = require('./config/db')
//init express
const app = express()

app.use(express.json())

//connect
connectDB()
const PORT = 5000;

app.listen(PORT, () => console.log(`Server khoi dong tai port ${PORT}`))