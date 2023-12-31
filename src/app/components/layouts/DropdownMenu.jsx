import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsLogged, signOut } from '../../redux-store/authenticationSlice';

import { URL_LOGIN, URL_REGISTER,URL_PROFIL, URL_MESSAGES } from '../../constants/urls/urlFrontEnd';  // Supprimez URL_REGISTER de cette importation

import { PiUserSquareLight } from "react-icons/pi";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownMenu() {
  const isAuthenticated = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOut());
    
    // Redirigez l'utilisateur vers la page de connexion après la déconnexion
    navigate(URL_REGISTER); 
  };

  return (
    <>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-[#114076]  ">
          <PiUserSquareLight className="text-[#57B526] text-5xl cursor-pointer"/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          {isAuthenticated ? (  
            <div>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={URL_PROFIL}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900 hover:text-[#57B526]' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Profil               
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={URL_MESSAGES}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900 hover:text-[#57B526]' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Messagerie               
                    </Link>
                  )}
                </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  
                  <Link
                    to="#"
                    onClick={handleLogout}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 hover:text-[#57B526]' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Se déconnecter                   
                  </Link>
                )}
              </Menu.Item>
              </div>
              
            ) : (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={URL_REGISTER}  // Vous pouvez conserver ce lien vers l'inscription
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 hover:text-[#57B526]' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Inscription
                  </Link>
                )}
              </Menu.Item>
            )}
            {!isAuthenticated && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={URL_LOGIN}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 hover:text-[#57B526]' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Connexion
                  </Link>
                )}
              </Menu.Item>
            )}
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </>
  )
}
