const express = require('express')
const route = express.Router()
const {initializePayment, verifyPayment} =  require('../paystack.js')



//Topup a wallet

route.get('/',(req,res)=>{
 res.send('all transactions page')
})


module.exports = route