import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux-store/authenticationSlice";

import { BsPen } from "react-icons/bs";


const ModifBioUser = () => {
    // const isLogged = useSelector(selectIsLogged);
    return (
        
        <div className="flex flex-col justify-center w-[25rem] bg-blue-200 space-y-4 md:items-center md:space-y-0 md:space-x-4 ">
           
                <div className="flex justify-center items-center bg-white h-[15rem] w-[15rem] border-2 rounded-full mt-[-7rem]">
                    <img src="/src/Images/avatar1.jpg" alt="" className="flex  rounded-full h-[14rem] w-[14rem]"/>
                </div>
            
            <div className="flex flex-col justify-center w-[15rem] h-[35rem]">
                <div className="flex items-center">
                    <h3 className="mb-4 text-[#114076]"> Ma Bio</h3> <BsPen className="ml-4"/>
                </div>
                
                <p className="indent-8 break-all">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        
        </div>
         );
};

export default ModifBioUser;