const express = require('express')
const route = express.Router()
const Account = require('../models/accounts') 
const Transaction = require('../models/transactions')

//GET ALL TRANSACTIONS 

route.get('/',async(req,res)=>{

	try{
		res.send('all transactions page')
	}catch(err){
		res.send(err)
	}
 
})

//GET A UNIQUE TRANSACTION

route.get('/:id',async(req,res)=>{

	try{
		res.send(`a unique transaction with transaction id ${req.params.id}`)
	}catch(err){
		res.send(err)
	}
	
})

//TRANSFER FUNDS

route.post('/transfer',async(req,res)=>{
   if(req.body){
   	 const  sender_id = req.body.sender_id
   	 const sender_name =req.body.sender_name
   	 const recipient = req.body.recipient
   	 const amount = req.body.amount 
   	 const description = req.body.description
   	 const balance = Account.findOne({_id:sender_id})
   	 try{
   	 	if(balance ===0 || balance < amount){
        const new_transaction = new Transaction({
        	sender_id:sender_id,
        	sender_name:sender_name,
        	recipient:recipient,
        	amount:0,
        	description:description,
        	status:'declined',
        	date:new Date()
        })
        const transaction_reciept = await new_transaction.save()
        return res.send({
        	message:"transaction declined",
        	receipt:transaction_reciept
        })
    }
     let new_balance = balance - amount
      const new_transaction = new Transaction({
        	sender_id:sender_id,
        	sender_name:sender_name,
        	recipient:recipient,
        	amount:amount,
        	description:description,
        	status:'success',
        	date:new Date()
        })

      const receipt = await new_transaction.save()
      //update the balance

   	 }catch(err){
   	 	res.send(err)
   	 }
   	 
   }
})



module.exports = route