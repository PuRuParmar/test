const express=require('express');
const bodyParser = require("body-parser")
const router=express.Router();
const User=require('../models/user');


router.get('/',async(req,res)=>{
    console.log('Get request');
    //res.send('Get Request');
    try{
        const users=await User.find();
        res.json(users);

    }catch(err){
            res.send('Error'+err);
    }

});

router.post('/',async(req,res)=>{
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    var userEmail = req.body.email;
    var age = req.body.age;


        const user= new User({
            firstname:firstName,
            lastname:lastName,
            email:userEmail,
            age:age,
        },{ _id: false });
        try{
                const a1=await user.save();
                res.json(a1);
        }catch(err){
                res.send(err);
        }
})

module.exports=router;