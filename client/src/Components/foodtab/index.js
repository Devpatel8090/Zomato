import React, { useEffect, useState } from "react";

import {MdOutlineDeliveryDining, MdLocalDining} from "react-icons/md";
import {BsHandbag} from "react-icons/bs";
import {GiMorgueFeet} from "react-icons/gi"
import {IoBeerOutline} from "react-icons/io5";

import { useParams } from "react-router"; 

const LaptopTab = () => {

  

    
    return (
        <>
        <div className="flex-row itmes-center p-4 gap-4 hidden lg:flex"> 
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
    );
};

const MobileTab = () => {
    
        
          const [allTypes , setAllTypes] = useState([
        {
            id: `delivery`,
            icon:<BsHandbag />,
            name:"Delivery",
            isActive: false
        },
        {
            id: `night`,
            icon:<IoBeerOutline />,
            name:"nightlife",
            isActive: false

        },
        {
            id: `dining`,
            icon:<GiMorgueFeet />,
            name:"Dining Out",
            isActive: false

        }

    ])

    const {type} = useParams();
useEffect(()=> {
  if(type) {
    const updateTypes = allTypes.map((item)=> {
      if(item.id===type) {
        return { ...item, isActive: true};
      }

      return item;
    });
    setAllTypes(updateTypes);
  }
},[type]);
    return (
        <>
        <div className="lg:hidden bg-white p-3 fixed bottom-0 z-10 w-full flex items-center justify-between border text-gray-500">
          {
            allTypes.map((items)=> {
              <div className={
                items.isActive ? "flex flex-col items-center text-xl text-zomato-400 border-t-2 border-zomato-400" : "flex flex-col items-center text-xl"
              }>
              {items.icon}
              <h5>{items.name}</h5>
              </div>
            })
          }
        </div>
      </>
    );
};


const FoodTab = () => {
    return (
        <>
        <div>
            <LaptopTab />
            <MobileTab />
        </div>
        </>
    );
};


export default FoodTab;