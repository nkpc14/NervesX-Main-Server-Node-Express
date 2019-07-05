import mongoose from 'mongoose'


const Schema = mongoose.Schema;

export const UserProfileVerification = mongoose.model('UserProfileVerification',new Schema({

    aadhar:{
        type:Number,
        min:16,
        max:16
    },
    aadharPhoto:{
        data:Buffer,
        contentType:String
    },
    panCard:{
        type:String
    },
    otherIdProof:{
        type:String
    },
    otherIdProofImage:{
        data:Buffer,
        contentType:String
    }

},{
    timestamps:true
}));
export const OTP = mongoose.model('OTP',new Schema({

    otp:{
        type:Number
    }

},{
    timestamps:true
}));