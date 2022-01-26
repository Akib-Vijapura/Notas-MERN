import React from "react";
import aboutImg from "../images/about.svg";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div
        id="about"
        className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={aboutImg}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Why Notas ?
          </h1>
          <p className="mb-8 leading-relaxed">
            There are many app for notes taking but we can provide you seamless
            experience. with notas you can take notes or documentetion with
            real-time experience. we can build notas with smart technologies.
            And we can Also provide some new featurs inbuild like Reminder ,
            KANBAN , Sticky Notes , FlowChart And many more with clear UI .
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
