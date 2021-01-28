require( "./model" );
const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );

const express = require( "express" );

const router = express.Router( );

router.put( "/editProduct", validateToken, controller.edit );

/**
*    @apiGroup User
*    @api {delete} /delete Delete an user.
*    @apiParam {String} id  User ID required.
*    @apiHeaderExample Example header
*       {
*           id:123456789
*       }
*/
router.delete( "/delete", validateToken, controller.delete );

router.get("/", controller.getList);

router.post( "/Create", controller.create );

router.put("/update", controller.update);


router.put( "/isActive/:id", controller.updateStatus); // for making live product (optional)

module.exports = router;
