import {Router} from 'express';
import { allGenres, genreById } from '../controllers/genresController';
import { isAuthorized } from '../middlewares/isAuthorized';

const router = Router();

router.get('/',isAuthorized,allGenres);
router.get('/:id',isAuthorized,genreById);

export default router;