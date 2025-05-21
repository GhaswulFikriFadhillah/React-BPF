import React from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

export default function NavBar() {
  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 z-50 w-full bg-[#F2FAFD] px-8 py-4 flex justify-between items-center"
    >
      {/* Logo */}
      <div id="navbar-logo" className="flex items-center space-x-2">
        <h1
          className="text-4xl font-Jost-bold"
        >
          <span className="text-black">Se</span>
          <span className="text-green-500">dap</span>
          <span className="text-black">.</span>
        </h1>
      </div>

      {/* Navigation Menu */}
      <div
        id="navbar-menu"
        className="flex items-center space-x-6 text-[16px] font-Jost-regular"
      >
        <NavLink to="/guest" className="text-black hover:text-green-500">
          Home
        </NavLink>
        <NavLink to="/about" className="text-black hover:text-green-500">
          About
        </NavLink>
        <NavLink to="/top-produk" className="text-black hover:text-green-500">
          Top Produk
        </NavLink>
        <NavLink to="/testimoni" className="text-black hover:text-green-500">
          Testimoni
        </NavLink>
        <NavLink to="/cek-member" className="text-black hover:text-green-500">
          Member
        </NavLink>
      </div>

      {/* Right Icons */}
      <div id="navbar-auth" className="flex items-center space-x-3">
        <button className="w-10 h-10 rounded-full bg-[#E6EFF4] flex items-center justify-center">
          <FiSearch className="text-black text-lg" />
        </button>
        <div className="relative">
          <button className="w-10 h-10 rounded-full bg-[#E6EFF4] flex items-center justify-center">
            <FiShoppingCart className="text-black text-lg" />
          </button>
          <span className="absolute -top-1 -right-1 w-5 h-5 text-[10px] bg-green-500 text-white rounded-full flex items-center justify-center">
            2
          </span>
        </div>
      </div>
    </div>
  );
}
