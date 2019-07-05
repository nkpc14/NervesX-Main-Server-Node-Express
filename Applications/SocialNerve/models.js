import mongoose from 'mongoose'
import {User} from '../User/models'
const Schema = mongoose.Schema;

export const LikeType = mongoose.model('LikeType',new Schema({
    name:{
        type:String,
    }
}));

export const Like = mongoose.model('Like',new Schema({
    likedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    emoji:{
        data:Buffer,
        contentType:String,
        required: true
    },
    likeType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'LikeType',
        required:true
    },
},{
    timestamps:true
}));

export const Reply = mongoose.model('Comment',new Schema({
    data:{
        type:String,
        required:true
    },
    likes:[Like]
},{
    timestamps:true
}));


export const Comment = mongoose.model('Comment',new Schema({
    data:{
        type:String,
        required:true
    },
    likes:[Like],
    reply:[Reply],

},{
    timestamps:true
}));


export const Post = mongoose.model('Post',new Schema({
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    comments:[Comment],
    likes:[Like],
    automate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PostAutomation'
    }
},{
    timestamps:true
}));

export const Friend = mongoose.model('Friend',new Schema({
    friends:[User],
    bestFriend:{
        type:Boolean,
    }
},{
    timestamps:true
}));


export const SocialNodeState = mongoose.model('SocialNodeState',new Schema({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    following:[User],
    follower: [User],
    friend:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Friend'
    },
    posts:[Post]
}));