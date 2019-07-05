import mongoose from 'mongoose'
import {User} from "../User/models";

const Schema = mongoose.Schema;


export const Organization = mongoose.model('Organization',new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    admin:{
        types:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    address:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required:true,
    },
    members:[User],
},{
    timestamps:true
}));



