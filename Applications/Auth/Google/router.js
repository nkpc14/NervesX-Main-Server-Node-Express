import express from 'express'
import passport from 'passport'
const router = express.Router();

router.get('/google',passport.authenticate('google',{
    scope:['email','profile']
}));

router.get('/done',passport.authenticate('google',
    { failureRedirect: '/google',sucessRedirect:'/done' }),(req,res)=>{
    res.json({
        message:"Authentication Successful!"
    });
});


export default router;