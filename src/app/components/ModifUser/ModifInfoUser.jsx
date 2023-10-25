import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
                    <p>Nbre de points : <em>2 500</em></p>
                </div>
            </div>
            <div className="flex justify-end">
               <BsPen /> 
            </div>
            
            
            <div className="flex flex-col justify-between mt-8 ">
                <div className="flex flex-col justify-evenly h-[15rem]">
                    <input 
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Nom"
                        className="input"/>
                    
                    <input 
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Prenom"
                        className="input"/>
                  
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Pseudo"
                        className="input"/>
           
                    <input 
                        type="date"
                        id="date"
                        name="date"
                        placeholder="Date de naissance"
                        className="input"/>
                
                    <input 
                        type="Email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="input"/>
                   
                </div>

                <div className="flex flex-col justify-evenly h-[7rem]">
                    <input
                        type="text"
                        id="adresse"
                        name="adresse"
                        placeholder="Adresse"
                        className="input"/>
                
                    <div className="flex flex-row">
                        <input 
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            placeholder="Code postal"
                            className="input w-[10rem]"/>
                        <input
                            type="text"
                            id="city" 
                            name="city" 
                            placeholder="Ville"
                            className="input"/>
                    </div>
                </div>
            </div>
            
        </div>
         );
};

export default ModifInfoUser;