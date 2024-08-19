// controllers/userController.js
const { sql } = require('../config/db');

const getAllUsers = async (req, res) => {
	try {
		console.log(process.env.POSTGRES_DATABASE);
		// Fetch all users from the database
		const { rows } = await sql`SELECT * FROM users`; // Adjust the table name and query as needed

		// Send the result as a JSON response
		res.json(rows);
	} catch (error) {
		// Handle errors and send an appropriate response
		console.error('Database query failed:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

module.exports = getAllUsers;
