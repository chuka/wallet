const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	firstname: {
		type:String,
		required:true
	},
	lastname:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},

	password:{
		required:true,
		type:String
	}
})


module.exports = mongoose.model('User',userSchema)