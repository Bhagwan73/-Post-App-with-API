const express=require("express")
const mongoose=require("mongoose")
const app=express()
const route=require("./src/route/route")

require("dotenv").config({path:"./config.env"})
app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect(`${process.env.MONGO_DB}`,{useNewUrlParser:true})
.then(()=>console.log("MONGO-DB IS CONNECTED"))
.catch((err)=> console.log(err))

app.use("/",route)
app.listen(`${process.env.PORT}`,()=>{
    console.log(`express is running on port ${process.env.PORT}`)
})