const db = require('../data/db');
const { DataTypes } = require('sequelize');
const actorModel = db.define('actors', {
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  rating: { type: DataTypes.DECIMAL(3, 1) },
  favorite_movie_id: { type: DataTypes.INTEGER },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
  },
});

module.exports = actorModel;
