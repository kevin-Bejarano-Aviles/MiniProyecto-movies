const { request, response } = require('express');
const {
  actorModel: ActorsModel,
  moviesModel: MoviesModel,
} = require('../data/associations');

const allActors = async (req = request, res = response) => {
  try {
    const actors = await ActorsModel.findAll();
    res.status(200).json({
      data: actors,
      msg: 'Todos los actores',
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};
const actorById = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const actor = await ActorsModel.findByPk(id, {
      include: {
        model: MoviesModel,
      },
    });
    res.status(200).json({
      data: actor,
      msg: `Detalle del actor ${id} con sus peliculas`,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error);
  }
};

module.exports = {
  actorById,
  allActors,
};
