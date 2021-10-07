import mongoose from "mongoose";

const MenuSchema = mongoose.Schema({
   menus: [{
       name:{type:String, required:true},
       items:[
           {
           type:mongoose.Types.ObjectId,
           ref:"Foods"
       }]
    } ],

    recommended:[
        {type:mongoose.Types.ObjectId,
            ref:"Foods",
            required: true
    
    }

    ]

},
{
    timestamps:true
});

export const MenuModel = mongoose.model("Menus",MenuSchema);