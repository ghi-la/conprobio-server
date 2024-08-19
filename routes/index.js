const express = require('express');
const userRouter = require('./user');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.send('conprobio-server');
});

router.get('/health', (req, res) => {
	res.send('ok');
});

router.use('/user', userRouter);

module.exports = router;
