import React from "react";
import { FaPizzaSlice , FaGripLinesVertical} from "react-icons/fa";
import {ImLocation } from "react-icons/im";
import { BiSearch, BiCaretDown} from "react-icons/bi";
const MobileNav = () => {
    return (
        <>
         <div className="flex items-center justify-between flex w-full lg:hidden ">
        <div className="w-28">
                <img 
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3  ">
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full" >Use App</button>
                <span className="w-8 h-8 border p-2 border-blue-300 text-blue-400 rounded-full">
                    <FaPizzaSlice className="w-full h-full" />
                </span>
            </div>
            </div>

        </>
    );
};

const LaptopNav = () => {
    return (
        <>
       <div className="items-center flex w-full justify-evenly  hidden lg:flex">
        <div className="w-28">
                <img 
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full" />
            </div>
            <div className="border flex flex-row p-2 items-center m-4 shadow-lg rounded-lg  w-3/5">
                <span className="  w-6 h-6 text-zomato-400">
                    <ImLocation className="w-full h-full " />
                </span>
                <input placeholder="Ahmedabad"/>
                <BiCaretDown className="w-6 h-6 text-zomato-400" />

            
            <FaGripLinesVertical />
            
                <span className="text-blue-400 bg w-8 h-8 aligns-center ">
                    <BiSearch className="w-full h-full p-1" />
                </span>
                <input className="w-1/2" placeholder="Serch for a restaurant Cuisine or a dish"/>
               
                </div>
            
            <div className="flex items-center gap-3  ">
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full" >Use App</button>
               
                 <span className="w-8 h-8 border p-2 border-blue-300 text-blue-400 rounded-full ">
                    <FaPizzaSlice className="w-full h-full " />
                 
                 </span>
               
                
                
            </div>
            </div>
        </>
    )
};
const Navbar = () => {
    return (
        <>
        <nav className="p-2 flex bg-white shadow-md items-center ">
        <MobileNav />
        <LaptopNav />
        </nav>

        </>
    );
};

export default Navbar;