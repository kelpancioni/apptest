const express = require('express');
const router = express.Router();


//@route    /API/posts/test
//@desc     Test posts route
//@access   Public
router.get('/test', (req, res) => res.json({msg: 'Posts Works'}));

module.exports = router;