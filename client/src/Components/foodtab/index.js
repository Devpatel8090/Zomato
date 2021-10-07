import React from "react";

import {MdOutlineDeliveryDining, MdLocalDining} from "react-icons/md"

const FoodaTab = () => {
    return (
        <>
        <div className="flex flex-row itmes-center p-4 gap-4"> 
            <button className="flex flex-row items-center p-2 gap-2 ">
                <MdOutlineDeliveryDining  className="w-16 h-16 border rounded-full bg-Foodtab-50"/>
               <span className="text-xl"> Delivery </span>
            </button>
        
            <button className="flex flex-row items-center p-2 gap-2 ">
                <MdLocalDining  className="w-16 h-16 border rounded-full bg-Foodtab-50"/>
               <span className="text-xl">Dinning Out  </span>
            </button>
        </div>
        </>
    )
}


export default FoodaTab;