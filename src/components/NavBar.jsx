import React, { useState } from "react";
import { Link } from "react-router-dom";
import list from "../utils/routes";

const NavBar = () => {
  

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
 

  return (
    <>
      <nav className=" md:flex justify-between  items-center px-5 md:px-20 py-3 ">
        <div className="">
          <Link to="/" className="text-3xl">
            ShopLIFT
          </Link>
        </div>

        <div className="md:hidden absolute top-5 right-5 ">
          <i
            onClick={handleClick}
            className={` ${click ? "fas fa-times" : "fas fa-bars"}`}
          ></i>
        </div>

        <div>
        <ul
          className={`backdrop-blur-lg h-screen pt-52 md:pt-0 md:h-auto md:flex md:space-x-5 space-y-5 md:space-y-0 left-0 md:left-auto top-[59px] absolute md:static w-full md:w-auto ${
            click ? "block " : "hidden"
          }`}
        >
          {list.map((lists, index) => (
            <li key={index} onClick={handleClick} className={`flex items-center justify-center font-bold font text-xl bg-red`} >
              <Link to={lists.path}>{lists.name}</Link>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
