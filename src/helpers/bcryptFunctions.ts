import bcrypt from 'bcrypt';

export const encryptData = (data:string)=>{
    return bcrypt.hashSync(data,10)
}

export const verifyEncryption = (dataBody:string,dataEncrypt:string)=> {
    return bcrypt.compareSync(dataBody,dataEncrypt)
}