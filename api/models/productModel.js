
import mongoose from "mongoose";

// Creating student schma
const productSchma = mongoose.Schema({

    name : {
        type : String,
        require : true,
    },
    regular_price : {
        type : Number,
        require : true,
    },
    sale_price : {
        type : Number,
    },
    stock : {
        type : Number,
    },
    photo : {
        type : String,
        default : 'p.png'
       
    },
    gallery : {
        type : Array,
        default : []
    },
    catagory : {
        type : Array,
        default : []
    },
    tags : {
        type : Array,
        default : []
    }

},{
    timestamps: true
})




// Exports modal
export default mongoose.model('productModel',productSchma)