import react from "@heroicons/react";


import { BsCarFront } from "react-icons/bs";
import { PiBackpack } from "react-icons/pi";
import { PiSuitcaseRolling } from "react-icons/pi";
import CarouselVehicle from "../../components/Vehicle/CarouselVehicle";


import { HiOutlineUsers } from "react-icons/hi";

export default function Vehicle() {
    return (
        <div className="flex flex-col justify-between">
                <div className="flex flex-row justify-evenly">
                    <div className="flex flex-col justify-between h-[20rem]  space-y-8">
                        <div className="flex w-[20rem] items-center">
                            <BsCarFront className="text-[#57B526] text-4xl mr-6"/>
                            <p>marque modèle</p>
                        </div>

                        <div className="flex w-[20rem] ">
                            <HiOutlineUsers className="text-[#57B526] text-5xl mr-6"/>
                            <div className="flex w-[20rem] items-center">
                                <p className="font-bold text-[20px]">x </p>
                                <p className="ml-4">Nbre de passagers</p>
                            </div>
                        </div>

                        <div className="flex w-[20rem] ">
                            <PiBackpack className="text-[#57B526] text-5xl mr-6"/>
                            <div className="flex w-[20rem] items-center">
                                <p className="font-bold text-[20px]">x </p>
                                <p className="ml-4">Petits bagages</p>
                            </div>
                        </div>

                        <div className="flex w-[20rem]">
                            <PiSuitcaseRolling className="text-[#57B526] text-5xl mr-6"/>
                            <div className="flex w-[20rem] items-center">
                                <p className="font-bold text-[20px]">x </p>
                                <p className="ml-4">Grands bagages</p>
                            </div>
                        </div>
                    </div>


                    <div className="mb-[15rem]">
                        <CarouselVehicle />
                        {/* <img src="../../../../src/Images/Car2.png" alt="" className="w-[30rem]"/> */}
                    </div>
                </div>
            </div>
    )

}