const moment = require('moment');
const MoviesModel = require('../data/moviesModel');
const { validationResult } = require('express-validator');
const allMovies = async (req, res) => {
  try {
    const movies = await MoviesModel.findAll();
    res.render('movies', {
      title: 'Movies',
      movies: movies,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
    console.error(error);
  }
};

const movieDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await MoviesModel.findByPk(id);
    const date = moment(movie.release_date).utc().format('DD/MM/YYYY');
    res.render('movieDetail', {
      title: `Movie ${movie.id}`,
      movie: movie,
      date,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
    console.error(error);
  }
};

const viewCreateMovie = (req, res) => {
  try {
    res.render('movieCreate', {
      title: 'Crear pelicula',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
    console.error(error);
  }
};

const createMovie = async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    res.render('movieCreate',{
      errors:errors.errors,
      title:'Crear pelicula'
    });
  }else{
    try {
      const { title, rating, awards, release_date, length } = req.body;
      await MoviesModel.create({
        title,
        rating,
        awards,
        release_date,
        length,
      });
      res.redirect('/');
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.error(error);
    }
  }
  
};

const viewEditMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await MoviesModel.findByPk(id);
  const date = moment(movie.release_date).utc().format('YYYY-MM-DD');
  res.render('movieEdit', {
    title: `Editar pelicula ${movie.id}`,
    movie,
    date,
  });
};

const editMovie = async (req, res) => {
  const { id } = req.params;
  const { title, rating, awards, release_date, length } = req.body;
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    try {
      const movie = await MoviesModel.findByPk(id);
      const date = moment(movie.release_date).utc().format('YYYY-MM-DD');
      res.render('movieEdit',{
        errors:errors.errors,
        title:`Editar pelicula ${movie.id}`,
        movie,
        date
      });  
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.error(error);
    }
    
  }else{
    try {
      await MoviesModel.update(
        {
          title,
          rating,
          awards,
          release_date,
          length,
        },
        {
          where: {
            id,
          },
        },
      );
      res.redirect(`/movies/detail/${id}`);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.error(error);
    }
  }
  
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await MoviesModel.destroy({
    where: {
      id,
    },
  });
  res.redirect('/movies');
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
