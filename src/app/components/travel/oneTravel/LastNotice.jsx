import React from "react";


export default function LastNotice() {
    return (
        <div className="bg-blue-100">
            <div className="flex ml-[10rem] ">
               <h4 className="text-[#114076] text-[24px] font-bold mt-12 mb-12">Derniers avis:</h4> 
            </div>
            
            <div className="flex flex-col ml-[10rem]  ">
                <div className="flex justify-between items-center w-[75rem]">
                    <div className="flex items-center ">
                        <div className="flex items-center justify-center rounded-full bg-[#114076] w-[5rem] h-[5rem] mr-6">
                            <img src="../../../../src/Images/avatar1.jpg" alt="" className="rounded-full w-[4.5rem] h-[4.5rem]"/>
                            
                        </div>
                        <p className="text-[#114076] font-bold">Pseudo</p>
                    </div> 
                    <div>
                        <p className="text-[#114076] italic text-sm">date de com</p>
                    </div>
                </div>
              

                <div className="flex justify-center">
                    <div className="w-[70rem]">
                        <p className="text-[#114076]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum pulvinar eget neque quis dapibus. Curabitur
                            blandit mi eget tellus rhoncus malesuada. Pellentesque
                            rutrum, lorem sed fringilla mattis, lorem ligula egestas
                            odio, non tincidunt mi nunc vitae risus. Curabitur dapibus
                            finibus nisi eu pharetra. Sed venenatis tristique faucibus.
                            Cras volutpat eu turpis eget malesuada. Aliquam ut dictum
                            justo, eget pretium lectus.</p> 
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="border border-[#57B526] rounded-full w-[80rem] mb-8 mt-8"></div>
            </div>
        </div>
    )
}