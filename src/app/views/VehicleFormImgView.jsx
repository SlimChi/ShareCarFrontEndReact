import react from "react";

import Sidebar from "../components/layouts/SideBar";

export default function VehicleFormImgView() {
    
    return (
<div> 

<img
          src="../../../../src/Images/Car2.png"
          alt=""
          className="object-cover h-[30rem] w-full"
        />
        <Sidebar />
        <h4 className="text-center uppercase font-bold text-[#114076] mt-8 mb-[5rem]" >
          IMAGES DU VEHICULE
        </h4>
    <form>   
        <div className="flex flex-row  justify-evenly items-center space-x-4 mt-8 w-full">
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

{/* rediriger vers URL_VEHICLE une fois validé */}
            <div className="m-16 flex justify-end mr-[8rem]">
                <button className="btn-green w-[15rem] h-[3rem]">ENREGISTER</button>
            </div>
        </form>
</div>
    );
}