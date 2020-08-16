var mongoose = require('mongoose');
var schema = mongoose.Schema({
    
    username:{
        type:String,
        require:true,
    },
    user_id:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    imgurl:{
        type:String,
        require:true,
    },
    likedby:{
        type:Array,
        require:true,
    }
},
{timestamps:true}
);

module.exports = mongoose.model('posts',schema);

