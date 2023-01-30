import {Table,Column,Model,DataType, ForeignKey, BelongsTo, BelongsToMany} from 'sequelize-typescript'
import { ActorModel } from './actorModel'
import { Actor_movieModel } from './actor_movieModel'
import { GenreModel } from './genresModel'

@Table({
  tableName:'movies'
})
export class MovieModel extends Model{
  @Column({
    type:DataType.STRING
  })
  title!:string

  @Column({
    type:DataType.DECIMAL(3,1)
  })
  rating!:number

  @Column({
    type:DataType.INTEGER
  })
  awards!:number

  @Column({
    type:DataType.DATE
  })
  release_date!:string

  @Column({
    type:DataType.INTEGER
  })
  length!:number

  @ForeignKey(()=> GenreModel)
  @Column({
    type:DataType.INTEGER
  })
  genre_id?:number

  @BelongsTo(()=> GenreModel)
  genero?:GenreModel

  @BelongsToMany(()=>ActorModel, ()=> Actor_movieModel)
  actores!:ActorModel[]

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

