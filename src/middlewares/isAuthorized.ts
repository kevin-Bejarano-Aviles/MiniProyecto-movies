import {Response,Request, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { findUserBy } from '../helpers/getUsers';
import { DecodedUser } from '../interfaces/decoded';
import { User } from '../interfaces/user';
declare module 'express-serve-static-core' { //? extender el objeto request
    interface Request {
      user?: User
    }
/*     interface Response {
      myField?: string
    } */
  }

import { logger } from '../utils/logger';
export const isAuthorized = async(req:Request,res:Response,next:NextFunction)=>{
    const token = req.header('x-token')
    if(!token){
        return res.status(401).json({
            msg:'No token in reques',
            data:''
        })
    }
    try {
        const newToken =  token.split(' ')
        const {id}= jwt.verify(newToken[1],process.env.JWT_SECRET||'') as DecodedUser;
        const user = await findUserBy('id',id)
        if(!user){
            logger.error('Error, access with non-existent user');
            return res.status(401).json({
                msg:'Invalid token user not found'
            });
        }
        const userAuthorized:User = {
            id:user.id,
            name:user.name,
            email:user.email,
            password:user.password,
            remember_token:user.remember_token,
            createdAt:user.createdAt,
            updatedAt:user.updatedAt
        }
        req.user = userAuthorized     
        next()
    } catch (error) {
        res.status(401).json({
            msg:'Invalid token',
            data:'',
        })
        logger.error(error)
    }
}