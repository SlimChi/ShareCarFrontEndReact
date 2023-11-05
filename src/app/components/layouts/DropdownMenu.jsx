import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { PiUserSquareLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { URL_LOGIN, URL_REGISTER } from '../../constants/urls/urlFrontEnd';
import { useState, useEffect } from 'react';
import { removeToken, getToken } from "../../services/tokenServices";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownMenu() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    // Vérifiez si le token est présent dans le stockage local pour déterminer l'état de connexion
    const token = getToken();
    setIsUserLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    setLoggingOut(true);

    // Supprimez le token du local storage
    removeToken();

    // Attendez un court délai avant de mettre à jour l'état de connexion et de rediriger
    setTimeout(() => {
      setIsUserLoggedIn(false);
      window.location.href = URL_LOGIN;
    }, 200);
  };

  return (
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
            {isUserLoggedIn ? (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="#"
                    onClick={handleLogout}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Déconnexion
                  </Link>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={URL_REGISTER}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Inscription
                  </Link>
                )}
              </Menu.Item>
            )}
            {!isUserLoggedIn && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={URL_LOGIN}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
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
  )
}
