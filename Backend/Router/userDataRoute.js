const express = require('express');
const router = express.Router();
const {
    loginUsers,
    signinUsers,
    getdata
} = require('../Controller/userController');

//login router
router.post('/login', loginUsers)


//signup router
router.post('/signup', signinUsers);

router.get('/getdata', getdata);


module.exports = router;