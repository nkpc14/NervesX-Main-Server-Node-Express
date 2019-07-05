import {SocialNodeState, Post, Friend, Comment, Reply, Like, LikeType} from './models'
import io from '../../socket'

export const createPost = (req, res, next) => {
    Post.findById(req.body.postId)
        .then(post =>{
            if(!post){
                const post = new Post({
                    author:req.user,
                    description:req.description,
                });
                post.save().then(()=>{
                    io.getIo().emit('posts',{
                        action: '',post:post
                    })
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
};
