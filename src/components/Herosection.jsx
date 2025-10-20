import React from 'react';

export const Herosection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className="md:pr-10">
          <span className="text-amber-600 font-semibold uppercase text-sm tracking-wider mb-2 block">
            ELEVAGE & COMMERCE
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900 drop-shadow-sm">
            Vendre, acheter, progresser. <br />
            <span className="text-green-700">ElevagePro</span>, la plateforme complète.
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed text-xl">
            Gérez toutes vos opérations d'élevage dans une plateforme unique. Nous organisons vos ventes, achats, logistique et paiements de manière intelligente et sécurisée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Sell"
              className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-amber-200 hover:bg-amber-700 transition transform hover:scale-[1.02] text-center"
            >
              Commencer à Vendre
            </a>

            <a
              href="/Buy"
              className="px-8 py-3 bg-green-700 text-white font-semibold rounded-xl shadow-lg shadow-green-200 hover:bg-green-800 transition transform hover:scale-[1.02] text-center"
            >
              Commencer à Acheter
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-first md:order-last">
          <img
            src="/images/boeuf.jpg"
            alt="Interface ElevagePro sur tablette"
            className="rounded-3xl shadow-2xl shadow-gray-400/50 w-full h-[400px] object-cover border-4 border-white transition-transform duration-500 hover:rotate-1 hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};
