const postModel = require("../model/postModel")


exports.createPost= async (req,res)=>{
    try{
    let body=Object.keys(req.body)
    let itsMandatory=["title","body","userName"]
    itsMandatory.forEach((x)=>{
        if(!body.includes(x)) return res.status(400).send({status:false,msg:`${x} is a mandatory `})
    })
    let savedata=await postModel.create(req.body)
    return res.statu(201).send({status:true,msg:"post created sucessfully",data:savedata})
}catch(err){
    return res.status(500).send({status:false ,msg:err.message})
}
}


exports.comment=async (req,res)=>{
    try{
    let {postId}=req.params
    let {comment}=req.body
    let createComment=await postModel.findByIdAndUpdate({_id:postId},{$push:{comments:comment}},{new:true})
    return res.statu(200).send({status:true,msg:"comment posted sucessfully",data:createComment})
    }catch(err){
    return res.status(500).send({status:false ,msg:err.message})
    }
}


