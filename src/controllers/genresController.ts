import {Request,Response} from 'express';
import { GenreModel,MovieModel } from '../data/models';
import { logger } from '../utils/logger';
import { handleHttp } from '../helpers/handleError';


const allGenres = async(req:Request,res:Response)=>{
    try {
        const genres = await GenreModel.findAll();
        res.status(200).json({
            data: genres,
            msg: 'Todos los generos',
        });
    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
    }

}
const genreById = async(req:Request,res:Response)=>{
    const { id } = req.params
    try {
        const genre = await GenreModel.findByPk(id,{
            include:{
                model:MovieModel,
            }
        });
        res.status(200).json({
            data: genre,
            msg: `Genero ${id} con peliculas asociadas`,
        });
    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
        
    }

}
export {
    allGenres,
    genreById
}

