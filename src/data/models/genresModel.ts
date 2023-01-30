import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { MovieModel } from './moviesModel';


@Table({
  tableName:'genres'
})
export class GenreModel extends Model{
  @Column({
    type:DataType.STRING,
  })
  name!: string;

  @Column({
    type:DataType.INTEGER,
  })
  ranking!:number;

  @Column({
    type:DataType.TINYINT,
  })
  active?: boolean;

  @HasMany(()=> MovieModel)
  movies?: MovieModel[];

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
