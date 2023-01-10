const {
    actorModel: ActorsModel,
    genresModel: GenresModel,
    moviesModel: MoviesModel,
    actor_movieModel
  } = require('../data/associations');


  
const detailGenreWithMovies = async(req,res)=>{
    const {id} = req.params
    const genre = await GenresModel.findByPk(id,{ include : MoviesModel})
    // res.send(genre)
    res.render('genreDetails',{
        title:`Genero ${genre.name}`,
        genre
    })
}
module.exports = {
    detailGenreWithMovies
}