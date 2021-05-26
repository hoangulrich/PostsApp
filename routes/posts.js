const express = require('exoress')
const router = express.Router()

//Load model

//Test
router.get('/', (req, res) => {
    res.send('This is router post')
})

module.exports = router