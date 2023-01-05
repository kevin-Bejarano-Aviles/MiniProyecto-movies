const db = require('../data/db');

const { DataTypes } = require('sequelize');
const moviesModel = db.define(
  'movies',
  {
    /*   created_at: { type: DataTypes.DATE },
  updated_at: { type: DataTypes.DATE }, */
    title: { type: DataTypes.STRING },
    rating: { type: DataTypes.DECIMAL(3, 1) },
    awards: { type: DataTypes.INTEGER },
    release_date: { type: DataTypes.DATE },
    length: { type: DataTypes.INTEGER },
    genre_id: { type: DataTypes.INTEGER },
    /*   createdAt:{type:DataTypes.DATE},
  updatedAt:{type:DataTypes.DATE}, */
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  } /* ,{
    timestamps:false //? solucion si no estuvieran "createdAt" y "updatedAt" en la definicion de la tabla
} */,
);

module.exports = moviesModel;
