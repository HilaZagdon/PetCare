import React from 'react';
import { NavLink } from '@remix-run/react';
import dogLogo from '../assets/doglogo.png';

function MainNavigation() {
  return (
    <nav className="bg-[#ffffff] p-2 font-Poetsen" >
      <div className="container mx-auto flex items-center justify-between">
        <img src={dogLogo} alt="Dog Logo" className="h-10 w-auto " />
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold py-2 px-10  rounded-3xl bg-[#9DDE8B]"
                  : "text-black hover:bg-[#628b56] hover:text-black py-2 px-10 rounded-3xl"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Clients"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold  py-2 px-8 rounded-3xl bg-[#9DDE8B]"
                  : "text-black hover:bg-[#628b56] hover:text-black py-2 px-8 rounded-3xl"
              }
            >
              Clients
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
