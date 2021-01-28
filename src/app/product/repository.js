const mongoose = require( "mongoose" );

const product = mongoose.model( "Product" );

const saveProduct = ( data ) => {
    const user = new product( data );
    return user.save();
};

const updateProduct = (id, body) => product.updateOne({_id: id}, body);


const deleteProduct = ( id ) => product.deleteOne({_id: id});

const findProduct = ( id ) => product.findOne( { id } );

module.exports = {
    saveProduct,
    updateProduct,
    deleteProduct,
    findProduct,
};
