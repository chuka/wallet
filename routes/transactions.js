const express = require('express')
const route = express.Router()
const Account = require('../models/accounts') 
const {initializePayment, verifyPayment} =  require('../paystack.js')



//Topup a wallet

route.get('/',(req,res)=>{
 res.send('all transactions page')
})

//GET A UNIQUE TRANSACTION





module.exports = route