import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food:{type:mongoose.Types.ObjectId , ref:"Foods"},
    resturant:{type:mongoose.Types.ObjectId , ref:"Restaurant"},
    user:{type:mongoose.Types.ObjectId, ref:"Users"},
    rating:{type:Number , required:true},
    reviewText:{type:String, required:true},
    photos:[{
        type:mongoose.Types.ObjectId , ref:"Images"
    }],
    
});

export const ReviewModel = mongoose.model("Reviews",ReviewSchema);