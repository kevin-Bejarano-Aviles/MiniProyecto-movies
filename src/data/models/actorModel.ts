import {Table,Column,Model,DataType, BelongsToMany} from 'sequelize-typescript';
import { Actor_movieModel } from './actor_movieModel';
import { MovieModel } from './moviesModel';

@Table({
    tableName:'actors'
})
export class ActorModel extends Model{
    @BelongsToMany(()=>MovieModel,()=>Actor_movieModel)
    movies!:MovieModel[];

    @Column({
        type:DataType.STRING
    })
    first_name!:string

    @Column({
        type:DataType.STRING
    })
    last_name!:string

    @Column({
        type:DataType.DECIMAL(3,1)
    })
    rating!:number

    @Column({
        type:DataType.INTEGER
    })
    favorite_movie_id!:number

    

    @Column({
        type:DataType.DATE,
        field:'created_at'
    })
    createdAt?: any;
    @Column({
        type:DataType.DATE,
        field:'updated_at'
    })
    updatedAt?: any;
}

