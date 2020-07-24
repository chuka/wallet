const express = require('express')
const route = express.Router()
const request = require('request')
const Topup = require('../models/topup.js')

const Account  = require('../models/accounts.js')

const {initializePayment, verifyPayment} =  require('../paystack.js')(request)



//	topup

route.post('/',(req,res)=>{
	res.send('on the paystack route')
     // get form details 
  
	const data = {
		amount:req.body.amount *100,
	    email : req.body.email,
	    name : req.body.name,
	    user_id:req.body.user_id
	}

	initializePayment(data,(error,body)=>{
		if(error){
			console.log(error)
			//return res.status(400).send(error)
		}
		response = JSON.parse(body)
		console.log(response)
		//res.redirect(response.data.authorization_url)

	})
})


route.get('/callback',(req,res)=>{
 const ref = req.query.reference
 console.log(ref)
 verifyPayment(ref,(error,body)=>{
 	if(error){
 		//handle errors appropriately
 		console.log(error)
 		return res.status(400).send(error)
 	}
 	response = JSON.parse(body)
     const data = {
     	reference:response.data.reference,
     	amount: response.data.amount,
     	email:response.data.email,
     	name:response.data.name,
     	user_id:response.data.user_id
     }
    const new_topup = new Topup(data)
    // topup the wallet by increasing the balance.

       Account.updateOne({_id:response.data.user_id},{$set:{balance:response.data.amount}})
       .then(result=>{
       	if(!result){
       		return res.status(400).send('unable to update balance')
       	}
       	 res.status(200).send(result)
       }).catch(err=>{
       	 console.log(err)
       })
     new_topup.save().then(result=>{
    	if(!result){
    		return res.status(400).send({
    			message:"unable to register topup transaction"
    		})
    	}
    	res.status(200).send(result)
    })
    .catch(err=>{
    	res.send(err)
    })
  })

})

module.exports = route