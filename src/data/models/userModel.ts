import {Table,Column,Model,DataType} from 'sequelize-typescript'

@Table({
    tableName:'users'
})
export class UserModel extends Model{
    @Column({
        type:DataType.STRING
    })
    name!:string;

    @Column({
        type:DataType.STRING
    })
    email!:string;

    @Column({
        type:DataType.STRING
    })
    password!:string

    @Column({
        type:DataType.STRING
    })
    remember_token?:string

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
