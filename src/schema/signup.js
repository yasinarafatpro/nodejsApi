const Joi=require('joi');

const schema=Joi.object({
    username:Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    name:Joi.string().required(),
    email:Joi.string().required(),
    password:Joi.string().required(),

});
module.exports=schema;