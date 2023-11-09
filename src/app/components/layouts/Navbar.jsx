import { useContext } from "react";  
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";
import { IconButton } from "@mui/material";
import DarkModeOutlined from "@mui/icons-material/DarkMode";
import LightModeOutlined from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../theme";

import {
  URL_HOME,
  URL_LOGIN,
  URL_REGISTER,
  URL_ADD_TRAVEL
} from "../../constants/urls/urlFrontEnd";

import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const isLoggued = useSelector(selectIsLogged);
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  const handleThemeToggle = () => {
    toggleColorMode();
  };

  return (
    <div className="fixed z-50 mx-auto w-full bg-[#114076] px-4 shadow-sm sm:px-6">
      <div className="flex items-center justify-between md:justify-start md:space-x-10">
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
            <a
              href=""
              className="flex flex-row items-center justify-between w-28 text-[#FFFFFF]"
            >
              Recherche
            </a>
          </div>
          <div className="flex flex-row justify-between ">
            <Link
              to={URL_ADD_TRAVEL}
              className="flex flex-row items-center justify-between w-[10rem] text-[#FFFFFF]"
            >
              Publier un trajet
            </Link>
          </div>
          <div className="ml-10">
            <DropdownMenu />
          </div>

          <div className="ml-10">
            <IconButton onClick={handleThemeToggle} color="inherit">
              {theme.palette.mode === "light" ? (
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              ) : (
                <DarkModeOutlined sx={{ fontSize: "16px", }} />
              )}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
