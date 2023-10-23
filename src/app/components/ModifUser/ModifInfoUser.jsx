import React from "react";

import { IoIosStar } from "react-icons/io";
import { BsPen } from "react-icons/bs";


const ModifInfoUser = () => {
    return (
        <div className="flex flex-col justify-between h-[33rem]">
            <div className="mt-4 flex justify-between">
                <div className="flex items-center justify-between w-[6rem]">
                    <IoIosStar className="text-[yellow] text-4xl"/>
                    <p className="">4.5 / 5</p>
                </div>
                <div className="flex flex-col ">
                    <p>Membre depuis : <em>oct 2023</em></p>
                    <p>Nbre de points: <em>2 500</em></p>
                </div>
            </div>
            <div className="flex justify-end">
               <BsPen /> 
            </div>
            
            <div className="flex flex-col justify-between mt-8 ">
                <div className="flex flex-col justify-evenly h-[15rem]">
                    <p>Nom</p>
                    <p>Prenom</p>
                    <p>Pseudo</p>
                    <p>Age</p>
                    <p>Email</p>
                </div>
                <div className="flex flex-col justify-evenly h-[7rem]">
                    <p>Adresse</p>
                
                    <div className="flex flex-row">
                        <p>CodePostal</p>
                        <p className="ml-8">Ville</p>
                    </div>
                </div>
            </div>

        </div>
         );
};

export default ModifInfoUser;