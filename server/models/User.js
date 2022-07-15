const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        min:5
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:5
    }
},
{timestamps:true}

);

module.exports=mongoose.model('User',UserSchema)