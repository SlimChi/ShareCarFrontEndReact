import React from "react";
import Vehicle from "../../Vehicle/Vehicle";


import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineMusicNote } from "react-icons/hi";
import { LiaSmokingSolid } from "react-icons/lia";
import { MdOutlineVoiceOverOff } from "react-icons/md";
import { MdPets } from "react-icons/md";



export default function OptionVehicleTravel() {
    return (
        <div>
            
            <h4 className="m-12 text-[#114076] ">Les options du trajet</h4>
                
                    <div className="flex justify-evenly w-full mb-20">
                        <div className="flex flex-col space-y-4">
                            <div className="flex justify-between items-center w-[20rem]">
                                <div className="flex items-center w-[13rem]">
                                    <HiOutlineUsers className="text-[#57B526] text-[24px]"/>
                                    <p className="ml-4">Nombre de passagers</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-[20rem]">
                                <div className="flex items-center w-[13rem]">
                                    <LiaSmokingSolid className="text-[#57B526] text-[24px]"/>
                                    <p className="ml-4">Cigarette autorisée</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <div className="flex justify-between items-center w-[20rem]">
                                <div className="flex items-center w-[13rem]">
                                    <MdOutlineVoiceOverOff className="text-[#57B526] text-[24px]"/>
                                    <p className="ml-4">Conducteur silencieux</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-[20rem]">
                                <div className="flex items-center w-[13rem]">
                                    <MdPets className="text-[#57B526] text-[24px]"/>
                                    <p className="ml-4">Animaux autorisés</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <div className="flex justify-between items-center w-[20rem]">
                                <div className="flex items-center w-[13rem]">
                                    <HiOutlineMusicNote className="text-[#57B526] text-[24px]"/>
                                    <p className="ml-4">Musique en conduisant</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                

            <div>
                <Vehicle />
            </div>


        </div>
    )
}