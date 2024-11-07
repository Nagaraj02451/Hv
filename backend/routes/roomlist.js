const express = require('express');
const {newrooms , getroomlist , deleteRoom } = require('../controllers/Roomcontroller');
const router = express.Router();

router.route('/rooms').get( getroomlist);
            
//Admin routes
router.route('/admin/rooms/new').post(newrooms);
router.route('/admin/rooms/:id').delete( deleteRoom);



module.exports = router;