const express = require('express');
const router = express.Router();


//@route    /API/profile/test
//@desc     Test prof route
//@access   Public
router.get('/test', (req, res) => res.json({msg: 'Profile Works'}));

module.exports = router;