const mongoose=require('mongoose')

const MONGO_URL="";

const connectToMongo=()=>{
mongoose.connect(MONGO_URL,()=>{
    console.log("Connected to the MongoDB");
})
}

module.exports=connectToMongo