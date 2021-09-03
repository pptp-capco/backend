const express = require('express')
const uuid = require('uuid')
const router = express.Router()

const customerEnquiries = {
    enquiryResponseId: uuid.v4(),
    swiftReft: 'DETAIL SR-123',
    customerId: 'CN-123',
    accountNumber: 'AN-123',
    accountName: 'John Doe',
    receiverBIC: 'RBIC-012',
    senderBIC: 'SBIC-012',
    generatedTime: new Date(),
    sgsStatus: 'valid',
    messageContent: 'these are the details of the selected enquiry',
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    setTimeout(() => {
        res.send(customerEnquiries)
    }, 4000)
})

module.exports = router
