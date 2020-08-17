var express = require('express');
var router = express.Router();
var user = require('../controller/userController');
var post = require('../controller/postController');
var comment = require('../controller/commentController');
var jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Postbox Server' });
});

router.post('/add-user',user.add);
router.get('/select-user',verification,user.select);
router.post('/edit-user',verification,user.edit);
router.post('/remove-user',verification,user.remove);
router.post('/verify-user',user.verify);

router.post('/add-post',verification,post.add);
router.get('/select-post',verification,post.select);
router.post('/edit-post',verification,post.edit);
router.post('/remove-post',verification,post.remove);

router.post('/add-comment',verification,comment.add);
router.get('/select-comment',verification,comment.select);
router.post('/post-comment',verification,comment.postComment);
router.post('/user-comment',verification,comment.userComment);
router.post('/edit-comment',verification,comment.edit);
router.post('/remove-comment',verification,comment.remove);


function verification(req,res,next){
    var bearerToken = req.headers['auth'];

    if(typeof(bearerToken) !== undefined){
        jwt.verify(bearerToken,"postbox",(err,data)=>{
            if(err){
                res.json({
                    status:"NOK",
                    message:err,
                })
            }
            else{
                next();
            }
        })
    }
}

module.exports=router;