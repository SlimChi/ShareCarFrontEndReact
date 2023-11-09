import react from "@heroicons/react";


export default function GestionImagesVehicle() {
    
    return (
<div>
    <form>
        <div className="flex flex-row justify-between w-[55rem] h-[10rem] ml-[-25rem] space-x-4 mt-8">
                <div>
                    <img src="../../../../src/Images/Car2.png" alt="" className="object-cover w-[20rem]"/> 
                        <label className="block mt-4">
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-[#57B526]
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-[#57B526] 
                            hover:file:bg-blue-100
                            "/>
                        </label>
                </div>

                <div>
                    <img src="../../../../src/Images/Car2.png" alt="" className="object-cover w-[20rem]"/> 
                        <label className="block mt-4">
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-[#57B526]
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-[#57B526] 
                            hover:file:bg-blue-100
                            "/>
                        </label>
                </div>

                <div>
                    <img src="../../../../src/Images/Car2.png" alt="" className="object-cover w-[20rem]"/> 
                        <label className="block mt-4">
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-[#57B526]
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-[#57B526] 
                            hover:file:bg-blue-100
                            "/>
                        </label>
                </div>
            </div>
        </form>
</div>
    );
}