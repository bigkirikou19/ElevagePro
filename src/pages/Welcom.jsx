import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Welcom() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/images/beau.jpg')` }}
      />

      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
          Avec <span className="text-green-300">ElevagePro</span>, tout commence par un clic
        </h1>
        <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg shadow-green-200 hover:bg-green-700 transition transform hover:scale-[1.02] duration-300">
           <a href="/Home">Commencer</a>
        </button>
      </div>
    </div>
  );
}

export default Welcom;
