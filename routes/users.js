const express = require('express')
const uuid = require('uuid')
const router = express.Router()

const users = [
    {
        name: 'John Doe',
        id: uuid.v4(),
        hobbies: ['Basketball', 'Football', 'Books'],
    },
    {
        name: 'Jane',
        id: uuid.v4(),
        hobbies: ['Yoga', 'Hiking'],
    }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
        res.send(users)
})

module.exports = router
