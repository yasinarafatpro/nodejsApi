const Joi=require('joi');

const schema=Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password:Joi.string().min(3).required(),

});
const signUpValidator=async(req,res,next)=>{
    try{
        await schema.validateAsync(req.body);
       return next();
    }catch(err){
        console.log('error found in data format..request canceled');
        return next(err);
    }
};
export default signUpValidator;