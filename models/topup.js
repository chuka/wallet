const mongoose = require('mongoose')

const topupSchema = mongoose.Schema({
	user_id:{
		type:mongoose.Schema.Types.ObjectId,
		required:true
	},
	amount:{
		type:Number,
		required:true
	},

	reference:{
		type:String,
		required:true
	}

})

module.exports = mongoose.model('Topup',topupSchema)