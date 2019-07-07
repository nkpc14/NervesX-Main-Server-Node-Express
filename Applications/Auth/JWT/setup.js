import passport from 'passport'
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';
import jwt from 'jsonwebtoken'
import {SECRET_KEY} from '../../../config'


export const getToken = () => {
    return jwt.sign(user, SECRET_KEY,
        {expiresIn: 3600});
};


const opts = {};

opts._jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts._secretOrKeyProvider = SECRET_KEY;

export const jwtPassport = passport.use(new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log("JWT payload:", jwt_payload);
        User.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false);
            } else if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    }));

export const verifyUser = passport.authenticate('jwt', {session: false});
