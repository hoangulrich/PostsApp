const express = require('express')
const router = express.Router()

//Load model
const Post = require('../models/Post')

//Render form to add post
router.get('/add', (req, res) => {
    res.render('posts/add')
})

module.exports = router