import React from "react";
import PropTypes from "prop-types";

export const Logomoney = () => {
  return (
    // 💳 Section Paiement (Amélioration visuelle)
    <section className="bg-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-800">
            Transactions 100% Sécurisées
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Payez et recevez vos fonds par la méthode la plus fiable et la plus courante dans votre région.
          </p>
        </div>

        {/* Logos Mobile Money */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">
            Partenaires Mobile Money
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "MTN MONEY", image: "/images/MTN.jpeg" },
              { label: "Moov Money", image: "/images/Moov.png" },
              { label: "Orange Money", image: "/images/Orange.png" },
              { label: "Wave", image: "/images/WAVE.jpeg" },
            ].map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-3">
                  <img
                    src={service.image}
                    alt={service.label}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <span className="text-xs font-bold text-gray-700 tracking-wider">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Logos Bancaires */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">
            Intégrations Bancaires & Cartes
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-6 text-white shadow-xl flex justify-between items-center hover:scale-[1.02] transition">
              <h4 className="text-2xl font-bold">Djamo / VISA</h4>
              <div className="text-right">
                <p className="text-xs opacity-70">Supporté</p>
                <span className="text-3xl">💳</span>
              </div>
            </div>

            <div className="bg-green-700 rounded-2xl p-6 text-white shadow-xl flex justify-between items-center hover:scale-[1.02] transition">
              <h4 className="text-2xl font-bold">Push / Mastercard</h4>
              <div className="text-right">
                <p className="text-xs opacity-70">Supporté</p>
                <span className="text-3xl">💳</span>
              </div>
            </div>
          </div>
        </div>

        {/* Texte de bas de section */}
        <p className="text-center text-gray-600 mt-12 max-w-3xl mx-auto text-base">
          Nous supportons toutes les grandes méthodes de paiement en Afrique de l'Ouest : Orange Money, MTN, Moov, Wave et les cartes bancaires internationales via nos partenaires.
        </p>
      </div>
    </section>
  );
};