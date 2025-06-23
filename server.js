const app = require ('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

// config .env
dotenv.config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
