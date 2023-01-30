import {Router} from 'express';
import { allGenres, genreById } from '../controllers/genresController';

const router = Router();

router.get('/',allGenres);
router.get('/:id',genreById);

export default router;