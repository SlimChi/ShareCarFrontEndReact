import React from "react";

import {IoIosStar} from "react-icons/io";
import {MdOutlineVoiceOverOff} from "react-icons/md";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineMusicNote } from "react-icons/hi";
import { LiaSmokingSolid } from "react-icons/lia";
import { MdPets } from "react-icons/md";


export default function SearchTravelList() {
    return (
        <div className="flex flex-col ml-18">
            <div className="flex">
                <div className="flex flex-col justify-between bg-gray-100 w-[14rem] h-[12rem] rounded-tl-xl rounded-bl-xl">
                    <div className="flex items-center justify-center rounded-full bg-[#114076] w-[5rem] h-[5rem] m-4">
                        <img src="../../../../src/Images/avatar1.jpg" alt="" className="rounded-full w-[4.5rem] h-[4.5rem]"/>
                    </div>
                
                    <div className="flex flex-row justify-between  m-4">
                        <p className="flex items-center"><IoIosStar className=" text-[yellow] text-3xl mr-2" /> Note </p>
                        {/* prevoir une condition d'afficher l'icon si l'option est prévue dans les options de voyage */}
                        <MdOutlineVoiceOverOff className=" text-[#57B526] text-3xl"/>
                    </div>
                </div>

                <div className=" bg-blue-100 w-[40rem] h-[12rem] rounded-tr-xl rounded-br-xl">
                    <div className="flex justify-between">
                        <div className="flex w-[20rem] h-[10rem] m-4">
                            <div className="flex flex-col justify-between ">
                            <p className="text-[#114076] ">hrs depart</p> 
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
                                <p className="text-[#114076] ">etape</p> 
                                <p className="text-[#114076] ">ville arrivée</p>
                            </div> 
                        </div>

                        <div className="flex flex-col justify-between m-4">
                            <p>nbre de points</p>
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
        </div>
)}