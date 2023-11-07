import React from "react";

import { BsCarFront } from "react-icons/bs";
import { PiBackpack } from "react-icons/pi";
import { PiSuitcaseRolling } from "react-icons/pi";

export default function NewVehicle () {
    return (
    <div>
            <div className="px-8 pt-6 w-[25rem] ml-[5rem]">
                <h6 className="font-bold text-[#114076] mb-8">VEHICULE 1</h6>
            </div>

        <div className="flex flex-col justify-between">
                <div className="flex flex-row justify-evenly">
                    <div className="flex flex-col justify-between  space-y-8">
                        <div className="flex w-[20rem] items-center">
                            <BsCarFront className="text-[#57B526] text-4xl mr-6"/>
                            <p>marque modèle couleur</p>
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
                                <p className="text-[20px]">2 </p>
                                <p className="ml-4">Grands bagages</p>
                            </div>
                        </div>
                    </div>
                
                    <div>
                        <img src="../../../../src/Images/Car2.png" alt="" className="w-[30rem]"/>
                    </div>
                </div>


                <div>
                   <div className="px-8 pt-6 w-[25rem] ml-[5rem] mt-8">
                        <h8 className="font-bold text-[#114076] mb-8">Options de voyage</h8>
                    </div>

{/* // mapper pour afficher les options */}
                    <div className="flex justify-evenly w-full mt-8 mb-16">
                        <div className="flex flex-col space-y-4">
                            <div className="flex justify-between items-center">
                                <p className="text-[#57B526]">icon</p>
                                <p className="ml-4">intitulé option</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
    );
}