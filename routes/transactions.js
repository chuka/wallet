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

     //update the balance
      const updated_balance =await Account.updateOne({_id:sender_id},{$set:{balance:new_balance}})

      const new_transaction = new Transaction({
        	sender_id:sender_id,
        	sender_name:sender_name,
        	recipient:recipient,
        	amount:amount,
        	description:description,
        	status:'success',
        	date:new Date(),
        	balance:new_balance
        })

      const receipt = await new_transaction.save()
          res.send(receipt)
       

   	 }catch(err){
   	 	res.send(err)
   	 }
   	 
   }
})


//GET ALL TRANSACTIONS
route.get('/',async(req,res)=>{
	try{
		const transactions = await Transaction.find()
	if(transactions.length >0){
		res.status(200).send(transactions)
	}
	return res.status(400).send("transaction database is empty")
	}catch(err){
		res.send(err)
	}
	})


//GET ONE TRANSACTION
route.get('/:id',async(req,res)=>{
	try{
		 const transaction = await Transaction.find({_id:req.params.transaction_id})
	    if(transaction){
		res.status(200).send('transaction')
	}
	return res.status(400).send('no such transactions exist!')
	}catch(err){
		res.send(err)
	}
	
}) 

//GET ALL TRANSACTIONS FOR A USER

route.get('/user/:id',async(req,res)=>{
	if(req.body){
		try{
		const transactions = await Transactions.find({sender_id:req.params.user_id})
		res.status(200).send(transactions)
	}catch(err){
		res.send(err)
	}

	}
	})

// CANCEL A TRANSACTION


module.exports = route