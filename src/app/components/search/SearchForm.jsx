import React from "react";

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {LuUsers2} from "react-icons/lu"


export default function SearchForm() {
    return (
<div>
    
    <div className="relative">
        <img src="../../../../src/Images/fond.png" alt="" className="object-cover h-[30rem] w-full "/>

        <form action="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
            <div className=" flex justify-evenly">
                <div class="relative flex items-center  ">
                    <FmdGoodOutlinedIcon className="text-[#52B526] w-5 h-5 absolute ml-3 pointer-events-none"/>
                    <input
                    type="text"
                    name="adresseDepart"
                    placeholder="Départ"
                    autocomplete="off"
                    aria-label="Depart"
                    className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-gray-700 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-[#52B526] focus:ring-2"
                    />
                </div>
                <div class="relative flex items-center  ">
                    <FmdGoodOutlinedIcon className="text-[#52B526] w-5 h-5 absolute ml-3 pointer-events-none"/>
                    <input
                    type="text"
                    name="adresseArrivée"
                    placeholder="Arrivée"
                    autocomplete="off"
                    aria-label="Arrivée"
                    className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-gray-700 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-[#52B526] focus:ring-2"
                    />
                </div>
                <div class="relative flex items-center  ">
                    <CalendarMonthOutlinedIcon className="text-[#52B526] w-5 h-5 absolute ml-3 pointer-events-none"/>
                    <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    autocomplete="off"
                    aria-label="Date"
                    className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-gray-700 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-[#52B526] focus:ring-2"
                    />
                </div>
                <div class="relative flex items-center  ">
                    <LuUsers2 className="text-[#52B526] w-5 h-5 absolute ml-3 pointer-events-none"/>
                    <input
                    type="text"
                    name="nbre_personnes"
                    placeholder="nbre_personnes"
                    autocomplete="off"
                    aria-label="nbre_personnes"
                    className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-gray-700 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-[#52B526] focus:ring-2"
                    />
                </div>
                <button type="submit" className="btn-green text-[14px] font-light w-[10rem]">RECHERCHER</button>
            </div>
        </form>
    </div>  


    <div className="flex justify-end">
        <div className="flex flex-col mr-12 mt-7 mb-20">
            <h4 className="text-[14px] italic text-[#114076] ">...Trajets disponibles</h4>
        </div>
    </div>             
</div>
 
    )
}