import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Placeholder pour les icônes (à remplacer par de vrais composants d'icônes si vous utilisez une librairie)
const IconPlaceholder = ({ icon, className }) => (
  <span className={`text-4xl text-green-600 ${className}`}>
    {/* Remplacer ceci par le composant d'icône réel */}
    {icon}
  </span>
);
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-[Poppins]">
      {/* Header */}
      <Header1/>
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Notre Histoire
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight text-green-900 drop-shadow-sm">
            À propos d’ElevagePro
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            ElevagePro est la plateforme innovante qui révolutionne la gestion des ventes, des achats, et le suivi des performances pour les éleveurs et les professionnels de l'agroalimentaire. Nous simplifions le quotidien pour une efficacité maximale.
          </p>
        </section>

        {/* Notre mission - Inversion de l'ordre pour un meilleur flux visuel */}
        <section className="bg-amber-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2"> {/* Image à droite */}
                <img
                  src="/images/mission.webp"
                  alt="Notre mission"
                  className="rounded-3xl shadow-2xl shadow-amber-200 w-full h-[350px] object-cover transition-transform duration-500 hover:scale-[1.02] border-4 border-white" // Ajout d'une bordure et d'une ombre plus douce
                />
              </div>
              <div className="md:order-1"> {/* Texte à gauche */}
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-green-800">
                  <span className="text-amber-600 mr-2">//</span> Notre Mission
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Notre objectif est de fournir aux éleveurs un écosystème numérique complet. Nous nous engageons à transformer l'élevage en offrant des outils qui permettent de :
                </p>
                <ul className="space-y-3 text-gray-700 text-lg font-medium">
                    <li className="flex items-start">
                        <IconPlaceholder icon="✅" className="mr-3 mt-1 text-green-600 text-2xl"/>
                        <span>Optimiser la gestion et la production.</span>
                    </li>
                    <li className="flex items-start">
                        <IconPlaceholder icon="📈" className="mr-3 mt-1 text-green-600 text-2xl"/>
                        <span>Améliorer significativement les ventes et la rentabilité.</span>
                    </li>
                    <li className="flex items-start">
                        <IconPlaceholder icon="💳" className="mr-3 mt-1 text-green-600 text-2xl"/>
                        <span>Faciliter l’accès aux services financiers spécialisés.</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-green-800">
              Les Piliers d'ElevagePro
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Valeur 1: Innovation */}
              <div className="group bg-gray-50 rounded-3xl p-8 shadow-lg transition duration-300 hover:shadow-xl hover:shadow-green-100 border-b-4 border-green-600 hover:border-amber-600">
                <IconPlaceholder icon="💡" className="mx-auto mb-4 group-hover:text-amber-600 transition" />
                <h3 className="text-xl font-bold mb-3 text-green-700 group-hover:text-green-900">Innovation</h3>
                <p className="text-gray-600 text-base">
                  Nous proposons constamment des solutions modernes et intelligentes basées sur la donnée pour transformer l’efficacité de l'élevage.
                </p>
              </div>
              {/* Valeur 2: Fiabilité */}
              <div className="group bg-gray-50 rounded-3xl p-8 shadow-lg transition duration-300 hover:shadow-xl hover:shadow-green-100 border-b-4 border-green-600 hover:border-amber-600">
                <IconPlaceholder icon="🔒" className="mx-auto mb-4 group-hover:text-amber-600 transition" />
                <h3 className="text-xl font-bold mb-3 text-green-700 group-hover:text-green-900">Fiabilité</h3>
                <p className="text-gray-600 text-base">
                  La sécurité est notre priorité. Vos transactions, données et informations sont sécurisées, fiables et accessibles en toute confiance.
                </p>
              </div>
              {/* Valeur 3: Communauté */}
              <div className="group bg-gray-50 rounded-3xl p-8 shadow-lg transition duration-300 hover:shadow-xl hover:shadow-green-100 border-b-4 border-green-600 hover:border-amber-600">
                <IconPlaceholder icon="🤝" className="mx-auto mb-4 group-hover:text-amber-600 transition" />
                <h3 className="text-xl font-bold mb-3 text-green-700 group-hover:text-green-900">Communauté</h3>
                <p className="text-gray-600 text-base">
                  Nous connectons les professionnels pour favoriser le partage des bonnes pratiques, l'accès aux opportunités et la croissance mutuelle.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}