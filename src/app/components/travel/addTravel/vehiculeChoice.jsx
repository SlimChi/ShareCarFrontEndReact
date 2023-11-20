import React from "react"

import CarouselVehicle from "../../Vehicle/CarouselVehicle";


export default function VehiculeChoice () {


    return(
<>
    <div className="px-8 pt-6 w-[25rem] ml-[5rem] mt-12">
        <h4 className="text-2xl text-[#114076] mb-8">Mon vehicule</h4>
    </div>

<div className="flex flex-col justify-between">
    <div className="flex flex-row justify-evenly">
             <div>
            <CarouselVehicle />
        </div>
    </div>
    </div>
</>
)
}