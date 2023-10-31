import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { BsPen } from "react-icons/bs";
import { MdOutlineAddAPhoto } from "react-icons/md";


const ModifBioUser = () => {

    const [oneUserBio, setOneUserBio] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            url: 'http://127.0.0.1:8000/api/profil',
        }).then(function (response) {
            console.log(response.data);
            setOneUserBio(response.data);

        })
    }, []);


    const formik = useFormik({
        initialValues: {
          biographie: '',
        },

        onSubmit: () => {
            axios({
                method: 'put',
                url: `http://127.0.0.1:8000/api/profil_modif`, 
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                data: {
                    biographie: formik.values.biographie,
                }
            }).then(function (response) {
                console.log(response.data);
                if (response.data.status === true) {
                    window.location.href = URL_PROFIL
                    // alert(response.data.message);
                } else {
                    return (response.data.message);
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
    });

    return (
        
        <div className="flex flex-col items-center justify-center w-[25rem] bg-blue-200 space-y-4 md:items-center md:space-y-0 md:space-x-4 ">
           
                <div className="flex justify-center items-center bg-white h-[15rem] w-[15rem] border-2 rounded-full mt-[-7rem]">
                    <div className="flex flex-col ">
                        <img src="/src/Images/avatar1.jpg" alt="" className=" flex rounded-full h-[14rem] w-[14rem]"/>
                    </div>

                    
                </div>

                <div className="flex items-end ">
                    <label className="block mt-4">
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-[#57B526]
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-[#57B526] 
                            hover:file:bg-violet-100
                            "/>
                        </label>
                    </div>
            
            <div className="flex flex-col justify-center w-[15rem] h-[35rem]">
                <div className="flex items-center">
                    <h3 className="mb-4 text-[#114076]">Ma Bio</h3> <BsPen className="ml-4"/>
                </div>
                <form action="" 
                 onSubmit={formik.handleSubmit} 
                >
                <textarea rows={18} className="indent-8 w-[18rem] ml-[-2rem] border-[#57B526]" 
                defaultValue={oneUserBio.biographie}
                type="text"
                id="biographie"
                name="biographie"
                placeholder={oneUserBio.biographie}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.biographie}
                >
                    {formik.biographie}
                </textarea>
                </form>
            </div>
        
        </div>
         );
};

export default ModifBioUser;