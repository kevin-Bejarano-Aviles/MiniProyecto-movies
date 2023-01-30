import {Router} from 'express';
import { userLogin,userRegister } from '../controllers/userController';
import { fieldValidation } from '../middlewares/fieldValidations';
import userValidation from '../validations/userValidation';
const router = Router();

router.post('/register',userValidation,fieldValidation,userRegister);
router.post('/login',userLogin);

export default router;