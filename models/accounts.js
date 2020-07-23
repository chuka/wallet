const mongoose = require('mongoose')

const accountSchema   = mongoose.Schema({
	  _id:mongoose.Schema.Types.objectId,
      name:{
      	type:String,
      	required:true
      },
     type:{
     	type:String,
     	required:true
     },
     balance:{
     	type:Number,
     	required:true,
     	default:0.0
     },

     number:{
     	type:String,
     	required:true,
     	unique:true
     },
     user_id:{
     	type:mongoose.Schema.Types.objectId,
     	ref:'User',
     	required:true
     }

})

module.exports = mongoose.model('Account',accountSchema)