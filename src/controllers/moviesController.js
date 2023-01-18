const { request, response } = require('express');
const {
  actorModel: ActorsModel,
  genresModel: GenresModel,
  moviesModel: MoviesModel,
} = require('../data/associations');

const allMovies = async (req = request, res = response) => {
  try {
    const movies = await MoviesModel.findAll();
    res.status(200).json({
      data: movies,
      msg: 'Listado de peliculas',
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};

const movieById = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const movie = await MoviesModel.findByPk(id, {
      include: [
        {
          model: GenresModel,
        },
        {
          model: ActorsModel,
        },
      ],
    });
    res.status(200).json({
      data: movie,
      msg: `Detalle de la pelicula ${id}`,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};

const viewCreateMovie = async (req = request, res = response) => {
  try {
    res.status(200).json({ msg: 'Vista para crear la pelicula' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};

const createMovie = async (req = request, res = response) => {
  const { title, rating, awards, release_date, length, genre_id } = req.body;
  try {
    const movieCreated = await MoviesModel.create({
      title,
      rating,
      awards,
      release_date,
      length,
      genre_id,
    });
    res.status(200).json({
      data: movieCreated,
      msg: 'Pelicula creada correctamente',
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};

const viewEditMovie = async (req = request, res = response) => {
  try {
    res.status(200).json({ msg: 'Vista para la edicion de una pelicula' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};

const editMovie = async (req = request, res = response) => {
  const { title, rating, awards, release_date, length, genre_id } = req.body;
  const { id } = req.params;
  try {
    const movieEdited = await MoviesModel.update(
      {
        title,
        rating,
        awards,
        release_date,
        length,
        genre_id,
      },
      {
        where: {
          id,
        },
      },
    );
    res.status(200).json({
      data: movieEdited,
      msg: `Pelicula ${id} editada correctamente`,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};

const deleteMovie = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const movieDeleted = await MoviesModel.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      data: movieDeleted,
      msg: `Pelicula ${id} eliminada correctamente`,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};
const addActorToMovie = async (req = request, res = response) => {
  const { idMovie, idActor } = req.body;
  try {
    const movie = await MoviesModel.findByPk(idMovie);
    await movie.addActor(idActor);
    res.status(200).json({
      data: movie,
      msg: `El actor ${idActor} a sido añadido a la pelicula ${idMovie}`,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};
module.exports = {
  addActorToMovie,
  allMovies,
  createMovie,
  deleteMovie,
  editMovie,
  movieById,
  viewCreateMovie,
  viewEditMovie,
};
