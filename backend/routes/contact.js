const express = require('express');
const { newsletter } = require('../controllers/contactcontroll');


const router = express.Router();

router.route('/contact').post(newsletter);


module.exports = router;
