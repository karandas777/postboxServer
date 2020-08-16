var express = require('express');
var router = express.Router();
var user = require('../controller/userController');
var post = require('../controller/postController');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Postbox Server' });
});

router.post('/add-user',user.add);
router.get('/select-user',user.select);
router.post('/edit-user',user.edit);
router.post('/remove-user',user.remove);
router.post('/verify-user',user.verify);

router.post('/add-post',post.add);
router.get('/select-post',post.select);
router.post('/edit-post',post.edit);
router.post('/remove-post',post.remove);

module.exports=router;