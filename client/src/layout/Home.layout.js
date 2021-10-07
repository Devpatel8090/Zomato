
import React from "react";

// Components
import Navbar from "../Components/navbar";
import FoodaTab from "../Components/foodtab";

const HomeLayout = (props) => {
    return( 
    <>
    <div className="container mx-auto px-4 lg:px-20">
    <Navbar />
    <FoodaTab />
     {props.children}
        
    </div>
    </>
    );
};

export default HomeLayout;