require( "./model" );
const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );

const express = require( "express" );

const router = express.Router( );

router.put( "/updateCart", validateToken, controller.UpdateCart );

router.delete( "/delete", validateToken, controller.deleteCart );

router.get("/", controller.getCartList);

router.post( "/Create", controller.create );

module.exports = router;
