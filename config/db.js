const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		let db = await mongoose.connect(process.env.MONGO_URL);
		console.log('MongoDB Connected:  ${db.connection.host}');
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectDB;
