import React, {useRef} from "react";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

  const searchRef = useRef()
  const handleseatchBtn =() =>{
    searchRef.current.classList.toggle("active")
  }


  return (
    <nav className=" sm:p-0 container mx-auto  ">
      <div className=" border-b-2 container mx-auto sm:flex justify-between items-center fixed z-[1000] bg-white">
        <div className=" items-center justify-center ">
          <h1 className="textnavlogo text-center">
            cheesy<span>.EAT</span>
          </h1>
        </div>
        <div className=" sm:flex">
          <nav className=" flex items-center justify-center gap-5 text-lg  cursor-pointer">
            <a
              className="hover:border-b-2 border-orange-500 transition-all hover:text-orange-500"
              href="#Home">
              Home
            </a>
            <a
              className="hover:border-b-2 border-orange-500 transition-all hover:text-orange-500"
              href="#About">
              About
            </a>
            <a
              className="hover:border-b-2 border-orange-500 transition-all hover:text-orange-500"
              href="#Menu">
              Menu
            </a>
            <a
              className="hover:border-b-2 border-orange-500 transition-all hover:text-orange-500"
              href="#Reviews">
              Reviews
            </a>
            <a
              className="hover:border-b-2 border-orange-500 transition-all hover:text-orange-500"
              href="#Contact">
              Contact
            </a>
          </nav>
        </div>

        <div className=" flex gap-7 items-center justify-center m-4">
          <div onClick={handleseatchBtn} className="icon scale-[1.5]  hover:text-orange-500">
            <FaSearch />
          </div>
          <div className="shopping scale-[1.5] hover:text-orange-500">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          {/* <div className="menu scale-[1.5] hover:text-orange-500"> <FontAwesomeIcon icon={faBars} /> </div> */}
        </div>

        <div className="searchform" ref={searchRef}>
        <input className=" bg-slate-200 rounded-md" type="search" placeholder=" Search here... " id="search-box" />
        <label htmlFor="search-box"></label>
        <button className=" scale-[1.5] text-orange-500"> <FaSearch/> </button>
      </div>

      </div>

      
      
    </nav>
  );
};

export default NavBar;
