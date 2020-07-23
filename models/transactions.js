const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.objectId,
  date:{
  	  type:Date,
  	  required:true
  },

  sender_id:{
  	type:mongoose.Schema.Types.objectId,
  	required:true,
  	ref:'User'
  },

  recipient:{
  	type:String,
  	required:true
  }

  recipient_account :{
  	type:String,
  	required:true
  },

  amount:{
  	type:Number,
  	required:true
  },

  description:{
  	type:String,
  	required:true
  },
  status:{
  	type:String,
  	required:true
  }


})

module.exports = mongoose.model('Tansaction',transactionSchema)