require("dotenv").config();
const express = require("express");

// const mongoose = require("mongoose");
import mongoose from 'mongoose';
import helmet from "helmet";
import cors from "cors";


    


const zomato = express();


zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
      useUnifiedTopology: true,
    
    }
    ).then(() =>console.log("connection has established"));



zomato.get("/",(req,res) =>
 res.json({message:"setup Success Yay!!"})
);

zomato.listen(4000,() => console.log("server is up and running on port "));