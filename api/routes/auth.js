import express from "express";
const router =  express.Router();

router.get("/",(req,res)=>{
    res.send("this is auth endping")
})

router.get("/register",(req,res)=>{
    res.send("hello,this auth registser amount")
})


export default router