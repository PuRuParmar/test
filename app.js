const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require("body-parser")



const url='mongodb://localhost:27017/UserDB'

const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(url,{useNewUrlParser:true});

const con=mongoose.connection;



const usersRouter=require('./routes/users');

app.use('/users',usersRouter);

con.on('open',function(){
    console.log('connected...');
});

app.listen(3000,()=>{
    console.log('Server Started');
});