import {Request,Response} from 'express';
import { ActorModel,MovieModel } from '../data/models';
import { logger } from '../utils/logger';
import { handleHttp } from '../helpers/handleError';

const allActors = async(req:Request,res:Response)=>{
    try {
        const actors = await ActorModel.findAll();
        res.status(200).json({
            data: actors,
            msg: 'Todos los actores',
        });
    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
    }
}
const actorById = async(req:Request,res:Response)=>{
    const { id } = req.params;
    try {
        const actor = await ActorModel.findByPk(id,{
            include:{
                model:MovieModel
            }
        });
        res.status(200).json({
            data: actor,
            msg: `Detalle del actor ${id} con sus peliculas`,
        });
    } catch (error) {
        handleHttp(res,'SERVER_ERROR')
        logger.error(error)
    }

}
export {
    allActors,
    actorById
}

