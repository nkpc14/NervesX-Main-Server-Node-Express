import mongoose from 'mongoose'
import {User} from "../User/models";

export const TeamMemberDetails = mongoose.model('TeamMemberDetails',new Schema({
    members:{
        type:String,
        required:true,
        unique:true
    },
    designation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Designation'
    }
},{
    timestamps:true
}));


export const Team = mongoose.model('Team',new Schema({
    name:{
        type:String,
        required: true
    },
    members:[TeamMemberDetails],
    teamRequests:[User]
},{
    timestamps:true
}));

export const ProjectNerve = mongoose.model('ProjectNerve',new Schema({
    name:{
        type:String,
        required: true
    },
    team:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Team'
    },
    bids:[User],
},{
    timestamps:true
}));

