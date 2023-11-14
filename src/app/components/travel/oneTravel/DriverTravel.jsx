import React from "react";

import {IoIosStar} from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";


export default function DriverTravel() {
    return (
        <div className="">
            <div className="flex justify-between mr-[10rem] ml-[10rem] mb-[5rem]">
                <div className="flex ">
                    <div className="flex items-center justify-center rounded-full bg-[#114076] w-[5rem] h-[5rem] mr-12">
                        <img src="../../../../src/Images/avatar1.jpg" alt="" className="rounded-full w-[4.5rem] h-[4.5rem]"/>
                    </div>
                    <div className="flex flex-col justify-between space-y-4">
                        <div className="flex justify-between w-[10rem]">
                            <p>Nom Prenom</p><p>age</p>
                        </div>
                        <p>Membre depuis : 01/01/2023</p>
                        <p>Nbre de trajets publiés : x</p>
                    </div>
                    </div>
                <div>
                <p className="flex items-center"><IoIosStar className=" text-[yellow] text-3xl mr-2" /> Note </p>
                </div>
            </div>
            <div className="flex items-center justify-center mr-[15rem] ml-[15rem] mb-[5rem] w-[70rem]">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum pulvinar eget neque quis dapibus. Curabitur
                     blandit mi eget tellus rhoncus malesuada. Pellentesque
                      rutrum, lorem sed fringilla mattis, lorem ligula egestas
                       odio, non tincidunt mi nunc vitae risus. Curabitur dapibus
                        finibus nisi eu pharetra. Sed venenatis tristique faucibus.
                         Cras volutpat eu turpis eget malesuada. Aliquam ut dictum
                          justo, eget pretium lectus.</p>
            </div>
            <div className="flex float-right mr-[10rem]">
                <LuMessagesSquare className="text-[#57B526] text-3xl mr-4" />
                <button>Contacter le chauffeur</button>
            </div>
        </div>

        
    )
}