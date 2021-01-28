const mongoose = require("mongoose");
const repository = require("./repository");
const Product = mongoose.model("Product");

exports.getList = async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (err) {
        res.status(500).send({message: err.message || "Some error occurred while retrieving products."});
    }
};


exports.edit = async (req, res) => {
    try {
        const UpdatedProduct = await repository.updateProduct(req.id, req.body);
        res.status(400).send(UpdatedProduct);
    } catch (err) {
        res.send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        const deletedUser = await repository.deleteProduct(req.id);
        res.status(400).send(deletedUser);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

exports.create = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }
    Product.create(req.body)
        .then(product => {
            res.send({product, message: "successfully inserted"});
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the users."
        });
    });
};



exports.update = async ( req, res ) => {
    try {
        const data = req.body;
        if(!data && !data._id){
            return  res.send({message: "Plz send valid details"});
        }
        await Product.updateOne({_id: data._id}, data);
        res.send({ok: true, message: "Updated"});
    } catch ( err ) {
        res.send( err );
    }
};

exports.updateStatus = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }
    Product.updateOne({_id: req.params.id}, {$set: {isActive: req.body.isActive}})
        .then(user => {
            if (!user) {
                res.status(404).send({
                    message: "Product not found with id " + req.params.id
                });
            } else {
                res.send({message: "Users Updated successfully!"});
            }
        })
        .catch(err => {
            console.log(err)
        });
};
