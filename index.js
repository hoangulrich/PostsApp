const express = require('express')
const connectDB = require('./config/db')
const posts = require('./routes/posts')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
//init express
const app = express()

//express middleware
app.use(express.json())
app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')

//connect database
connectDB()

//basic routes
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req,res)=>res.render('about'))

//body parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//use routes
app.use('/posts', posts)

const PORT = 5000;

app.listen(PORT, () => console.log(`Server khoi dong tai port ${PORT}`))