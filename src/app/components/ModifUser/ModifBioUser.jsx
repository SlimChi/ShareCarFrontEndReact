import React from "react";

import { BsPen } from "react-icons/bs";
import { MdOutlineAddAPhoto } from "react-icons/md";


const ModifBioUser = () => {

    return (
        
        <div className="flex flex-col items-center justify-center w-[25rem] bg-blue-200 space-y-4 md:items-center md:space-y-0 md:space-x-4 ">
           
                <div className="flex justify-center items-center bg-white h-[15rem] w-[15rem] border-2 rounded-full mt-[-7rem]">
                    <div className="flex ">
                        <img src="/src/Images/avatar1.jpg" alt="" className=" flex rounded-full h-[14rem] w-[14rem] ml-[0.4rem]"/>
                        <div className="flex items-end justify-end">
                            <button className="text-[#57B526] text-[2rem]"><MdOutlineAddAPhoto/></button>  
                        </div>
                    </div>
                    
                </div>
            
            <div className="flex flex-col justify-center w-[15rem] h-[35rem]">
                <div className="flex items-center">
                    <h3 className="mb-4 text-[#114076]">Ma Bio</h3> <BsPen className="ml-4"/>
                </div>
                
                <textarea rows={18} className="indent-8 w-[18rem] ml-[-2rem] border-[#57B526]">
                    {/* {oneUser.biographie} */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</textarea>
            </div>
        
        </div>
         );
};

export default ModifBioUser;