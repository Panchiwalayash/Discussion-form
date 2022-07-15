const express=require("express")
const User =require('../models/User')
const router = express.Router()
const bycrpt=require("bcrypt")

router.post('/register',async(req,res)=>{
    
    try {
        const salt= await bycrpt.genSalt(10)
        const hashedPassword= await bycrpt.hash(req.body.password,salt)
        const email=await User.find({email:req.body.email})
        if(email){
             res.status(404).json("User for these email already exist")
        }
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })

        const user=await newUser.save()
        res.status(200).json(user)
    } catch (error) {     
       res.status(500).json(error,"Some error occured")
    }
})

router.post('/login',async(req,res)=>{
    try { 
        const user=await User.findOne({email:req.body.email})
        !user && res.status(404).json("user not found")

        const validPassword=await bycrpt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json("Invalid authentication")

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error,"Some error occured")
    }
})

module.exports=router;