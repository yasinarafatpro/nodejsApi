const express=require('express');
const { message } = require('./schema/signup');
const app=express();
app.use(express.json());
const appsingnupschema=require('./schema/signup');

app.post('/api/v1/user',async(req,res,next)=>{
    try{
        await appsingnupschema.validateAsync(req.body);
    }catch(err){
        console.log('error found in input data format request canceled');
        console.log(err);
        return next(err);
    }
    return next();
},(req,res,next)=>{
    console.log('request accepted');
    console.log(req.body);
    res.end();
});
app.use((err,req,res,next)=>{
    res.status(400).send({
        error:{
            status:400,
            name:err.name,
            message:err.message

        },
    });
    res.end();
});
module.exports=app;