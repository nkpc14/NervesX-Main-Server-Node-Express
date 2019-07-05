import express from 'express'
import  {createUser,registerUser} from './controller'
const router = express.Router();
import passport from 'passport'



router.get('',createUser);
router.post('',registerUser);


export default router;