const express = require('express')
const router = express.Router()


router.post('/', function (req, res, next) {
    setTimeout(() => {
        res.sendStatus(201)
    }, 4000)
})

module.exports = router
