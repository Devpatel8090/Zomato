import express from "express";

// Validate
import {ValidateUserId, ValidateUserData } from "../../validation/user";
import { UserModel } from "../../database/allModels";


const Router = express.Router();

/*
Route               /
Des                 get user data
params              _id
Body               none
Access              public
Method              GET
*/

Router.get("/:_id", async (req,res) => {
  try{
    await ValidateUserId(req.params);
    const { _id } = req.params;
    const getUser = await UserModel.findById(_id);
    return res.json({user: getUser});

  }catch(error) {

    return res.status(500).json({error: error.message});

  }


});


/*
Route               /update
Des                 update an user data
params              _userid
Body               none
Access              public
Method              put
*/
Router.get("/update/:_userId", async (req,res) => {
    try{
      await ValidateUserId(req.params);
      await ValidateUserData(req.body);
      const { userId } = req.params;
      const {userData} = req.body;
      const updateUserData = await UserModel.findByIdAndUpdate(
          userId,
          {
              $set: userData
          },
          {
              new:true
          }
      );
      return res.json({ user: updateUserData}) ;
  
    }catch(error) {
  
      return res.status(500).json({error: error.message});
  
    }
  
  
  });

  
  export default Router;


