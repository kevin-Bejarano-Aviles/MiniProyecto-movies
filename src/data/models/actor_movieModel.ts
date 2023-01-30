import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ActorModel } from './actorModel'
import { MovieModel } from './moviesModel'

@Table({
  tableName:'actor_movie',
  freezeTableName:true
})
export class Actor_movieModel extends Model{
  @ForeignKey(()=>ActorModel)
  @Column({
    type:DataType.INTEGER,
    field:'actor_id'
  })
  actorId!:number

  @ForeignKey(()=>MovieModel)
  @Column({
    type:DataType.INTEGER,
    field:'movie_id'
  })
  movieId!:number

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
