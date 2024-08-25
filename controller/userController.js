const { User, Letter } = require("../model/User"); // Adjust path as needed
const { isValidEmail } = require("../config/validators"); // Assuming you have a utility for email validation

const createNewUser = async (req, res) => {
	const { name, message, email } = req.body;

	// Validate incoming data
	if (!email) {
		return res.status(400).json({ message: "Valid email is required" });
	}

	try {
		console.log("Received user data:", { name, email });

		// Create new user object with optional fields
		const newUser = new User({
			name: name || "Anonymous", // Default value if name is not provided
			message: message || "", // Default value if message is not provided
			email,
		});

		// Save user to database
		const savedUser = await newUser.save();

		if (savedUser) {
			return res.status(201).json({
				message: "Your details were sent successfully",
				user: savedUser,
			});
		} else {
			return res.status(400).json({
				message: "Failed to send your details. Please try again later.",
			});
		}
	} catch (error) {
		console.error("Error creating user:", error);
		return res.status(500).json({ message: "Server Error" });
	}
};

module.exports = {
	createNewUser,
};
