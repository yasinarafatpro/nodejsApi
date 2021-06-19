import { getRepository } from "typeorm"
import User from "../entityes/User"
import bcrypt from 'bcrypt';
import jwiSignToken from "./helper/jwt";

const userLogin=async(req,res,next)=>{
    const user=await getRepository(User).findOneOrFail({
        email:req.body.email,
    });
    const match = await bcrypt.compare(req.body.password, user.password);

    if(!match) {
        return next(new Error('invalid password'));
    }

    else{
        const token=await jwiSignToken({
            id:user.id,
        });
        res.status(200).send({
            data:{
                jwtToken:token,
                user:{
                    id:user.id,
                    name:user.name,
                    email:user.email
                },
            },
        });
    };
};
export default userLogin;