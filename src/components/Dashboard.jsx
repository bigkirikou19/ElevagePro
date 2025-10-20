import React from "react";

export const Dashboard = () => {
  return (
    // 🧠 Section Dashboard
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-800">
          Pilotez votre exploitation : Tableau de bord intelligent
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-lg">
          Devenez plus performant. Visualisez vos ventes, achats et marges en temps réel. 
          ElevagePro est votre assistant personnel pour des décisions éclairées.
        </p>

        <div className="p-4 bg-gray-100 rounded-3xl shadow-2xl shadow-green-100">
          <img
            className="mx-auto rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.01]"
            src="/images/Dashboard.webp"
            alt="Dashboard ElevagePro"
          />
        </div>
      </div>
    </section>
  );
};
