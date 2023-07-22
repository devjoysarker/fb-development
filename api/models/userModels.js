

import mongoose  from "mongoose";

// Creating student schma
const usersSchma = mongoose.Schema({

    first_name : {
        type : String,
        require : true,
        trim : true
    },
    sur_name : {
        type : String,
        require : true,
        trim : true
    },
    secondary_name : {
        type : String,
        trim : true,
        default : ''
    },
    username : {
        type : String,
        trim : true,
        default : ''
    },
    email : {
        type : String,
        trim : true
    },
    mobile : {
        type : String,
        unique : true,
        trim : true
    },
    birth_date : {
        type : String,
        require : true
    },
    birth_month : {
        type : String,
        require : true
    },
    birth_year : {
        type : String,
        require : true
    },
    gender : {
        type : String,
        enum : ["Male","Female","Custom"]
    },
    password : {
        type : String,
        require : true,
        trim : true
    },
    profile_photo : {
        type : String,
        default : null
    },
    cover_photo : {
        type : String,
        default : ""
    },
    bio : {
        type : String,
        default : null
    },
    work : {
        type : Array,
        default : []
    },
    edu : {
        type : Array,
        default : []
    },
    living : {
        type : String,
        
    },
    home_town : {
        type : String,
        
    },
    relationship : {
        type : String,
        enum : ["Single","Married","In a Relationship"]
        
    },
    joined : {
        type : Date
        
    },
    social : {
        type : Array,
        default : []        
    },
    fridens : {
        type : Array,
        default : []        
    },
    following : {
        type : Array,
        default : []        
    },
    follower : {
        type : Array,
        default : true
    },
    request : {
        type : Array,
        default : true
    },
    block : {
        type : Array,
        default : true
    },
    posts : {
        type : Array,
        default : true
    },
    trash : {
        type : Boolean,
        default : false
    },
    access_token: {
        type : String
    },
    isActivate : {
        type : Boolean,
        default : false
    },
    isAdmin : {
        type : Boolean,
        default : false
    }

},{
    timestamps: true
})




// Exports modal
export default mongoose.model('Users',usersSchma)