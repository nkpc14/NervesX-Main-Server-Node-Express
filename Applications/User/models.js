import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const User = mongoose.model('User',new Schema({
    firstname:{
        type: String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    username:{
      type:String,
      unique: true,
    },
    password:{
        type:String,
    },
    profilePhoto:{
        data:Buffer,
        contentType:String,
    },
    mobile:{
        type:Number,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    status:{
        type:Boolean,
        default: true,
    },
    googleId:{
        type:String,
    }

},{
    timestamps:true
}));

export const UserProfile = mongoose.model('UserProfile',new Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    address:{
        type:String,
    },
    bio:{
        type:String,
    },
    coverPhoto:{
        data:Buffer,
        contentType: String,
    },
    linkedIn:{
        type:String
    },
    facebook:{
        type:String
    },
    gmail:{
        type:String
    },
    pincode:{
        type:String
    },
    verification:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserProfileVerification'
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    profileType:{
        type:String
    }

},{
    timestamps: true
}));
