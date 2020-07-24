const express = require('express')

const  route = express.Router()

route.get('/',(req,res)=>{
	res.send('welcome to the users route')
})




module.exports = route



