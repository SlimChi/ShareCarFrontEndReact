import React from "react";

import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineMusicNote } from "react-icons/hi";
import { LiaSmokingSolid } from "react-icons/lia";
import { MdOutlineVoiceOverOff } from "react-icons/md";
import { MdPets } from "react-icons/md";

export default function SearchFilter() {
    return(
<div className="flex flex-col">


        <div className="flex flex-col mt-4">
            <h3 className="text-xl font-bold text-[#114076] mb-4">Trier par :</h3>
            <div className="ml-12 space-y-4 text-sm">
                <div className="flex w-[15rem] justify-between">
                    <p>Départ le plus tôt</p>
                    <input type="checkbox" name="" id="" className="rounded-full"/>
                </div>
                <div className="flex w-[15rem] justify-between">
                    <p>Prix le plus bas</p>
                    <input type="checkbox" name="" id=""  className="rounded-full"/>
                </div>
                <div className="flex w-[15rem] justify-between">
                    <p>Trajet le plus court</p>
                    <input type="checkbox" name="" id="" className="rounded-full"/>
                </div>
            </div>
        </div>

        <div className="border-[#57B526] border-2 rounded-lg w-[20rem] mt-12"></div>

        <div className="flex flex-col mt-12">
            <h3 className="text-xl font-bold text-[#114076] mb-4">Services :</h3>
            <div className="ml-12 space-y-4 text-sm">
                <div className="flex w-[15rem] justify-between">
                    <div className="flex items-center">
                        <HiOutlineUsers className="text-[#57B526] text-[18px] mr-4"/>
                        <p>Max 2 pers à l'arrière</p>  
                    </div>
                    <input type="checkbox" name="" id="" className="rounded-full"/>
                </div>
                <div className="flex w-[15rem] justify-between">
                    <div className="flex items-center">
                        <LiaSmokingSolid className="text-[#57B526] text-[18px] mr-4"/>
                        <p>Cigarette autorisée</p>
                    </div>
                    <input type="checkbox" name="" id=""  className="rounded-full"/>
                </div>
                <div className="flex w-[15rem] justify-between">
                    <div className="flex items-center">
                        <MdOutlineVoiceOverOff className="text-[#57B526] text-[18px] mr-4"/>
                        <p>Conducteur silencieux</p>
                    </div>
                    <input type="checkbox" name="" id="" className="rounded-full"/>
                </div>
                <div className="flex w-[15rem] justify-between">
                    <div className="flex items-center">
                        <MdPets className="text-[#57B526] text-[18px] mr-4"/>
                        <p>Animaux autorisés</p>
                    </div>
                    <input type="checkbox" name="" id="" className="rounded-full"/>
                </div>
                <div className="flex w-[15rem] justify-between">
                    <div className="flex items-center">
                        <HiOutlineMusicNote className="text-[#57B526] text-[18px] mr-4"/>
                        <p>Musique sur la route</p>
                    </div>
                    <input type="checkbox" name="" id="" className="rounded-full"/>
                </div>
            </div>
        </div>

        <div className="border-[#57B526] border-2 rounded-lg w-[20rem] mt-12"></div>

        <div className="flex flex-col">
            <button className="btn-green-inverse border-[#57B526] border-2 mt-10 w-[5rem] mb-4">Filtrer</button>
            <button className="w-[7rem] mb-12 italic text-sm text-[#114076]">Effacer les filtres</button>   
        </div>
        
</div>
    )
}