const express = require('express')
const uuid = require('uuid')
const router = express.Router()

const enquiries = [
    {
        enquiryResponseId: uuid.v4(),
        swiftReft: 'SR-123',
        customerId: 'CN-123',
        accountNumber: 'AN-123',
        accountName: 'John Doe',
        receiverBIC: 'RBIC-012',
        senderBIC: 'SBIC-012',
        generatedTime: new Date(),
        sgsStatus: 'valid',
        messageContent: 'this message is self destructive in 5 seconds',
    },
    {
        enquiryResponseId: uuid.v4(),
        swiftReft: 'SR-456',
        customerId: 'CN-456',
        accountNumber: 'AN-456',
        accountName: 'Jane Doe',
        receiverBIC: 'RBIC-456',
        senderBIC: 'SBIC-456',
        generatedTime: new Date(),
        sgsStatus: 'valid',
        messageContent: 'this message is self destructive in 5 seconds',
    },
    {
        enquiryResponseId: uuid.v4(),
        swiftReft: 'SR-666',
        customerId: 'CN-666',
        accountNumber: 'AN-666',
        accountName: 'John Smith',
        receiverBIC: 'RBIC-666',
        senderBIC: 'SBIC-666',
        generatedTime: new Date(),
        sgsStatus: 'valid',
        messageContent: 'this message is self destructive in 5 seconds',
    },
    {
        enquiryResponseId: uuid.v4(),
        swiftReft: 'SR-007',
        customerId: 'CN-07',
        accountNumber: 'AN-007',
        accountName: 'Jane Smith',
        receiverBIC: 'RBIC-007',
        senderBIC: 'SBIC-007',
        generatedTime: new Date(),
        sgsStatus: 'valid',
        messageContent: 'this message is self destructive in 5 seconds',
    },
]

/* GET users listing. */
router.get('/', function (req, res, next) {
    setTimeout(() => {
        res.send(enquiries)
    }, 4000)
})

router.post('/', function (req, res, next) {
    setTimeout(() => {
        res.send(enquiries)
    }, 4000)
})

module.exports = router
