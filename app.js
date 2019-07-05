import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path from 'path'
import GoogleAuth from './Applications/Auth/Google/router'
import './Applications/Auth/Google/setup'
import passport from 'passport'

//Routes Imports
import UserRoutes from './Applications/User/routes'

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(helmet());

app.use(passport.initialize());
//Routes Implementations
app.use(GoogleAuth);
app.use(UserRoutes);


mongoose.connect('mongodb://localhost:27017/NervesX', {useNewUrlParser: true})
    .then(result => {
        const server = app.listen(8000);
        const io = require('./socket').init(server);
        console.log("Server Started at http://localhost:" + 8000);
        io.on('connection', socket =>{
            console.log("Client Connected!");
        })
    }).catch(err => {
    return console.log(err)
});