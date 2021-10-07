// Libraries

import express from "express";

//Database 

import { MenuModel , ImageModel} from "../../database/allModels";

// Validate

import { ValidateImageId, ValidateMenuId } from "../../validation/menu";

const Router = express.Router();

/*
Route               /list
Des                 Get all the list of menu based on particular id
params              _id
Access              public
Method              GET
*/

Router.get("/list/:_id", async(req, res) => {
    try {
        await ValidateMenuId(req.params);
        const {_id} = req.params;
        const  menus = await MenuModel.findOne(_id);
        
        return res.json({menus});
    }catch(error){
        
        return res.status(500).json({error: error.message});

    }
});

/*
Route               /image
Des                 Get menu image based on id
params              _id
Access              public
Method              GET
*/

Router.get("/image/:_id" , async(req,res) => {
    try {
        await ValidateImageId(req.params);
        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});
    }catch(error) {

        return res.status(500).json({error: error.message});

    }
})



export default Router;