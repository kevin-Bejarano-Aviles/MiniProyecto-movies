import { Request,Response } from 'express';
import { encryptData, verifyEncryption } from '../helpers/bcryptFunctions';
import { findUserBy } from '../helpers/getUsers';
import { generateJwt } from '../helpers/generateToken';
import { UserModel } from '../data/models';

const userRegister = async(req:Request,res:Response)=>{
    const {name,email,pass} = req.body;
    try {
        const password = encryptData(pass)
        const userCreated = await UserModel.create({
            name,
            email,
            password
        });
        res.status(200).json({
            data: userCreated,
            msg: 'Usuario creado correctamente'
        })
    } catch (error) {
        res.status(500).json({msg:'Server error'})
        console.log(error);
    }

}
const userLogin = async(req:Request,res:Response)=>{
    const {email='',pass} = req.body;
    try {
        const user = await findUserBy('email',email);
        
        if(!user){
            return res.status(400).json({
                msg:'Credenciales invalidas',
                data:''
            });
        }
        if(!verifyEncryption(pass,user.password)){
            return res.status(400).json({
                msg:'Credenciales invalidas',
                data:''
            })
        }
        const token = await generateJwt(user.id)
        res.status(200).json({
            msg:'',
            data:{
                user:{
                    id:user.id,
                    name:user.name,
                    email:user.email,
                },
                token
            }
        });        
    } catch (error) {
        res.status(500).json({msg:'Server error'})
        console.log(error);
    }

}

export { 
    userLogin,
    userRegister,
}