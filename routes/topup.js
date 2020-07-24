const express = require('express')
const route = express.Router()

const Account  = require('../models/accounts.js')

const {initializePayment, verifyPayment} =  require('../paystack.js')



//	topup

route.post('/',(req,res)=>{
	res.send('on the paystack route')

	// get form details 
	const amount = req.body.amount
	const email = req.body.email
	const name = req.body.name
})

module.exports = route
