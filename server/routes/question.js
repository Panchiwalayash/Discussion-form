const express=require("express")
const Question =require('../models/Question')
const User=require('../models/User')
const router = express.Router()

router.post('/create',async(req,res)=>{
    try {
        
        const que=new Question({
            title:req.body.title,
            description:req.body.description,
            userId:req.body.userId,
            views:1
        })
        await que.save();
        res.status(200).json("Question has been created")
    } catch (error) {
        res.status(500).json(error)
    }

})

router.get('/all',async(req,res)=>{
    try {
        
        const sort={views:-1}
        const all_Que=await Question.find().sort(sort);
        const user=await User.findById(all_Que.userId)
        res.status(200).json(all_Que);
    } catch (error) {
        res.status(500).send(error)
    }

})

router.get('/viewed/:id',async(req,res)=>{
    try {
        const question=await Question.findById(req.params.id);
        if (!question) return res.status(400).json("Question doesn't exists");
        const view= question.views;
        question.views=view+1;
        await question.save();
        res.status(200).json(question)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const questions=await Question.find({userId:req.params.id})
        !questions && res.status(400).json("user doesn't exist")
        res.status(200).json(questions)
    } catch (error) {
        res.status(500).send(error)
    }

})

router.get('/filter',async(req,res)=>{
    const {q}=req.query

    const keys=["title","description"]
    
    const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(q))
        );
      };

    res.status(200).json(search(Question)) 
})


module.exports=router;