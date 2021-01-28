const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const productSchema = new Schema( {
    title: { type: String, required: true },
    description:{type:String,required:true},
    price: { type: String, required: true },
    information: { type: Object, required: true }, //bottom section after add to cart create object of it and save it here
    image : { type: String }
}, {
    timestamps: true,
} );



module.exports = mongoose.model( "Product", productSchema );
