// env variable
require("dotenv").config();
const express = require("express");


// API
import Auth from "./API/Auth";
import  Restaurant from "./API/Resturant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/orders";
import Review from "./API/Reviews"


import helmet from "helmet";
import cors from "cors"; 
import passport from "passport";

// // config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

  // Database connection
import ConnectDB from "./database/connection";



// initialize the zomato app to express 
const zomato = express();


zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport configuration 
googleAuthConfig(passport);
routeConfig(passport);

//For application routes
//localhost:4000/auth/signup
zomato.use("/auth",Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order" , Order);
zomato.use("/reviews", Review);

zomato.get("/",(req,res) =>
 res.json({message:"setup Success Yay!!"})
);

zomato.listen(4000,() =>
ConnectDB().then(()=>console.log("Server is up and running"))
.catch(()=>console.log("DB connection failed"))

);
