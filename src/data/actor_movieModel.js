const db = require('../data/db');

const { DataTypes } = require('sequelize');
const actor_movieModel = db.define('actor_movie', {
  actorId : {
    type: DataTypes.INTEGER,
    field:'actor_id',
    references: {
      model: 'actors',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    
  },
  movieId: {
    type: DataTypes.INTEGER,
    field:'movie_id',
    references: {
      model: 'movies',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
  },
  
},{
    freezeTableName:true
});
module.exports = actor_movieModel;
