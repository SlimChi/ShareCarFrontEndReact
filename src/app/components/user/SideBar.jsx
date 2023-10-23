import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { URL_MODIF_PROFIL } from '../../constants/urls/urlFrontEnd';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-[22rem] bg-blue-200 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
      <button className="relative top-[7rem] right-[1.5rem] text-white" onClick={toggleSidebar}>
        |||
      </button>

      <ul className="p-8 mt-[1rem] flex flex-col justify-evenly h-full">
      {/* {({ active }) => ( */}
        <Link to={URL_MODIF_PROFIL}
          >
          <li className='bg-[#114076] text-white h-[3.5rem] flex justify-center items-center'>Modifier le profil</li>
        </Link>
        
        <Link>
          <li className='bg-[#114076] text-white h-[3.5rem] flex justify-center items-center'>Supprimer le compte</li>
        </Link>

        <Link>
        <li className='bg-[#114076] text-white h-[3.5rem] flex justify-center items-center'>Gérer mes points</li>
        </Link>
        
        <Link>
        <li className='bg-[#114076] text-white h-[3.5rem] flex justify-center items-center'>Modifier le mot de passe</li>
        </Link>
        
        <Link>
        <li className='bg-[#114076] text-white h-[3.5rem] flex justify-center items-center'>Avis</li>
        </Link>
        
        <Link>
        <li className='bg-[#114076] text-white h-[4rem] flex justify-center items-center'>Historique des voyages</li>
        </Link>
        
        <Link>
        <li className='bg-[#114076] text-white h-[4rem] flex justify-center items-center'>Mes véhicules</li>
        </Link>
                      {/* )} */}
      </ul>
    </div>
  );
};

export default Sidebar;
