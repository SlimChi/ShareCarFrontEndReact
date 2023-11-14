import React from "react";

import LocationTravel from "../components/travel/oneTravel/LocationTravel";
import OptionVehicleTravel from "../components/travel/oneTravel/OptionVehicleTravel";
import DriverTravel from "../components/travel/oneTravel/DriverTravel";
import LastNotice from "../components/travel/oneTravel/LastNotice";

import { LuCalendarCheck2 } from "react-icons/lu";


export default function OneTravelView() {
    return (
        <div>
            <LocationTravel />
            <div className="flex justify-center mb-20">
                <div className=" border-2 border-[#57B526] rounded-xl w-[80rem] "></div>
            </div>
            

            <OptionVehicleTravel />
            <div className="flex justify-center mt-20 mb-20">
                <div className=" border-2 border-[#57B526] rounded-xl w-[80rem] "></div>
            </div>
        
            <DriverTravel />
            <div className="flex justify-center mt-[10rem] mb-20">
                <div className=" border-2 border-[#57B526] rounded-xl w-[80rem] "></div>
            </div>
          
            <LastNotice />

            <div className="flex justify-center items-center w-full mt-20">
                <div className="flex flex-col items-center justify-between h-[5rem]">
                    <button className="btn-green text-sm font-light w-[15rem] h-[2rem]">DEMANDE DE RESERVATION</button>
                    
                     <p className="flex items-center text-[#114076] text-sm font-light mb-6">
                        <LuCalendarCheck2 className="text-[#57B526] text-[24px] mr-4 "/>
                        La demande sera confirmée lorsque le conducteur la validera</p>   
                    
                    
                </div>
            </div>

            <div className="flex float-right mr-[5rem] mb-[2rem] mt-[5rem]">
                <div>
                    <button className="btn-green-inverse border-2 border-[#57B526] text-sm font-light w-[15rem] h-[2rem]">Signaler ce membre</button>
                </div>
            </div>
        </div>
    )
}