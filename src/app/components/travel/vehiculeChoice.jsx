import React from "react"

import CarouselVehicle from "../../components/Vehicle/CarouselVehicle";

import { BsCarFront } from "react-icons/bs";
import { PiBackpack } from "react-icons/pi";
import { PiSuitcaseRolling } from "react-icons/pi";
import {LuUsers2} from "react-icons/lu"

import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineMusicNote } from "react-icons/hi";
import { LiaSmokingSolid } from "react-icons/lia";
import { MdOutlineVoiceOverOff } from "react-icons/md";
import { MdPets } from "react-icons/md";


export default function VehiculeChoice () {


    return(
<>
    <div className="px-8 pt-6 w-[25rem] ml-[5rem] mt-12">
        <h4 className="text-2xl text-[#114076] mb-8">Mon vehicule</h4>
    </div>

<div className="flex flex-col justify-between">
    <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-between  space-y-8">
            <div className="flex w-[20rem] items-center">
                <BsCarFront className="text-[#57B526] text-4xl mr-6"/>
                <select type="text" name="voiture" id="voiture" placeholder="voiture" className="input">
                    <option value=""></option>
                    <option value="">vehicule 1</option>
                    <option value="">vehicule 2</option>
                </select>
                
            </div>

            <div className="flex w-[20rem] ">
                <PiBackpack className="text-[#57B526] text-5xl mr-6"/>
                <div className="flex w-[20rem] items-center">
                    <p className="font-bold text-[20px]">4 </p>
                    <p className="ml-4">Petits bagages</p>
                </div>
                
            </div>

            <div className="flex w-[20rem]">
                <PiSuitcaseRolling className="text-[#57B526] text-5xl mr-6"/>
                <div className="flex w-[20rem] items-center">
                    <p className="font-bold text-[20px]">2 </p>
                    <p className="ml-4">Grands bagages</p>
                </div>
            </div>

            <div className="flex w-[20rem]">
                <LuUsers2 className="text-[#57B526] text-5xl mr-6"/>
                <div className="flex w-[20rem] items-center">
                    <p className="font-bold text-[20px]">2 </p>
                    <p className="ml-4">Nbre de places</p>
                </div>
            </div>
        </div>


        <div>
            <CarouselVehicle />
        </div>
    </div>


    <div>
         <div className="px-8 pt-6 w-[25rem] ml-[5rem] mt-8">
            <h6 className="font-bold text-[#114076] mb-8">Options de voyage</h6>
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
    </div>
  </div>
</>
)
}