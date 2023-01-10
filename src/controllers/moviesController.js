const moment = require('moment');
const {
  actorModel: ActorsModel,
  genresModel: GenresModel,
  moviesModel: MoviesModel,
  actor_movieModel
} = require('../data/associations');
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
    const movie = await MoviesModel.findByPk(id,{
      include:[
        {
          model:GenresModel
        },
        {
          model:ActorsModel
        }
      ]
    });
    // res.send({movie})
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

const viewCreateMovie = async(req, res) => {
  try {
    const generos = await GenresModel.findAll();
    res.render('movieCreate', {
      title: 'Crear pelicula',
      generos,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
    console.error(error);
  }
};

const createMovie = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const generos = await GenresModel.findAll();
    res.render('movieCreate', {
      errors: errors.errors,
      title: 'Crear pelicula',
      generos
    });
  } else {
    try {
      // res.send(req.body)
      const { title, rating, awards, release_date, length,genre_id } = req.body;
      await MoviesModel.create({
        title,
        rating,
        awards,
        release_date,
        length,
        genre_id
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
  const movie = await MoviesModel.findByPk(id,{include:{model:GenresModel}});
  const generos = await GenresModel.findAll();
  const date = moment(movie.release_date).utc().format('YYYY-MM-DD');
  // res.send({movie})
  res.render('movieEdit', {
    title: `Editar pelicula ${movie.id}`,
    movie,
    date,
    generos
  });
};

const editMovie = async (req, res) => {
  const { id } = req.params;
  // res.send(req.body)
  const { title, rating, awards, release_date, length,genre_id } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    try {
      const generos = await GenresModel.findAll();
      const movie = await MoviesModel.findByPk(id);
      const date = moment(movie.release_date).utc().format('YYYY-MM-DD');
      res.render('movieEdit', {
        errors: errors.errors,
        title: `Editar pelicula ${movie.id}`,
        movie,
        date,
        generos,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.error(error);
    }
  } else {
    try {
      await MoviesModel.update(
        {
          title,
          rating,
          awards,
          release_date,
          length,
          genre_id
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
