import mongoose from 'mongoose'

const Schema = mongoose.Schema;


export const PostAutomation = mongoose.model('PostAutomation',new Schema({
    status:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true
}));