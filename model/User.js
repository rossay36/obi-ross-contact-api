const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: String,

			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},
		message: {
			type: String,

			trim: true,
		},
	},
	{ timestamps: true }
);

const newsletterSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true, // Ensure no duplicate subscriptions
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
const Letter = mongoose.model("Letter", newsletterSchema);

module.exports = { User, Letter };
