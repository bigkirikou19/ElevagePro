import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send, // Nouvelle icône pour la newsletter
  Briefcase, // Nouvelle icône pour l'entreprise
} from "lucide-react";

function Footer() {
  return (
    // Utiliser un fond gris très foncé ou noir pour le contraste
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16">
        {/* Bloc 1 - Logo et description (Prend plus de place sur mobile) */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-4xl font-extrabold text-green-500 mb-4 tracking-wider">
            ElevagePro
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            La plateforme leader pour la gestion, le commerce et l'innovation dans l'élevage africain.
            Simplifiez vos opérations.
          </p>
        </div>

        {/* Bloc 2 - Liens rapides */}
        <div>
          <h3 className="text-lg font-bold text-gray-200 mb-4 uppercase tracking-wider">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Accueil", href: "/" },
              { label: "À Propos", href: "/about" },
              { label: "Marketplace", href: "/marketplace" },
              { label: "Blog & Actus", href: "/blog" },
              { label: "Aide / Support", href: "/faq" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-green-500 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc 3 - Information Légale (Nouveau) */}
        <div>
          <h3 className="text-lg font-bold text-gray-200 mb-4 uppercase tracking-wider">
            Entreprise
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Politique de Confidentialité", href: "/PrivacyPolicy" },
              { label: "Conditions Générales de Vente", href: "/cgu" },
              { label: "Nous Rejoindre (Carrières)", href: "/careers" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-green-500 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
             <li className="pt-2">
                <a
                    href="/contact"
                    className="flex items-center gap-2 font-semibold text-green-500 hover:text-green-400 transition"
                >
                    <Briefcase className="w-4 h-4"/>
                    Contact Pro
                </a>
            </li>
          </ul>
        </div>

        {/* Bloc 4 - Contact */}
        <div>
          <h3 className="text-lg font-bold text-gray-200 mb-4 uppercase tracking-wider">
            Contactez-nous
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
              <span>Abidjan, Côte d’Ivoire</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
              <span>+225 01 23 45 67 89</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
              <span>contact@elevagepro.com</span>
            </li>
          </ul>
        </div>
        {/* Bloc 5 - Newsletter & Réseaux sociaux (Prend plus de place sur mobile) */}
        <div className="col-span-2 md:col-span-1">
             <h3 className="text-lg font-bold text-gray-200 mb-4 uppercase tracking-wider">
                Restez Informé
            </h3>
            {/* Newsletter form */}
            <form className="mb-8">
                <p className="text-sm text-gray-400 mb-3">
                    Abonnez-vous à notre newsletter pour les dernières offres et conseils.
                </p>
                <div className="flex">
                    <input
                        type="email"
                        placeholder="Votre email"
                        className="p-3 w-full rounded-l-lg text-white-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        className="p-3 bg-green-700 hover:bg-green-600 rounded-r-lg transition"
                        aria-label="S'abonner à la newsletter"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
      </div>

      {/* Ligne de séparation et Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ElevagePro — Tous droits réservés. | Conçu pour la croissance des éleveurs.
      </div>
    </footer>
  );
}

export default Footer;