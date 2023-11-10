import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import {
  URL_MODIF_PROFIL,
  URL_DELETE_PROFIL,
  URL_MODIF_PASSWORD,
  URL_VEHICLES,
} from '../../constants/urls/urlFrontEnd';

import { CgProfile } from 'react-icons/cg';
import { MdOutlineDelete } from 'react-icons/md';
import { SiManageiq } from 'react-icons/si';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GiNotebook } from 'react-icons/gi';
import { BsCarFront } from 'react-icons/bs';
import { MdOutlineModeOfTravel } from 'react-icons/md';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed z-30 inset-y-0 right-6 w-[22rem] bg-gradient-to-t from-[#114076] via-blue-300 to-[#114076] transform ${
        isOpen ? 'translate-x-6' : 'translate-x-full'
      } transition-transform ease-in-out duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="relative top-[7rem] text-[#57B526] " onClick={toggleSidebar}>
        {isOpen ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
      </button>

      <ul className="p-8 mt-[1rem] flex flex-col justify-evenly items-start ml-8 h-full">

        <Link to={URL_MODIF_PROFIL}>
          <li className=' text-white h-[3.5rem] flex justify-center items-center hover:text-[#57B526]'>
            <CgProfile className='text-[26px] mr-4' />
            Modifier le profil</li>
        </Link>

        <Link to={URL_DELETE_PROFIL}>
          <li className='text-white h-[3.5rem] flex justify-center items-center hover:text-[#57B526]'>
            <MdOutlineDelete className='text-[26px] mr-4' />
            Supprimer le compte</li>
        </Link>

        <Link >
          <li className='text-white h-[3.5rem] flex justify-center items-center hover:text-[#57B526]'>
            <SiManageiq className='text-[26px] mr-4' />
            Gérer mes points</li>
        </Link>

        <Link to={URL_MODIF_PASSWORD}>
          <li className='text-white h-[3.5rem] flex justify-center items-center hover:text-[#57B526]'>
            <RiLockPasswordLine className='text-[26px] mr-4' />
            Modifier le mot de passe</li>
        </Link>

        <Link>
          <li className='text-white h-[3.5rem] flex justify-center items-center hover:text-[#57B526]'>
            <GiNotebook className='text-[26px] mr-4' />
            Avis</li>
        </Link>

        <Link>
          <li className='text-white h-[4rem] flex justify-center items-center hover:text-[#57B526]'>
            <MdOutlineModeOfTravel className='text-[26px] mr-4' />
            Historique des voyages</li>
        </Link>

        <Link to={URL_VEHICLES}>
          <li className='text-white h-[4rem] flex justify-center items-center hover:text-[#57B526]'>
            <BsCarFront className='text-[26px] mr-4' />
            Mes véhicules</li>
        </Link>

      </ul>
    </div>
  );
};

export default Sidebar;