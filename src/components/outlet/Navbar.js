import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/p_pVF.png";
import { NavHashLink } from "react-router-hash-link";
import { AuthContext } from "../../context/auth.context";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { logOutUser, isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between py-2 px-2 bg-black ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              <img src={logo} alt="logo" className="w-28 md:w-40" />
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-white w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavHashLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  smooth
                  to="/#bonPlans"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="ml-2">Bons Plans</span>
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  smooth
                  to="/#temoniage"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="ml-2">Témoignages</span>
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/cars"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="ml-2">Catalogue</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/info"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="ml-2">Info</span>
                </NavLink>
              </li>
              {isLoggedIn && 
              <>
              <li className="nav-item">
               <NavLink
                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                 to="/admin/dashboard"
                 onClick={() => setNavbarOpen(!navbarOpen)}
               >
                 <span className="ml-2">Tableau de Bord</span>
               </NavLink>
             </li>
              <li className="nav-item">
                <span onClick={logOutUser}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-2 cursor-pointer">
                  Logout
                </span>
              </li>
              </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
