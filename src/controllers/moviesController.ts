import {Request,Response} from 'express';
import { MovieModel,GenreModel,ActorModel, Actor_movieModel } from '../data/models';
import { movieBy } from '../helpers/getMovies';
import { handleHttp } from '../helpers/handleError';
import { BodyMovies } from '../interfaces/bodyMovies';
import { logger } from '../utils/logger';


const allMovies = async(req:Request,res:Response)=>{
    try {
        const movies = await MovieModel.findAll();
        res.status(200).json({
            data: movies,
            msg: 'Listado de peliculas',
        });
    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
    }

}
const movieById = async(req:Request,res:Response)=>{
    const { id } = req.params
    try {
        const movie = await movieBy('id',id)
        res.status(200).json({
            data: movie,
            msg: `Detalle de la pelicula ${id}`,
        });
    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
        
    }

}
const createMovie = async(req:Request,res:Response)=>{
    const {title,rating,awards,release_date,length,genre_id} = req.body as BodyMovies; 
    try {
        const movieCreated = await MovieModel.create({
            title,
            rating,
            awards,
            release_date,
            length,
            genre_id,
        });
        res.status(200).json({
            data: movieCreated,
            msg: 'Pelicula creada correctamente',
        });
    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
        
    }

}
const editMovie = async(req:Request,res:Response)=>{
    const {title, rating, awards, release_date, length, genre_id} = req.body as BodyMovies;
    const { id } = req.params;
    try {
        const movieEdited = await MovieModel.update({
            title,
            rating,
            awards,
            release_date,
            length,
            genre_id
        },{
            where:{
                id,
            }
        });
        res.status(200).json({
            data: movieEdited,
            msg: `Pelicula ${id} editada correctamente`,
        });
    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
        
    }

}
const deleteMovie = async(req:Request,res:Response)=>{
    const { id } = req.params;
    try {
        const movieDeleted = await MovieModel.destroy({
            where:{
                id,
            }
        });
        res.status(200).json({
            data: movieDeleted,
            msg: `Pelicula ${id} eliminada correctamente`,
        });
    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
        
    }

}
const addActorToMovie = async(req:Request,res:Response)=>{
    const {idMovie, idActor} = req.body;
    try {
        const movie = await movieBy('id',idMovie);
        if(!movie){
            return res.status(404).json({
                data:'',
                msg:'La pelicula no fue encontrada'
            })
        }
        await Actor_movieModel.create({
            actorId:idActor,
            movieId:idMovie
        })
        res.status(200).json({
            data: movie,
            msg: `El actor ${idActor} a sido añadido a la pelicula ${idMovie}`,
        });
        // await actor_movieModel.bulkCreate([idActor,idMovie],{returning:true})

    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
        
    }

}

export {
    addActorToMovie,
    allMovies,
    createMovie,
    deleteMovie,
    editMovie,
    movieById,
}