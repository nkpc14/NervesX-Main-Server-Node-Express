import express from 'express'
import {createUser, registerUser, getUserName} from './controller'

const router = express.Router();
import passport from 'passport'


router.get('/register', createUser);
router.post('/get', getUserName);
router.post('', registerUser);


export default router;