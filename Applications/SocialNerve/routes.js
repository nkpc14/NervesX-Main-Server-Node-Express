import express from 'express'
import {createPost,getPost,updatePost,deletePost} from './controller'

const route = express.Router();


route.post('', createPost);
route.get(':postId', getPost);
route.post(':postId', updatePost);
route.post(':postId', deletePost);

export default route;