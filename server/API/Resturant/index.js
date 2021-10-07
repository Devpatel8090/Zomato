// libraries
import express from "express";
import { RestaurantModel } from "../../database/allModels";

// Validate 

import { ValidateRestaurantCity, ValidateRestaurantSerchString } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";



const Router = express.Router();

/*
Route               /
Des                 Get all the Restaurant details
params              None 
Access              public
Method              GET
*/

Router.get("/", async (req,res) => {
  try{
    await ValidateRestaurantCity(req.query);
    const {city} = req.query;
    const restaurants = await RestaurantModel.find({city});
    return res.json({restaurants});

  }catch(error) {

    return res.status(500).json({error: error.message});

  }


});

/*
Route               /
Des                 Get particular the Restaurant details on id
params              _id
Access              public
Method              GET
*/

Router.get("/:_id", async (req,res) => {
    try {
      await ValidateRestaurantId(req.params);
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if(!restaurant)
          return res.status(404).json({error: "Restaurant not found"});

          return res.json({restaurant});
    }catch(error) {
        return res.status(500).json({error: "error.message"});

    }
});

/*
Route               /search
Des                 Get resturant detail that serch by user
params              none
body                serchString
Access              public
Method              GET
*/

Router.get("/search", async (req , res) => {
  try{

    await ValidateRestaurantSerchString(req.body);
    const{serchString} = req.body;

    const restaurant = await RestaurantModel.find({
      name:{$regex:serchString, $options:"i"},
    })
    return res.json({restaurant});
  }catch(error){

    return res.status(500).json({error: error.message});
      
  }
});



export default Router;