import React from "react";
import Logo from "../assets/logo.png";
const Nav = () => {
  return (
    <nav className=" bg-green-500 ">
      <div className="flex justify-between container mx-auto">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedule</li>
          <li>
            <button>Coin</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
