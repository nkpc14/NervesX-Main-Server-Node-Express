import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const QuickReplyTemplate = mongoose.model('QuickReplyTemplate',new Schema({
    data:{
        type:String,
        required:true,
        unique: true
    }
}));

export const QuickReply = mongoose.model('QuickReply',new Schema({
    data:{
        type:String,
        required: true,
        unique:true
    }
},{
    timestamps:true
}));

export const Message = mongoose.model('Message',new Schema({
    data:{
        type:String,
        required: true
    },
    image:{
        data:Buffer,
        contentType:String
    },
    video:{
        data:Buffer,
        contentType:String
    }
},{
    timestamps:true
}));


export const AutomatedMessage = mongoose.model('AutomatedMessage',new Schema({
    status:{
        type:Boolean,
        required:true
    },
    quickReply:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'QuickReply'
    }
},{
    timestamps:true
}));

