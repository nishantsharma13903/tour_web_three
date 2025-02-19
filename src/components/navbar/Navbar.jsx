import React, { useEffect, useState } from "react";
import Logo from "../../assets/media/logo.png"
import { useLocation } from "react-router-dom";
import { CiCircleQuestion } from "react-icons/ci";

export const Navbar = () => {

  const [bgWhite, setBgWhite] = useState(false);
  const location = useLocation(); // Get current pathname

  useEffect(() => {
    // If not on '/home', set bgWhite to true by default
    if (location.pathname !== "/home") {
      setBgWhite(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 580) {
        setBgWhite(true);
      } else {
        setBgWhite(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className={`w-full fixed top-0 z-10 ${bgWhite ? "bg-white border-b" : "bg-transparent"}`}>
      <div className="container mx-auto md:px-4 px-3 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="" />
          {/* <span className="text-[#ff4141] text-xl font-bold">TOURist</span> */}
        </div>

        {/* Search Box */}
        {/* <div className="flex-grow max-w-md mx-4 hidden sm:flex">
          <input
            type="text"
            placeholder="Search for experiences and cities"
            className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring focus:border-blue-400 placeholder:text-sm"
          />
          <button className="px-4 py-2 bg-gray-100 border rounded-r-lg">
            <i className="fa fa-search"></i>
          </button>
        </div> */}

        {/* Actions */}
        <div className={`flex items-center space-x-4 ${bgWhite ? "text-gray-600" : "text-white"} text-sm`}>
          <div className="flex items-center space-x-1 md:text-sm text-xs mr-3">
            <span>English / INR</span>
            <span>|</span>
            <span className="flex items-center">
            <CiCircleQuestion />
              <span className="ml-1">Help</span>
            </span>
          </div>
          <button className="bg-white text-gray-800 px-4 py-1 rounded-lg border border-gray-300 hover:shadow md:text-xs text-xs hidden md:block">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};
