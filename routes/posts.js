const express = require('express')
const router = express.Router()

//Load model
const Post = require('../models/Post')

//Test
router.get('/', (req, res) => {
    res.send('This is router post')
})

module.exports = router