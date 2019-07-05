import {User} from './models'
import bcrypt from 'bcryptjs';

export const loginUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
};

export const getUserName = (req, res, next) => {
    const username = req.body.username;
    User.findOne({username}, (err, page) => {
        console.log(page)
    })
};

export const registerUser = (req, res, next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const pass = req.body.password;
    const email = req.body.email;
    const mobile = req.body.mobile;
    console.log(req.body);
    return bcrypt.hash(pass, 12)
        .then(password => {
            const user = new User({
                firstname,
                lastname,
                email,
                password,
                mobile
            });
            return user.save();
        }).catch(err => {
            console.log(err)
        })

};


export const createUser = (req, res, next) => {

};