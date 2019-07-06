import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path from 'path'
import GoogleAuth from './Applications/Auth/Google/router'
import './Applications/Auth/Google/setup'
import passport from 'passport'
import {cleanBody} from './ServerSecurity/security'
import {errorHandlerGlobal, pageNotFound} from './ServerSecurity/errorHandling'

//Graphql Imports
import {buildSchema} from 'graphql'
import graphqlHTTP from 'express-graphql'

import typeDefs from './Applications/MainGraphqlSchema/TypeDefIndex'
import rootValue from './Applications/MainGraphqlSchema/ResolverIndex'

//Routes Imports
// import graphqlUserRoutes from './Applications/User/routes'
// import SocialRoutes from './Applications/SocialNerve/routes'
const schema = buildSchema(typeDefs);
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(helmet());


app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}));

app.use(passport.initialize());
//Routes Implementations
app.use(cleanBody);
app.use('', GoogleAuth);
// app.use('/user', UserRoutes);
// app.use('/post', SocialRoutes);


app.use(pageNotFound);
app.use(errorHandlerGlobal);


mongoose.connect('mongodb://localhost:27017/NervesX', {useNewUrlParser: true})
    .then(result => {
        const server = app.listen(8000);
        const io = require('./socket').init(server);
        console.log("Server Started at http://localhost:" + 8000);
        io.on('connection', socket => {
            console.log("Client Connected!");
        })
    }).catch(err => {
    return console.log(err)
});
