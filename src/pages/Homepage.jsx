import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Herosection } from "../components/Herosection";
import { Logomoney } from "../components/logomoney";
import { Dashboard } from "../components/Dashboard";

// Composant pour les icônes de fonctionnalités
const FeatureIcon = ({ children }) => (
  <div className="p-3 bg-green-100 rounded-xl text-green-700 w-fit mb-4 mx-auto md:mx-0">
    {children}
  </div>
);

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-[Poppins]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 🟢 Hero Section */}
        <Herosection />

        {/* ✨ Section Fonctionnalités */}
        <section className="bg-amber-50 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4 text-green-800">
                    Comment ElevagePro vous simplifie la vie
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
                    Trois fonctions essentielles pour une gestion moderne et rentable de votre exploitation.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Fonction 1 : Vendre et Gérer */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg transition hover:shadow-xl border-t-4 border-green-700">
                        <FeatureIcon>🛒</FeatureIcon>
                        <h3 className="text-xl font-bold mb-3 text-green-800">Ventes Faciles</h3>
                        <p className="text-gray-600">
                            Créez vos annonces en quelques clics, gérez les stocks, et connectez-vous directement aux acheteurs professionnels.
                        </p>
                    </div>

                    {/* Fonction 2 : Acheter et S'approvisionner */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg transition hover:shadow-xl border-t-4 border-amber-600">
                        <FeatureIcon>📦</FeatureIcon>
                        <h3 className="text-xl font-bold mb-3 text-green-800">Achats Sécurisés</h3>
                        <p className="text-gray-600">
                            Accédez à un catalogue de produits et équipements certifiés. Transactions garanties avec un paiement sécurisé.
                        </p>
                    </div>

                    {/* Fonction 3 : Analyser et Optimiser */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg transition hover:shadow-xl border-t-4 border-green-700">
                        <FeatureIcon>📊</FeatureIcon>
                        <h3 className="text-xl font-bold mb-3 text-green-800">Analyse de Performance</h3>
                        <p className="text-gray-600">
                            Suivez vos indicateurs clés (ventes, dépenses, marges) grâce à notre tableau de bord intuitif en temps réel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Dashboard />
        {/* Logo Money Section */}
        <Logomoney />

        {/* 🐄 Section Produits */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-800">
              Notre Marketplace : Produits Frais et Certifiés
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              Découvrez les dernières offres de nos producteurs certifiés. Qualité et traçabilité garanties.
            </p>
            {/* Cartes de Produits */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lot de Poulets de Chair",
                  img: "/images/poulet.jpg",
                  desc: "Des poulets élevés naturellement, sans antibiotiques, prêts à la vente en gros ou en détail.",
                  price: "45 000 FCFA / 15 Poulets",
                  tag: "Viande",
                },
                {
                  title: "Cartons d'Œufs Frais",
                  img: "/images/oeufs.webp",
                  desc: "Des œufs riches et nutritifs provenant d'élevages respectant les meilleures pratiques.",
                  price: "30 000 FCFA / 11 cartons",
                  tag: "Produit Laitier",
                },
                {
                  title: "Bidons de Lait Pur",
                  img: "/images/lait.jpg",
                  desc: "Un lait pur et frais, directement issu de nos producteurs locaux certifiés.",
                  price: "20 000 FCFA / 5 Bidons",
                  tag: "Produit Laitier",
                },
              ].map((product, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden text-left border-t-4 border-amber-600"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-100 px-3 py-1 rounded-full mb-2 inline-block">
                        {product.tag}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-green-800">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                    <p className="text-2xl font-extrabold text-gray-900 mb-4">{product.price}</p>
                    <button className="w-full px-5 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition">
                      Acheter maintenant
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 px-8 py-3 bg-white text-green-700 border-2 border-green-700 font-semibold rounded-xl hover:bg-green-50 transition">
                Voir toutes les offres
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}