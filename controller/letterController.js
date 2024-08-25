const { Letter } = require("../model/User"); // Adjust path as needed

const subscribeNewsletter = async (req, res) => {
	const { email } = req.body;

	// Validate incoming data
	if (!email) {
		return res.status(400).json({ message: "email is required" });
	}

	try {
		// Check if the email is already subscribed
		const existingSubscription = await Letter.findOne({ email });
		if (existingSubscription) {
			return res.status(400).json({ message: "Email is already subscribed" });
		}

		// Create new subscription
		const newSubscription = new Letter({ email });

		// Save subscription to database
		const savedSubscription = await newSubscription.save();

		if (savedSubscription) {
			return res.status(201).json({
				message: "Successfully subscribed to the newsletter",
				subscription: savedSubscription,
			});
		} else {
			return res.status(400).json({
				message: "Failed to subscribe. Please try again later.",
			});
		}
	} catch (error) {
		console.error("Error subscribing to newsletter:", error);
		return res.status(500).json({ message: "Server Error" });
	}
};

module.exports = {
	subscribeNewsletter,
};
