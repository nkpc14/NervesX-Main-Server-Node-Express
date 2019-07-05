import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const State = mongoose.model('State',new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        data:Buffer,
        contentType:String
    },
}));

export const TagType = mongoose.model('State',new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
}));



export const Tag = mongoose.model('Tag',new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    followerCount:{
        type:Number,
    },
    tagType:[TagType]
}));


export const Designation = mongoose.model('Designation',new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
}));
