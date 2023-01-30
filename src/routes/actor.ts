import {Router} from 'express';
import { actorById, allActors } from '../controllers/actorController';
import { isAuthorized } from '../middlewares/isAuthorized';
const router = Router();

router.get('/',isAuthorized,allActors);
router.get('/:id',isAuthorized,actorById);

export default router;