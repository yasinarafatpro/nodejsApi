const Joi=require('joi');

const schema=Joi.object({
    email:Joi.string().required(),
    password:Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),
});
const loginValidate=async(req,res,next)=>{
    try{
        await schema.validateAsync(req.body);
        return next();
    }catch(err){
        console.log('invalid password!');
        return next(err);
    }
};
export default loginValidate;