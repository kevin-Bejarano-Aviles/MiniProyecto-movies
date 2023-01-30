import jwt from 'jsonwebtoken';

export const generateJwt = (id:number)=>{
    const payload = { id }
    return new Promise((resolve,reject)=>{
        jwt.sign(payload,process.env.JWT_SECRET||'',{
            expiresIn: '1h'
        },
        (err,token)=>{
            if(err){
                reject('No se pudo generar el token');
            }
            resolve(token)
        })
    })
}