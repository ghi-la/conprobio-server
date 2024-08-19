const express = require('express');
const getAllUsers = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('conprobio-server/user');
});

router.get('/getAllUsers', getAllUsers);

module.exports = router;
