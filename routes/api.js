var express = require('express');
var router = express.Router();
var user = require('../controller/userController');

router.post('/add-user',user.add);
router.get('/select-user',user.select);
router.post('/edit-user',user.edit);
router.post('/remove-user',user.remove);

module.exports=router;