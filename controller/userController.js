var jwt = require('jsonwebtoken');

var User = require('../model/userSchema');

function add(req,res){
    var user = new User({
        name:req.body.name,
        email:req.body.email,
        dob:req.body.dob,
        password:req.body.password,
        following:req.body.following,
        followers:req.body.followers,
    })
    user.save()
    .then(()=>{
        res.json({
            status:"OK",
            message:"User Inserted"
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
    User.find()
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
    User.updateOne({_id:req.body._id},{
        name:req.body.name,
        email:req.body.email,
        dob:req.body.dob,
        password:req.body.password,
        following:req.body.following,
        followers:req.body.followers,
    })
    .then(()=>{
        res.json({
            status:"OK",
            message:"User Updated"
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
    User.deleteOne({_id:req.body._id})
    .then(()=>{
        res.json({
            status:"OK",
            message:"User Deleted",
        })
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err,
        })
    })
}

function verify(req,res){
    User.findOne({email:req.body.email,password:req.body.password})
    .then((data)=>{
        if(data === null || data === undefined || data === ""){
            res.json({
                status:"NOK",
                message:"User not found!"
            })
        }
        else{
            var token = jwt.sign({data:data},"postbox",{expiresIn:30000});
            res.json({
                status:"OK",
                message:"User verified!",
                _id:data._id,
                name:data.name,
                token:token,
            })
        }
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        })
    })
}

module.exports.add=add;
module.exports.select=select;
module.exports.edit=edit;
module.exports.remove=remove;
module.exports.verify=verify; 