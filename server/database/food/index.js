import mongoose from "mongoose";

const FoodSchema = new mangoose.Schema({
    name:{type:String , required:true},
    description:{type:String , required:true},
    isVeg:{type:Boolean , required : true},
    isContainesEgg:{type:Boolean , required : true},
    category: {type:String , required:true},
    photos:{
        type:mongoose.Types.ObjectId,
        ref:"Images"
    },
    price:{type:Number , defalut:150, required:true},
    addOns:{
        type:mongoose.Types.ObjectId,
        ref:"Foods"
    },
    restaurant:{
        type:mongoose.Types.ObjectId,
        ref:"Resturants",
        required:true,
    }

});

export const FoodModel = mongoose.model("Food",FoodSchema);