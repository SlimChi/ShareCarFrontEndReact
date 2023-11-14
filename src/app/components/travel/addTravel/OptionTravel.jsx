import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineMusicNote } from "react-icons/hi";
import { LiaSmokingSolid } from "react-icons/lia";
import { MdOutlineVoiceOverOff } from "react-icons/md";
import { MdPets } from "react-icons/md";

export default function OptionTravel() {
    return(
    <div>
        <form action="" className=""> 
        <div className="px-8 pt-6 w-[25rem] ml-[5rem] mt-16">
            <h6 className="font-bold text-[#114076] mb-8">OPTION DU VOYAGE</h6>
        </div>

        <div className="flex justify-evenly w-full">
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center w-[20rem]">
                    <div className="flex items-center w-[13rem]">
                        <HiOutlineUsers className="text-[#57B526] text-[24px]"/>
                        <p className="ml-4">Nombre de passagers</p>
                    </div>
                    <input type="checkbox" />
                </div>
                <div className="flex justify-between items-center w-[20rem]">
                    <div className="flex items-center w-[13rem]">
                        <LiaSmokingSolid className="text-[#57B526] text-[24px]"/>
                        <p className="ml-4">Cigarette autorisée</p>
                    </div>
                    <input type="checkbox" />
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center w-[20rem]">
                    <div className="flex items-center w-[13rem]">
                        <MdOutlineVoiceOverOff className="text-[#57B526] text-[24px]"/>
                        <p className="ml-4">Conducteur silencieux</p>
                    </div>
                    <input type="checkbox" />
                </div>
                <div className="flex justify-between items-center w-[20rem]">
                    <div className="flex items-center w-[13rem]">
                        <MdPets className="text-[#57B526] text-[24px]"/>
                        <p className="ml-4">Animaux autorisés</p>
                    </div>
                    <input type="checkbox" />
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center w-[20rem]">
                    <div className="flex items-center w-[13rem]">
                        <HiOutlineMusicNote className="text-[#57B526] text-[24px]"/>
                        <p className="ml-4">Musique en conduisant</p>
                    </div>
                    <input type="checkbox" />
                </div>
                
            </div>
        </div>
        </form>
    </div>  
    )
}