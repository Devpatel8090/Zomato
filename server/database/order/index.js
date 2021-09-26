import  Mongoose from "mongoose";


const OrderSchema = new Mongoose.Schema({
    user:{
        type:Mongoose.Types.Object ,
        ref:"Users"
    },
    orderDetais:[{
        food:{type:Mongoose.Types.ObjectId , ref:"Foods"},
        quantity:{type:Number , required:true},
        paymode:{type:String , required:true},
        status:{type:String , default:"Placed"},
        paymentDetails:{
            itemTotal:{type:Number , required:true},
            promo:{type:Number , required:true},
            tax:{type:Number , required:true}
        }
    }],
    orderRatings:{
        type:Number, required:true
    }
});

export const OrderModel = mongoose.model("Orders", OrderSchema);