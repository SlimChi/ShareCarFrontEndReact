import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ROLE_ADMIN } from '../constants/rolesConstant';
import { URL_ADMIN_HOME } from '../constants/urls/urlFrontEnd';
import { selectHasRole } from '../redux-store/authenticationSlice';


import { Link } from 'react-router-dom';
import { URL_PROFIL  } from "../constants/urls/urlFrontEnd";


const HomeView = () => {
    // const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));
    // const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center mt-[25rem]'>
            <p className="font-extrabold text-primary">HOME</p>

            <Link to={URL_PROFIL}><button className='btn-green'>Profil View</button></Link>

            {/* {isAdmin && (
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(URL_ADMIN_HOME)}
                >
                    Admin
                </button>
            )} */}
        </div>
    );
};

export default HomeView;
