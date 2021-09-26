import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


import { UserModel } from "../../database/user";
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
        const {email, password, fullname , phoneNumber} = req.body.credentials;

        //Check weather email or phone number is exist

        const checkUserByEmail = await UserModel.findOne({email});
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if(checkUserByEmail || checkUserByPhone) {
            return res.json({error:"User already Exist"})
        }

        // hashing  = password is encrypt to the another code which is note undenstable 
        // salting = doing hashing again an again (To secure the password)

        //dev is => encrypted - 45t1ywh895%%bjhg%%y8719880 -> yhajkgggggggggggguy782178319 ->

        const bcryptSalt = await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password,bcryptSalt);

        //JWT Auth Token  => for adding extra security layer
        //Database

        await UserModel.create({...req.body.credentials, password:hashedPassword});

        const token = jwt.sign({user: {fullname, email }}, "ZomatoApp");


        return res.status(200).json({token})


    }catch(error){
        return res.status(500).json({error: error.message});
    }
});


export default Router;