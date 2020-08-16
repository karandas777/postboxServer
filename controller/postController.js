var Post = require('../model/postSchema');

function add(req,res){
    var post = new Post({
        username:req.body.username,
        user_id:req.body.user_id,
        title:req.body.title,
        imgurl:req.body.imgurl,
        likedby:req.body.likedby,
    })
    post.save()
    .then(()=>{
        res.json({
            status:"OK",
            message:"Post Inserted"
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
    Post.find()
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
    Post.updateOne({_id:req.body._id},{
        username:req.body.username,
        user_id:req.body.user_id,
        title:req.body.title,
        imgurl:req.body.imgurl,
        likedby:req.body.likedby,
    })
    .then(()=>{
        res.json({
            status:"OK",
            message:"Post Updated"
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
    Post.deleteOne({_id:req.body._id})
    .then(()=>{
        res.json({
            status:"OK",
            message:"Post Deleted",
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
module.exports.edit=edit;
module.exports.remove=remove;