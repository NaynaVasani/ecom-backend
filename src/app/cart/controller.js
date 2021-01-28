const mongoose = require("mongoose");
const repository = require("./repository");
const Cart = mongoose.model("Cart");

exports.getCartList = async (req, res) => { // you have to pass userId
    try {
        const carts = await Cart.find({"user_Id": req.user_Id});
        res.send(carts);
    } catch (err) {
        res.status(500).send({message: err.message || "Some error occurred while retrieving products."});
    }
};


exports.UpdateCart = async (req, res) => {
    try {
        const UpdatedCart = await repository.updateCart(req.id, req.body); //it require the products array and user id
        res.status(400).send(UpdatedCart);
    } catch (err) {
        res.send(err);
    }
};

exports.deleteCart = async (req, res) => {
    try {
        const deletedCart = await repository.deleteCart(req.id);
        res.status(400).send(deletedCart);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

exports.create = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Cart content can not be empty"
        });
    }
    Cart.create(req.body)
        .then(cart => {
            res.send({cart, message: "successfully inserted"});
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the users."
        });
    });
};
