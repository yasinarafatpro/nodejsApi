const express=require('express');
const app=express();
app.use(express.json());
const appsingnupschema=require('./schema/signup');

app.post('/api/v1/user',async(req,res,next)=>{
    try{
        await appsingnupschema.validateAsync(req.body);
    }catch(err){
        console.log('error found in input data format request canceled');
        console.log(err);
        return err;
    }
    return next();
},(req,res,next)=>{
    console.log('request accepted');
    console.log(req.body);
    res.end();
});
module.exports=app;