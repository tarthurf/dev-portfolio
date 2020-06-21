import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="flex flex-col mx-3 p-6">
      <p className="py-2 text-xl text-left font-bold text-custom-orange">
        Hey there, my name is
      </p>
      <p className="py-2 text-5xl text-left font-semibold text-custom-lavender">
        Tyler Arthur
      </p>
      <p className="py-2 w-full text-4xl text-center font-medium text-custom-blue">
        I like to build apps for the web
      </p>
      <p className="py-2 self-start text-lg text-right font-medium text-custom-orange">
        I am a full-stack web developer based in sunny San Diego, CA and I enjoy building eye-catching websites with elegance and simplicity in mind.
      </p>
      <div className="self-center flex space-x-4 py-4 ">
        <Link to="/about-me">
          <button className="flex-grow flex-shrink p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Let's get started!
          </button>
        </Link>
        <Link to="/contact">
          <button className="flex-wrap flex-shrink p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Contact Me!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;