const {
    actorModel: ActorsModel,
    genresModel: GenresModel,
    moviesModel: MoviesModel,
    actor_movieModel
  } = require('../data/associations');

const actorDetails = async(req,res)=>{
    const {id} = req.params
    const actor = await ActorsModel.findByPk(id,{include:{model:MoviesModel}});
    // res.send(actor)
    res.render('actorDetail',{
        title:`Actor: ${actor.first_name} ${actor.last_name}`,
        actor
    })
}
module.exports = {
    actorDetails
}