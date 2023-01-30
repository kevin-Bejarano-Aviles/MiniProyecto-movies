import {Router} from 'express';
import { actorById, allActors } from '../controllers/actorController';
const router = Router();

router.get('/',allActors);
router.get('/:id',actorById);

export default router;