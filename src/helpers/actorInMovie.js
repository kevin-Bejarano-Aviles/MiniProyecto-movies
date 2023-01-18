const {actor_movieModel,actorModel,moviesModel}= require('../data/associations')
/* const findActorInMovie = async(idActor,idMovie)=>{
    const resp = await actor_movieModel.findOne({
        where:{
            actorId:idActor,
            movieId:idMovie
        }
    });
    
    if(resp){
        console.log(resp);
        throw new Error('Este actor ya se encuentra en la pelicula')
        
    }
    console.log(idActor,idMovie);
    
} */
const findActorInMovie = async(idActor,idMovie)=>{
    const actor = await actorModel.findOne({
        where:{
            id:idActor
        },  
        include:{
            model:moviesModel,
            where:{
                id:idMovie
            }
        }
    })
    if(actor){
        throw new Error('Este actor ya se encuentra en la pelicula')
    }
}
const findMovieInActor = async(idMovie,idActor)=>{
    const movie = await moviesModel.findOne({
        where:{
            id:idMovie
        },
        include:{
            model:actorModel,
            where:{
                id:idActor
            }
        }
    })
    if(movie){
        throw new Error('Esta pelicula ya tiene a este actor')
    }
}
module.exports={
    findActorInMovie,
    findMovieInActor
}