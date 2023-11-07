import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../redux-store/authenticationSlice';
import { URL_HOME, URL_PROFIL } from '../constants/urls/urlFrontEnd';

const HomeView = () => {
    const isAuthenticated = useSelector(selectIsLogged);

    if (!isAuthenticated) {
        // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion.
        return <Navigate to="/login" />;
    }

    return (

        <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-dark-100 dark:bg-gray-200 transition-all duration-300 border-none z-10 sidebar">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    <li className="px-5 hidden md:block">
                        <div className="flex flex-row items-center h-8"></div>
                    </li>
                    <li>
                        <Link to={URL_HOME} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-500 rounded-md dark:hover-bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">HOME</span>
                        </Link>
                    </li>
 
                    <li>
                        <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-500 rounded-md  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                            <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                        </a>
                    </li>

                    <li>
                        <Link to={URL_PROFIL} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-500 rounded-md dark:hover-bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Profil</span>
                        </Link>
                    </li>

                    
                </ul>
            </div>
        </div>
    );
};

export default HomeView;
