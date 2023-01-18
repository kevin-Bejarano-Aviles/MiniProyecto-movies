const { request, response } = require('express');
const {
  genresModel: GenresModel,
  moviesModel: MoviesModel,
} = require('../data/associations');

const allGenres = async (req = request, res = response) => {
  try {
    const genres = await GenresModel.findAll();
    res.status(200).json({
      data: genres,
      msg: 'Todos los generos',
    });
  } catch (error) {
    res.status(500).json('Server Error');
    console.log(error);
  }
};
const genreById = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const genre = await GenresModel.findByPk(id, {
      include: {
        model: MoviesModel,
      },
    });
    res.status(200).json({
      data: genre,
      msg: `Genero ${id} con peliculas asociadas`,
    });
  } catch (error) {
    res.status(500).json('Server Error');
    console.log(error);
  }
};
module.exports = {
  allGenres,
  genreById,
};
