import React from "react";

import BioUser from "../components/user/BioUser";
import InfoUser from "../components/user/InfoUser";
import Sidebar from "../components/layouts/SideBar";
import HomeView from "./HomeView";


export default function ProfilView() {
    return (
        <div className="">
            
        <img src="../../../../src/Images/covoit2.png" alt="" className="object-cover h-[30rem] w-full"/>
        
            <Sidebar/>

    <div className="flex flex-row justify-evenly">
       <div className="w-[20rem]">
            <BioUser/>
        </div>
        <div className="w-[50rem]">
            <InfoUser />
        </div>
    </div>
</div>
        
   
        
    );
}
