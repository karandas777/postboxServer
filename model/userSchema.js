var mongoose = require('mongoose');
var schema = mongoose.Schema({

    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    dob:{
        type:String,
        require:true,
    },
    imgurl:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    following:{
        type:Array,
        require:true,
    },
    followers:{
        type:Array,
        require:true,
    },
},
{timestamps:true}
)

module.exports=mongoose.model('users',schema);