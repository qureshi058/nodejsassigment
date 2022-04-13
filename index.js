const express = require("express")
const  express_app=express()
const {postsData,albumData}=require('./data')

express_app.get("/posts",(req,res)=>{
    console.log("this is posts")
            res.send(postsData)
})
express_app.get("/album",(req,res)=>{
    console.log("this is album route")
            res.send(albumData)
})
express_app.get("/",(req,res)=>{
    console.log("this is home")
            res.send("this is home") 
})

express_app.listen(8000,()=>{
    console.log("port listining 8000")
       
})