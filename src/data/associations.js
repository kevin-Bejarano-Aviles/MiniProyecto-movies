const moviesModel = require('../data/moviesModel');
const genresModel = require('../data/genresModel');
const actorModel = require('../data/actorModel');
const actor_movieModel = require('../data/actor_movieModel');
genresModel.hasMany(moviesModel, { foreignKey: 'genre_id' });
moviesModel.belongsTo(genresModel, { foreignKey: 'genre_id' });
moviesModel.belongsToMany(actorModel, { through: actor_movieModel });
actorModel.belongsToMany(moviesModel, { through: actor_movieModel });

module.exports = {
    moviesModel,
    genresModel,
    actorModel,
    actor_movieModel
}
