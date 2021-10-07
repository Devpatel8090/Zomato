import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/allModels";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback"
        },
        async(accesToken , refreshToken , profile, done) =>{
            //creating a new user
            const newUser = {
                fullname: profile.displayName,
                email: profile.emails[0].value,
                profile: profile.photos[0].value
            
            };

            try {
                //check weather user exist or not (if it exist then we are sending the token  )
                const user = await UserModel.findOne({email: newUser.email})
                //generatae Jwt token 
                const token = user.generateJwtToken();
                if(user) {
                    done(null , {user , token});
                } else {
                    //creating new user
                    const user = await UserModel.create(newUser);
                    //generatae Jwt token 
                const token = user.generateJwtToken();
                
                //return user
                done(null, {user, token});
            }
            }catch(error) {
                done(error , null);
            }

        })
    );
passport.serializeUser((userData, done) => done(null , {...userData}));
passport.deserializeUser((id , done ) => done(null, id));
};