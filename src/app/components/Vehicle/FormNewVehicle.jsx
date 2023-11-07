import react from "react";

export default function FormNewVehicle() {
    
    return (
    <div >
        <form action="" className=""> 

            <div className="px-8 pt-6 pb-8 mb-4 w-[25rem] space-y-8 ml-[5rem]">
                <h6 className="font-bold text-[#114076] mb-8">NOUVEAU VEHICULE</h6>
                
                <div className="flex justify-between w-[50vw]">
                    <div className=" flex flex-col">
                        <label className="block text-gray-700 text-sm ">
                            Marque
                        </label>
                        <select
                            className="input py-2 px-3 text-gray-700 w-[20rem] leading-tight focus:outline-none focus:shadow-outline"
                            id="marque"
                            type="select"
                        />
                    </div>
                    <div className=" flex flex-col">
                        <label className="block text-gray-700 text-sm">
                            Modele
                        </label>
                        <select
                            className="input w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="modele"
                            type="text"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between w-[55rem] ml-[7rem]">
                <label htmlFor="nbre_places" className="text-sm font-medium text-gray-900">Nbre de places disponibles</label>
                    <select id="nbre_places" className="select">
                        <option className="option" select="0">0</option>
                        <option className="option" value="1">1</option>
                        <option className="option" value="2">2</option>
                        <option className="option" value="3">3</option>
                        <option className="option" value="4">4</option>
                    </select>

                <label htmlFor="nbre_places" className="block mb-2 text-sm font-medium text-gray-900 ">Nbre de petits bagages</label>
                    <select id="nbre_places" className="select">
                        <option className="option" select="0">0</option>
                        <option className="option" value="1">1</option>
                        <option className="option" value="2">2</option>
                        <option className="option" value="3">3</option>
                        <option className="option" value="4">4</option>
                    </select>

                <label htmlFor="nbre_places" className="block mb-2 text-sm font-medium text-gray-900 ">Nbre de grands bagages</label>
                    <select id="nbre_places" className="select">
                        <option className="option" select="0">0</option>
                        <option className="option" value="1">1</option>
                        <option className="option" value="2">2</option>
                        <option className="option" value="3">3</option>
                        <option className="option" value="4">4</option>
                    </select>
            </div>

        </form>
    </div>
    );
}