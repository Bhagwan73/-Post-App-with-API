const mongoose=require("mongoose")
let postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        default:[]
    },
    userName:{
        tupe:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model("Post",postSchema)

