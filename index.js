


const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const cors =  require('cors')
const userRoute = require('./routes/users.js')
const transactionRoute = require('./routes/transactions.js')
const accountRoute = require('./routes/accounts.js')

app.use(express.json())
app.use(cors())
app.use('/transactions',transactionRoute)
app.use('/accounts',accountRoute)
app.use('/users',userRoute)

const uri = process.env.DB_CONNECTION

mongoose.connect(uri,{useNewUrlParser:true},()=>{
	console.log('database connected')
})






app.listen(4000)