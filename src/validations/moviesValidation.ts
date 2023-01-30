import {check} from 'express-validator';

export default [
    check('title')
        .notEmpty().withMessage('El titulo de la pelicula no puede estar vacio'),
    check('rating')
        .notEmpty().withMessage('El rating no puede estar vacio')
        .isDecimal({force_decimal:true}).withMessage('El rating tiene que ser un numero decimal'),
    check('awards')
        .notEmpty().withMessage('El campo de premios no pueden estar vacios')
        .isNumeric().withMessage('El campo tiene que contener numeros'),
    check('length')
        .notEmpty().withMessage('La duracion no puede estar vacia')
        .isNumeric().withMessage('La duracion tiene que estar en minutos'),
    check('release_date')
        .notEmpty().withMessage('El campo de la fecha no puede estar vacio')
        .isDate().withMessage('El campo tiene que ser una fecha valida con el formato YYYY-MM-DD'),
    check('genre_id')
        .notEmpty().withMessage('La pelicula tiene que tener un genero')
        .isNumeric().withMessage('El id del genero tiene que ser un numero')
]