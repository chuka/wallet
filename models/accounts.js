const mongoose = require('mongoose')

const accountSchema   = mongoose.Schema({
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
     	default:0
     },

     number:{
     	type:String,
     	required:true,
     	unique:true
     },
     user_id:{
     	type:mongoose.Schema.Types.ObjectId,
     	ref:'User',
     	required:true
     }

})

module.exports = mongoose.model('Account',accountSchema)