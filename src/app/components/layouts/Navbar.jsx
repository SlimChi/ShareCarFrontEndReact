import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";
import {
  URL_HOME,
  URL_LOGIN,
  URL_REGISTER,
} from "../../constants/urls/urlFrontEnd";

import DropdownMenu from "./DropdownMenu";


import { FiSearch } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiUserSquareLight } from "react-icons/pi";
import { CiDark } from "react-icons/ci";

const Navbar = () => {
  const isLoggued = useSelector(selectIsLogged);

  return (
    <div className="absolute mx-auto w-full bg-[#114076] px-4 shadow-sm sm:px-6">
      <div className="flex items-center justify-between  md:justify-start md:space-x-10">
        <div className="flex flex-row ">
          <Link to={URL_HOME}>
            <img
              className="h-20 w-auto cursor-pointer sm:h-20"
              src="../../../../src/Images/Logo_ShareCar.png"
              alt=""
              width={200}
              height={60}
            />
          </Link>
          <h1 className="text-[#FFFFFF] text-3xl font-semibold flex items-center">SHARECAR</h1>
        </div>

        <div className="flex flex-1 items-center justify-end lg:w-0">
          <div className="flex flex-row justify-between w-[10rem]">
            <a href="" className="flex flex-row items-center justify-between w-28 text-[#FFFFFF]"><FiSearch className="text-[#57B526] text-2xl"/>Recherche</a>
          </div>
          <div className="flex flex-row justify-between ">
            <a href="" className="flex flex-row items-center justify-between w-[10rem] text-[#FFFFFF]"><IoIosAddCircleOutline className="text-[#57B526] text-3xl"/>Publier un trajet</a>
          </div>
          <div className="ml-10">
            {/* <button><PiUserSquareLight className="text-[#57B526] text-5xl cursor-pointer"/></button> */}
            <DropdownMenu/>
          </div>
          <div className="ml-10">
            <button><CiDark className="text-[#57B526] text-3xl cursor-pointer"/></button>
          </div>
          
        </div>

        {/* <div className="flex flex-1 items-center justify-end lg:w-0">
          <div className="flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            {isLoggued ? (
              <button className="btn btn-red">Sign Out</button>
            ) : (
              <>
                <Link to={URL_LOGIN}>
                  <div className="link">Sign in</div>
                </Link>
                <Link to={URL_REGISTER}>
                  <button className="btn btn-green">Sign up</button>
                </Link>{" "}
              </>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
