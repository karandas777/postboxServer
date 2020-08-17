var mongoose = require('mongoose');
var schema = mongoose.Schema({
    
    post_id:{
        type:String,
        require:true,
    },
    user_id:{
        type:String,
        require:true,
    },
    comment:{
        type:String,
        require:true,
    },
},
{timestamps:true}
);

module.exports = mongoose.model('comments',schema);
