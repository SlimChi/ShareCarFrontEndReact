import react from "@heroicons/react";

import { MdOutlineAddAPhoto } from "react-icons/md";

export default function FormNewVehicle() {
    
    return (
    <div >
        <form action="" className=""> 
            <div className="px-8 pt-6 pb-8 mb-4 w-[25rem] space-y-8 ml-[5rem]">
                <h6 className="font-bold text-[#114076] mb-8">NOUVEAU VEHICULE</h6>
                
                <div className="">
                    <label className="block text-gray-700 text-sm ">
                        Marque
                    </label>
                    <select
                        className="input py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="marque"
                        type="select"
                    />
                </div>
                <div className="">
                    <label className="block text-gray-700 text-sm">
                        Modele
                    </label>
                    <select
                        className="input w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="modele"
                        type="text"
                    />
                </div>
                <div className="">
                    <label className="block text-gray-700 text-sm">
                        Couleur
                    </label>
                    <input
                        className="input w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="couleur"
                        type="text"
                        />
                </div>
            </div>


        </form>
</div>
    );
}