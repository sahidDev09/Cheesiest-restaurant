import React from "react";

const NavBar = () => {
  return (
    <nav className="shadow-md p-10 sm:p-0">
      <div className=" container mx-auto my-2 sm:flex justify-between items-center">
        <div className=" items-center justify-center mb-2">
          <h1 className="textnavlogo" >cheesy<span>.EAT</span></h1>
        </div>
        <div>
          <ul className="  sm:flex items-center justify-center gap-5 text-lg  cursor-pointer">
            <li className=" hover:border-b-2 border-blue-600 transition-all hover:text-blue-600">
              Home
            </li>
            <li className="hover:border-b-2 border-blue-600 transition-all hover:text-blue-600">
              Pricing
            </li>
            <li className="hover:border-b-2 border-blue-600 transition-all hover:text-blue-600">
              Menu
            </li>
            <li className="hover:border-b-2 border-blue-600 transition-all hover:text-blue-600">
              About us
            </li>
            <li className="hover:border-b-2 border-blue-600 transition-all hover:text-blue-600">
              Location
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
