// libraries

import express from "express";
import passport from "passport";

// validate
import { ValidateOrderId } from "../../validation/order";

import { OrderModel } from "../../database/allModels";

const Router = express.Router();



/*
Route               /
Des                 Get all orders based on _id
params              _id
Access              public
Method              GET
*/

Router.get("/:_id", passport.authenticate("jwt",{session: false}) ,async (req,res) => {
    try{
        await ValidateOrderId(req.params);
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({user: _id});

        if(!getOrders) {
            return res.status(404).json({error: "User NOt Found"});
        }

    }catch(error){
        return res.status(500).json({error: error.message});
    }
});


/*
Route               /new
Des                 Get new order
params              _id
Access              public
Method              Post
*/

Router.post("/new/:_id", async (req,res) => {
    try {
        await ValidateOrderId(req.params);
        const { _id } = req.params;
        const { orderDetails } =  req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id
            },
            {
                $push: {orderDetails: orderDetails}
            },
            {
                new: true
            }
        );

        return res.json({order: addNewOrder})

    }catch {
        return res.status(500).json({error: error.message});
    }
});


export default Router;
