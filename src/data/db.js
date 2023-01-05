require('dotenv').config();
const { Sequelize } = require('sequelize');
const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
  },
);
module.exports = db;
