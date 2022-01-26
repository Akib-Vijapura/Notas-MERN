import React from "react";
import { Link } from "react-router-dom";
import helloImg from "../images/hello.svg";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div
        id="home"
        className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Build your best ideas <br className="hidden lg:inline-block" />
            together, in Notas
          </h1>
          <p className="mb-8 leading-relaxed">
            Create your own notes and documentetion in real-time , And Access
            Any Where . you can try our other freaturs , for more information
            you can visit our featurs section.
          </p>
          <div className="flex justify-center">
            <a href="register.html">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link to="/register">Register For Free</Link>
              </button>
            </a>
            <a href="login.html">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link to="/login">Login</Link>
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={helloImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
