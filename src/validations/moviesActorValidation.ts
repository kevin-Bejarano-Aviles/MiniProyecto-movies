import {check} from 'express-validator'

export default [
    check('idMovie')
       .notEmpty().withMessage('Tiene que elegir una pelicula'),
    check('idActor')
       .notEmpty().withMessage('Tiene que elegir un actor'),
]