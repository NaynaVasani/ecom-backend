const mongoose = require( "mongoose" );

const cart = mongoose.model( "Cart" );

const saveCart = ( data ) => {
    const cart = new cart( data );
    return cart.save();
};

const deleteCart = ( id ) => cart.deleteOne({_id: id});


const findCart = ( id ) => cart.findOne( { id } );

const updateCart = (id, body) => cart.updateOne({user_id: id}, body);  //it require the products array and user id

module.exports = {
    saveCart,
    updateCart,
    deleteCart,
    findCart,
};
