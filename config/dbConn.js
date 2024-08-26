const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const uri = process.env.DATABASE_URL; // Read from environment variable
		if (!uri) {
			throw new Error("DATABASE_URL is not defined");
		}
		await mongoose.connect(uri); // Newer versions of Mongoose don't need options
		console.log("MongoDB connected");
	} catch (err) {
		console.log(err);
	}
};

module.exports = connectDB;
