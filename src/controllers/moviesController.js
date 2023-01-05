const { response } = require('express');
const MoviesModel = require('../data/moviesModel');

const allMovies = async (req, res) => {
  const movies = await MoviesModel.findAll();
  res.json(movies);
};

const movieDetail = async (req, res) => {
  const { id } = req.params;
  const movie = await MoviesModel.findByPk(id);
  res.json(movie);
};

const viewCreateMovie = (req, res) => {};

const createMovie = async (req, res) => {
  const { title, rating, awards, release_date, length } = req.body;
  const movie = await MoviesModel.create(
    title,
    rating,
    awards,
    release_date,
    length,
  );
  res.json(movie);
};

const viewEditMovie = async(req, res) => {
    const { id } = req.params;
  const movie = await MoviesModel.findByPk(id);
  res.json(movie);
};

const editMovie = (req, res) => {
    
};

const deleteMovie = async(req, res) => {
    const {id} = req.params
    const movie = await MoviesModel.destroy(id);
    res.json('elemento eliminado')
};

module.exports = {
  allMovies,
  movieDetail,
  viewCreateMovie,
  createMovie,
  viewEditMovie,
  editMovie,
  deleteMovie,
};
