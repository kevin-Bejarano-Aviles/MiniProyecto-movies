const {check,body} = require('express-validator')
const {findActorInMovie,findMovieInActor} = require('../helpers/actorInMovie')
module.exports = [
       check('idMovie')
       .notEmpty().withMessage('Tiene que elegir una pelicula'),
       check('idActor')
       .notEmpty().withMessage('Tiene que elegir un actor'),
       // body(['idActor','idMovie']).custom(findActorInMovie)
   /*     body('idMovie').custom((value,{req})=>{
              findActorInMovie(value,req.body.idActor)
       }),
       body('idActor').custom((value,{req})=>{
              findMovieInActor(value,req.body.idMovie)
       }) */
]