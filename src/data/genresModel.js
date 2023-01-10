const db = require('../data/db');
const { DataTypes } = require('sequelize');
const genresModel = db.define('genres', {
  name: { type: DataTypes.STRING },
  ranking: { type: DataTypes.INTEGER },
  active: { type: DataTypes.TINYINT },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
  },
});

module.exports = genresModel;
