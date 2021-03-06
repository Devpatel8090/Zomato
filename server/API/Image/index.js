// libraries 
 require('dotenv').config();
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

// database

import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer config

const storage = multer.memoryStorage();
const upload = multer({storage});



/*
Route               /
Des                 Uploading Given Image to S3 bucket , and then saving the file to mongodb
params              none
Access              public
Method              GET
*/

Router.post("/", upload.single("file"), async(req, res) => {
    try { 
        const file = req.file;

        // S3 Bucket options
        const bucketOptions = {
            Bucket: "devpatelbucket",
            Key: file.originalname, 
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        };

        

        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadImage });
        
    }catch(error) {
        return res.status(500).json({error: error.message})
    }
} );

export default Router;