import dotenv from 'dotenv';
import express from 'express';
import {Request,Response} from 'express'
import { sequelize } from './data/db';
import cors from 'cors';
import morgan from 'morgan';
import methodOverride from 'method-override'
import movieRouter from './routes/movies';
import genreRouter from './routes/genres';
import actorRouter from './routes/actor';
// import userRouter from './routes/user'
import { logger } from './utils/logger';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 8000

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use(morgan('dev'));
app.use(express.json())

app.use('/movies',movieRouter);
app.use('/genres',genreRouter);
app.use('/actors',actorRouter);
// app.use('/users',userRouter);

app.use((req:Request,res:Response)=>{
    logger.warn(`Page:${req.originalUrl} not found`);
    res.status(404).json({ msg: '404 Not Found' });
})
const dbConnectionServerUp = async()=>{
    try {
        await sequelize.authenticate()
        app.listen(PORT,()=>{
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        })        
    } catch (error) {
        console.error(`The error is: ${error}`);
        throw new Error('Error when starting the database');
    }
}

dbConnectionServerUp()
