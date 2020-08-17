var Comment = require('../model/commentSchema');

function add(req,res){
    var comment = new Comment({
        post_id:req.body.post_id,
        user_id:req.body.user_id,
        comment:req.body.comment,
    })
    comment.save()
    .then(()=>{
        res.json({
            status:"OK",
            message:"Comment Inserted"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            status:"NOK",
            message:err
        })
    })
}

function select(req,res){
    Comment.find()
    .then((data)=>{
        res.json({
            status:"OK",
            message:data,
        })
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err,
        })
    })

}

function postComment(req,res){
    Comment.find({post_id:req.body.post_id})
    .then((data)=>{
        res.json({
            status:"OK",
            message:data,
        })
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err,
        })
    })

}

function userComment(req,res){
    Comment.find({user_id:req.body.user_id})
    .then((data)=>{
        res.json({
            status:"OK",
            message:data,
        })
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err,
        })
    })

}

function edit(req,res){
    Comment.updateOne({_id:req.body._id},{
        post_id:req.body.post_id,
        user_id:req.body.user_id,
        comment:req.body.comment,
    })
    .then(()=>{
        res.json({
            status:"OK",
            message:"Comment Updated"
        })
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err,
        })
    })
}

function remove(req,res){
    Comment.deleteOne({_id:req.body._id})
    .then(()=>{
        res.json({
            status:"OK",
            message:"Comment Deleted",
        })
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err,
        })
    })
}

module.exports.add=add;
module.exports.select=select;
module.exports.postComment=postComment;
module.exports.userComment=userComment;
module.exports.edit=edit;
module.exports.remove=remove;