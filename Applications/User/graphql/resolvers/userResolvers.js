import validator from 'validator'
import {User} from "../../models";

export default {

    getUserName({username},req){
        const errors = [];
        if(validator.isEmpty(username)){
            errors.push({message:"Username is required!"});
        }
        if(!validator.isLength(username,{min:8})){
            errors.push({message:"Username length should be more than 6 character!"})
        }
        if(errors.length >0){
            const error = new Error("Invaid input");
            errors.data = errors;
            errors.code = 422;
            throw error;
        }
        return User.findOne({username})
            .then(user=>{
                if(!user){
                    errors.push({message:"Username Already Taken!"});
                }
                console.log(username);
                return username
            })
    }
};
