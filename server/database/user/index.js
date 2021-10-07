import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname: {type:String , required:true},
    email: {type:String , required:true},
    password: {type:String} ,
    address: [{deatil:{type:String} , for:{type:String}}],
    phoneNumber: [{type:Number}]},
    {
        timestamps: true
    });

    UserSchema.methods.generateJwtToken = function() {
        return jwt.sign({user: this._id.toString()}, "ZomatoApp");
    };

    UserSchema.statics.findEmailAndPhone = async ({email, phoneNumber}) => {
        
        // Check whether the email exists 
        const checkUserByEmail = await UserModel.findOne({email});

        // Check wheather the phoneNumber Exists
        const checkUserByPhone = await UserModel.findOne({phoneNumber});

        if(checkUserByEmail || checkUserByPhone ) {
            throw new Error("'User Already Exist");
        }
        return false;

    };


    UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
        
        // Check whether the email exists 
        const user = await UserModel.findOne({email});

        if(!user) throw new Error ("User Doesn't Exists");

        // Compare Password
        const doesPasswordMatch = await bcrypt.compare(password , user.password);
         
        if(!doesPasswordMatch) {
            throw new Error("Invalide Password");
        };
        
        return user;

    };


    // Pre in-built in function 
    UserSchema.pre("save", function(next){
        const user = this; // this refers to the current schema 

        // checking password is not modified 
        if(!user.isModified("password")) return next();

            // Generating Bcrypt salt
        bcrypt.genSalt(8 , (error , Salt) => {
            if(error) return next(error);

            // hashing the password
            bcrypt.hash(user.password , Salt , (error , hash) => {
                if(error) return next(error);

                // Assigning hashed password 
                user.password = hash;
                return next();
            });
        });
    });
export const UserModel = mongoose.model("Users",UserSchema );


