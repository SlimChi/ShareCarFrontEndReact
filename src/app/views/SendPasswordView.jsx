import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";


import SendPassword from "../components/Password/SendPassword";




export default function SendPasswordView () {

    return (
        <div className="flex justify-between items-center ml-[10%] mt-20">
            <div className="flex flex-col w-full items-center justify-between h-[25rem] ">
                <h4 className="uppercase text-[#114076]">Récupérer votre mot de passe </h4>
                <p className="w-[30rem]">Renseignez votre mail et nous vous enverrons un 
                lien pour créer un nouveau mot de passe. Pensez à vérifier vos spam.</p>

                <SendPassword />
            </div>

            <div className="flex w-full items-center ">
                <img src='../../../../src/Images/Logo_ShareCar.png ' className="opacity-30 w-[40rem]" />
            </div>

        </div>
    );

}