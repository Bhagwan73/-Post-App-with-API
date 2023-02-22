const express=require("express")
const router=express.Router()
const {createPost,comment}=require("../controller/postCotroller")

router.post("/createPost",createPost)
router.put("/comment",comment)

module.exports=router