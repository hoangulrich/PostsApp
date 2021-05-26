const express = require('express')
const connectDB = require('./config/db')
const posts = require('./routes/posts')

//init express
const app = express()

//express middleware
app.use(express.json())

//connect database
connectDB()

//use routes
app.use('/posts', posts)

const PORT = 5000;

app.listen(PORT, () => console.log(`Server khoi dong tai port ${PORT}`))