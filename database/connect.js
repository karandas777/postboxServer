var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://karan:connectme@cluster0.6ckax.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true , useUnifiedTopology: true }
)
.then(()=>{
    console.log('Mongo Connected');
})
.catch((err)=>{
    console.log('Mongo Failed'+err);
})