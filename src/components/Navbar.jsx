import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Navbar = () => {
  
  const colorMode = useContext(ColorModeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("mode", isDarkMode ? "light" : "dark");
    colorMode.toggleColorMode();
  };

  return (
    <header className="  w-full py-1.5 sm:px-7 px-5 flex justify-between items-center bg-gray-200">
      <nav className=" flex items-center w-full screen-max-width px-10">
      
      <img src={appleImg} alt="Apple" width={18} height={18} className="m" />

        
      

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-white hover:text-gray-700 transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
          <div className="flex items-end justify-center">
          <button
            onClick={toggleColorMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-200"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 text-white" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
