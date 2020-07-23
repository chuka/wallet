const express = require('express')
const route = express.Router()

const {initializePayment, verifyPayment} =  require('../paystack.js')



//	topup

route.post('/',(req,res)=>{
	res.send('on the paystack route')
})

module.exports = route
