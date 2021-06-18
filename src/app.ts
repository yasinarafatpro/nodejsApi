const express=require('express');
const app=express();
app.use(express.json());
import UserSignController from "./controller/UserSignController";
import loginValidate from "./validator/loginValidator";
import signUpValidator from "./validator/signup";

app.get('/',(req,res)=>{
    res.send('hello world');
    res.end();
});

app.post('/api/v1/user',signUpValidator,UserSignController); 

app.post('/api/v1/user/login',loginValidate);

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
export default app;