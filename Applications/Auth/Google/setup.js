import passport from 'passport';
import {OAuth2Strategy as GoogleStrategy} from 'passport-google-oauth'
import {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,PASSWORD_SALT} from './../../../config'
import {User} from "../../User/models";
import bcrypt from 'bcryptjs'

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL:'/done'

},(accessToken,refreshToken,profile,done)=>{

    User.findOne({
        googleId:profile.id,
        email:profile.emails[0].value,
    }).then((currentUser)=>{

        if(!currentUser){
            //if User dont exist
            let passwordDefault = PASSWORD_SALT + profile.name + profile.id + Math.floor((Math.random() * 100)) + 1;
            passwordDefault = passwordDefault.toString();
            bcrypt.hash(passwordDefault,12).then(hashedPassword =>{
                const userData = {
                    googleId:profile.id,
                    firstname:profile.name.familyName,
                    lastname:profile.name.givenName,
                    email:profile.emails[0].value,
                    username:profile.emails[0].value.split("@")[0],
                    password:hashedPassword,
                    profilePhoto:profile.photos[0].value,
                };
                const user = User(userData);
                user.save().then((newUser)=>{
                    done(null,newUser)
                }).catch(err =>{
                    console.log(err)
                });
            }).catch(err =>{
                console.log(err)
            });
        }else{
            //user already exists
            done(null,currentUser)
        }
    })
}));