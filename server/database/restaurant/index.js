import mongoose from "mongoose";

const ResturantSchema = new mongoose.Schema({
    name:{type:String , required:true},
    city:{type:String , required:true},
    address:{type:String, required:true},
    mapLocation:{type:String, required:true},
    cuisine:{type:String, required:true},
    contactNumber:{type:Number , required:true},
    website:String,
    popularDishes:[String],
    averageCost:Number,
    amenities:[String],
    menuImage:{type:mongoose.Types.ObjectId , ref:"Images"},
    menu:{type:mongoose.Types.ObjectId , ref:"Menus"},
    reviews:{type:mongoose.Types.ObjectId, ref:"Reviews"},
    photos:{type:mongoose.Types.ObjectId, ref:"Images"}},
    {
        timestamps:true
    });
    
    


export const RestaurantModel = mongoose.model("Resturants",ResturantSchema);