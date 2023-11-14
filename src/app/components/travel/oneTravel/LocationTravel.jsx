import react from "@heroicons/react";

import Map from "./Map";

import {IoIosStar} from "react-icons/io";
import {MdOutlineVoiceOverOff} from "react-icons/md";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineMusicNote } from "react-icons/hi";
import { LiaSmokingSolid } from "react-icons/lia";
import { MdPets } from "react-icons/md";


export default function LocationTravel() {
    return (
        <>
        
            <div className="relative">
                <img src="../../../../src/Images/map.png" alt="" className="object-cover h-[45rem] w-full opacity-50"/>
            
                
                <div className="flex justify-evenly absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                    <div className="flex flex-col mt-20 text-center">
                        <h1 className="mb-20">Date du jour</h1>
                    <div className="flex justify-evenly w-full">
                        <div >
                        <div className=" bg-blue-100 w-[30rem] h-[12rem] rounded-xl mr-24">
                            <div className="flex justify-between">
                                <div className="flex w-[20rem] h-[10rem] m-4">
                                    <div className="flex flex-col justify-between ">
                                    <p className="text-[#114076] ">hrs depart</p> 
                                    <p className="text-[#114076] ">hrs depart</p> 
                                    </div>
                                    <div className="flex flex-col items-center justify-between ml-4">
                                        <FmdGoodOutlinedIcon className="text-[#57B526]"/>
                                        <div className="border-[#57B526] border-2 rounded-full w-[0.1rem] h-[5rem]"></div>
                                        <FmdGoodOutlinedIcon className="text-[#57B526]"/> 
                                    </div>
                                    <div className="flex flex-col justify-between ml-8">
                                        <p className="text-[#114076] ">ville départ</p> 
                                        <p className="text-[#114076] ">ville arrivée</p>
                                    </div> 
                                </div>

                                <div className="flex flex-col justify-between m-4">
                                    <p className="text-sm">nbre de points</p>
                                    <div className="flex flex-col justify-between items-end w-[6rem] h-[5rem]">
                                        {/* n'afficher que les icones si l'option est prévue dans les options de voyage */}
                                        <HiOutlineUsers className="text-[#57B526] text-[18px]"/>
                                        <HiOutlineMusicNote className="text-[#57B526] text-[18px]"/>
                                        <LiaSmokingSolid className="text-[#57B526] text-[18px]"/>
                                        <MdPets className="text-[#57B526] text-[18px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    <Map/> 
                    </div>
                    </div> 
                </div>
                   
            </div>
            
         </>
    )
}