const express=require("express")
const User =require('../models/User');
const router = require("./auth");

router.get('/:id',async(req,res)=>{
    try {   
        const user=await User.findById(req.params.id);
        !user && res.status(400).json("such user doesn't exist")
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router;