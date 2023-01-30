import { MovieModel,ActorModel,GenreModel } from '../data/models';
import { MovieFindBy } from '../interfaces/tipos';



const moviesFindAll = async()=>{
    const resp = await MovieModel.findAll();    
    return resp;
}

const movieBy = async(colum: MovieFindBy,value:string)=>{
    const resp = await MovieModel.findOne({
        where:{
            [colum]:value
        },
        include: [
            {
                model:GenreModel
            },{
                model:ActorModel
            }
        ]
    })
    return resp
}

export {
    moviesFindAll,
    movieBy
}