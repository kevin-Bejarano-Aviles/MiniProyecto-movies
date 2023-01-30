import {check,body} from 'express-validator';
import { userExist } from '../helpers/getUsers';
export default [
    check('name')
    .notEmpty().withMessage('El campo no puede estar vacio')
    .isLength({min:2}).withMessage('El nombre tiene que tener mas de 1 caracter'),
    check('email')
    .notEmpty().withMessage('El campo no puede estar vacio')
    .isEmail().withMessage('El email tiene que ser valido'),
    body('email').custom(userExist),
    check('pass')
    .notEmpty().withMessage('El campo no puede estar vacio')
    .isStrongPassword().withMessage('El password tiene que tener mas de 8 caracteres, mayusculas,minusculas,numeros y caracteres especiales')
]