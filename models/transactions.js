const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  date:{
  	  type:Date,
  	  required:true
  },

  sender_id:{
  	type:mongoose.Schema.Types.ObjectId,
  	required:true,
  	ref:'User'
  },

  sender_name:{
    type:String,
    required:true
  },

  recipient:{
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