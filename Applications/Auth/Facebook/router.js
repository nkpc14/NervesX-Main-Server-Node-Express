import express from 'express'
import passport from 'passport'
const router = express.Router();

router.get('/facebook',passport.authenticate('google',{
    scope:['email','profile']
}));

router.get('/done',passport.authenticate('google',
    { failureRedirect: '/facebook',sucessRedirect:'/done' }),(req,res)=>{
    res.json({
        message:"Authentication Successful!"
    });
});


export default router;