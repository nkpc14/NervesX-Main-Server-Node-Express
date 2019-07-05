import express from 'express'
import Controller from './controller'
const route = express.Router();


route.get('',Controller.createPost);