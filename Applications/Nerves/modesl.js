import mongoose from 'mongoose'
import {User} from "../User/models";

const Schema = mongoose.Schema;


export const PermissionModel = mongoose.model('PermissionModel',new Schema({
    permissions:{
        name:String,
        required:true
    }
},{
    timestamps:true
}));


export const NervesPermission = mongoose.model('NervesPermission',new Schema({
    name:{
        type:String,
        required: true
    },
    permissionsList:[PermissionModel]
},{
    timestamps:true
}));


export const UserCreatedNerve = mongoose.model('UserCreatedNerve',new Schema({
    name:{
        type:String,
        required:true
    },
    members:[User]

},{
    timestamps:true
}));


