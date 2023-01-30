import {Router} from 'express';
import {
    addActorToMovie,
    allMovies,
    createMovie,
    deleteMovie,
    editMovie,
    movieById,
    moviesSearch
} from '../controllers/moviesController';
import { fieldValidation } from '../middlewares/fieldValidations';
import moviesActorValidation from '../validations/moviesActorValidation'
import moviesValidation from '../validations/moviesValidation'
import { isAuthorized } from '../middlewares/isAuthorized';

const router = Router();

router.get('/', allMovies);
router.get('/detail/:id',isAuthorized, movieById);
router.post('/create',isAuthorized, moviesValidation, fieldValidation, createMovie);
router.put('/edit/:id',isAuthorized, moviesValidation, fieldValidation, editMovie);
router.delete('/delete/:id',isAuthorized, deleteMovie);
router.post('/addActor',isAuthorized,moviesActorValidation,fieldValidation, addActorToMovie);
router.get('/filter',isAuthorized,moviesSearch)

export default router
