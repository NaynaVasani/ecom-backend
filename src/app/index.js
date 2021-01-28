const usersRouter = require( "./users/router" );
const sessionRouter = require( "./session/router" );
const validateToken = require( "../middlewares/validateToken" );
const CartRouter = require("../app/cart/router");
const ProductRouter = require("../app/product/router");

module.exports = ( app ) => {
    app.use( "/session", sessionRouter );
    app.use( "/users", usersRouter );
    app.use("/validatetoken",validateToken);
    app.use("/cart",CartRouter);
    app.use("/product",ProductRouter);

};
