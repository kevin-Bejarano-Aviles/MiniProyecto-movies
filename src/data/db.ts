import { Sequelize } from 'sequelize-typescript';
// import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { ActorModel, Actor_movieModel, GenreModel, MovieModel, UserModel } from './models';

dotenv.config()

const nameDataBase = process.env.DB_DATABASE || ''
const userDataBase = process.env.DB_USER || ''
const passDataBase = process.env.DB_PASS || ''
const hostDataBase = process.env.DB_HOST || ''
const portDataBase = +process.env.DB_PORT! || 3306


/* export const sequelize = new Sequelize(nameDataBase,userDataBase,passDataBase,{
    host:hostDataBase,
    port:portDataBase,
    dialect:'mysql'
})
 */
export const sequelize = new Sequelize({
    dialect:'mysql',
    host:hostDataBase,
    username:userDataBase,
    password:passDataBase,
    database:nameDataBase,
    port:portDataBase,
    models:[MovieModel,GenreModel,ActorModel,Actor_movieModel,UserModel]

})

