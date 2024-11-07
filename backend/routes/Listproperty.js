const express = require('express');
const { listpropertycontroll } = require('../controllers/listpropertycontroll');


const router = express.Router();

router.route('/listproperty').post(listpropertycontroll);


module.exports = router;
