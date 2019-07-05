import {SocialNodeState, Post, Friend, Comment, Reply, Like, LikeType} from './models'
import io from '../../socket'

export const createPost = (req, res, next) => {
    Post.findById(req.body.postId)
        .then(post => {
            if (!post) {
                const post = new Post({
                    author: req.user,
                    description: req.description,
                });
                post.save()
                    .then(() => {
                        res.status(200).json(post);
                    })
                    .catch(err => {
                        const error = new Error("Operation Failed!");
                        error.httpStatusCode = 404;
                        next(error);
                    })
            }
        })
        .catch(err => {
            const error = new Error("Post Done'Exist");
            error.httpStatusCode = 404;
            next(error);
        })
};

export const getPost = (req, res, next) => {
    Post.findById(req.params.postId)
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            const error = new Error("Post Done'Exist");
            error.httpStatusCode = 404;
            next(error);
        });
};

export const updatePost = (req, res, next) => {
    Post.findByIdAndUpdate(req.params.postId, {$set: req.body}, {new: true})
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            console.log(err);
        })
};
export const deletePost = (req, res, next) => {
    Post.findByIdAndRemove(req.params.postId)
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            console.log(err);
        });
};