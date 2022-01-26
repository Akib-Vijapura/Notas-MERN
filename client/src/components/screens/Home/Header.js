import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/welcome"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={logo} alt="logo" width="100px" />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="#home">
              Overview
            </a>
            <a className="mr-5 hover:text-gray-900" href="#about">
              About
            </a>
            <a className="mr-5 hover:text-gray-900" href="#features">
              Features
            </a>
            <a className="mr-5 hover:text-gray-900" href="#contect">
              Contect Us
            </a>
          </nav>
          <a to="/login">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <Link to="/login">Login</Link>
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
