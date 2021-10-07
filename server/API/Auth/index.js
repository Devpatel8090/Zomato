import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";


import { UserModel } from "../../database/allModels";

// Validation 
import { ValidateSignup, ValidationSignin } from "../../validation/auth";


const Router = express.Router();   // To prevent from reloading and getting the required component

/* 
Route          /signup
Descrip         signup with email and password
params          None 
Access          Public
Method          Post  
*/ 

Router.post("/signup", async(req,res) => {
    try{
        // const {email,fullname , password, phoneNumber} = req.body.credentials;

        //Check weather email or phone number is exist

        // const checkUserByEmail = await UserModel.findOne({email});
        // const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        // if(checkUserByEmail || checkUserByPhone) {
        //     return res.json({error:"User already Exist"})
        // }

        await ValidateSignup(req.body.credentials);

        await UserModel.findEmailAndPhone(req.body.credentials);

        // hashing  = password is encrypt to the another code which is note undenstable 
        // salting = doing hashing again an again (To secure the password)

        //dev is => encrypted - 45t1ywh895%%bjhg%%y8719880 -> yhajkgggggggggggguy782178319 ->

        // const bcryptSalt = await bcrypt.genSalt(8);

        // const hashedPassword = await bcrypt.hash(password,bcryptSalt);

        
        //Database

        const newUser = await UserModel.create(req.body.credentials);

        //JWT Auth Token  => for adding extra security layer
       const token = newUser.generateJwtToken();
        // const token = jwt.sign({user: {fullname, email }}, "ZomatoApp");


        return res.status(200).json({token})


    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
Route          /signin 
Descrip         signin with email and password
params          None 
Access          Public
Method          Post  
*/ 

Router.post("/signin", async(req,res) => {
    try{
        await ValidationSignin(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(
            req.body.credentials
        );

        

        //JWT Auth Token  => for adding extra security layer
       const token = user.generateJwtToken();

        return res.status(200).json({token , status: "Success"  })


    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
Route          /google
Descrip         Google Signin 
params          None 
Access          Public
Method          get 
*/ 

Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ],
})
);

/* 
Route          /google
Descrip         Google Signin callback 
params          None 
Access          Public
Method          get 
*/ 

Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}),
(req,res) => {
    return res.json({token: req.session.passport.user.token});
}
);



export default Router;