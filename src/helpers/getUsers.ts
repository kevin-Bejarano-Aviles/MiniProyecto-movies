import { UserModel } from "../data/models";
import { UserFindBy } from "../interfaces/tipos";

const findUserBy = async(campo:UserFindBy,valor:string)=>{
    const user = await UserModel.findOne({
        where:{
            [campo]: valor
        }
    })
    return user;
}

const userExist = async(email:string)=>{
    const user = await findUserBy('email',email)
    if(user){
        throw new Error("El email ya esta en la base de datos");
    }
}
export {
    findUserBy,
    userExist
}