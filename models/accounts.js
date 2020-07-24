const mongoose = require('mongoose')

const accountSchema   = mongoose.Schema({

         balance:{
     	type:Number,
     	required:true,
     	default:0
     },

     user_id:{
     	type:mongoose.Schema.Types.ObjectId,
     	ref:'User',
     	required:true
     },

     name:{
          type:String,
          required:true
     }

})

module.exports = mongoose.model('Account',accountSchema)