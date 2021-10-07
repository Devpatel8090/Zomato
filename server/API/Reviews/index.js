import express from "express";

// Validate 
import { ValidateReview , ValidateReviewId} from "../../validation/review";
import { ReviewModel } from "../../database/allModels";


const Router = express.Router();

/*
Route               /
Des                 add new REviews
params              _id
Body                Review object
Access              public
Method              GET
*/

Router.post("/new/:_id", async (req,res) => {
  try{
    await ValidateReview(req.body);
    const { reviewData } = req.body;

    await ReviewModel.create(reviewData);

    return res.json({review: "Successfully Created Reviews"});
  }catch(error) {

    return res.status(500).json({error: error.message});

  }


});


/*
Route               /delete
Des                delete a review
params              _id
Access              public
Method              GET
*/

Router.get("/deletes/:_id", async (req,res) => {
    try{

      await ValidateReviewId(req.params);
      const { _id } = req.params;
  
      await ReviewModel.findByIdAndDelete(_id);
  
      return res.json({review: "Successfully Deleted Reviews"});
    }catch(error) {
  
      return res.status(500).json({error: error.message});
  
    }
  
  
  });
  
  export default Router;


