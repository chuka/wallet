const express = require('express')
const route = express.Router()
const Account = require('../models/accounts.js')

route.get('/',(req,res)=>{
	res.send('accounts route')
})

//CREATE AN  ACCOUNT

route.post('/open-account',async(req,res)=>{

	if(req.body){
		const balance = req.body.balance
       const user_id = req.body.user_id
        const new_account = Account({user_id:user_id,balance:balance})     
      try{   
         const created_account = await Account.save() 
         res.send(created_account)  
	}catch(err){res.send(err)}
}
   return res.send('One or more fields are empty!')
	
})

module.exports = route
