import {Router} from 'express';
import {
    addActorToMovie,
    allMovies,
    createMovie,
    deleteMovie,
    editMovie,
    movieById
} from '../controllers/moviesController';
import { fieldValidation } from '../middlewares/fieldValidations';
import moviesActorValidation from '../validations/moviesActorValidation'
import moviesValidation from '../validations/moviesValidation'

const router = Router();

router.get('/', allMovies);
router.get('/detail/:id', movieById);
router.post('/create', moviesValidation, fieldValidation, createMovie);
router.put('/edit/:id', moviesValidation, fieldValidation, editMovie);
router.delete('/delete/:id', deleteMovie);
router.post('/addActor',moviesActorValidation,fieldValidation, addActorToMovie);

export default router
