import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Lucide Icons pour les symboles clairs
import {  ShieldCheck,User,CreditCard,MessageSquare,Globe,Trash2,Percent,} from "lucide-react";
const IconItem = ({ Icon, title }) => (
  <div className="flex items-center text-green-700 mb-2 font-semibold">
    {Icon && <Icon className="w-5 h-5 mr-3 flex-shrink-0" />}
    {title}
  </div>
);

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-[Poppins]">
      <Header />

      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          {/* Titre et Date de Publication */}
          <div className="text-center mb-12">
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-green-700" />
            <h1 className="text-4xl font-extrabold mb-3 text-green-900">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-500 text-sm">
              Dernière mise à jour : 10 Octobre {currentYear}
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed border-l-4 border-amber-600 pl-4 bg-white p-4 shadow-sm rounded-lg">
            Bienvenue sur ElevagePro ! Votre confiance est notre priorité. Cette politique explique quelles données nous collectons, comment nous les utilisons, et comment nous les protégeons.
          </p>

          {/* Section 1: Quelles données nous collectons */}
          <h2 className="text-2xl font-bold text-green-800 mt-10 mb-4 flex items-center">
            <User className="w-6 h-6 mr-2 text-amber-600" />
            1. Les informations que nous collectons
          </h2>
          <p className="mb-4 text-gray-700">
            Nous collectons uniquement les informations nécessaires pour vous fournir nos services d'élevage, de vente et d'achat.
          </p>

          <ul className="space-y-4 ml-6 list-none">
            <li>
              <IconItem Icon={User} title="Informations de Profil" />
              <p className="text-gray-600 ml-8 text-base">
                Éléments : Nom, Prénom, Email, Numéro de téléphone, Adresse de votre ferme.
                <br />
                Objectif : Créer et sécuriser votre compte éleveur/acheteur.
              </p>
            </li>
            {/* MISE À JOUR IMPORTANTE ICI : Frais et Transaction */}
            <li>
              <IconItem Icon={CreditCard} title="Informations de Paiement & Transactions" />
              <p className="text-gray-600 ml-8 text-base">
                Éléments : Détails des produits (bétail, équipements), montants des ventes et achats.
                <br />
                Objectif : Gérer les transactions sur notre Marketplace et assurer le versement des fonds sur vos comptes Mobile Money ou bancaires.
              </p>
            </li>

            {/* NOUVELLE SECTION CLAIRE SUR LE PRÉLÈVEMENT */}
            <li className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-600">
              <IconItem Icon={Percent} title="Frais de Service et Transport (Prélèvement)" />
              <p className="text-gray-700 ml-8 text-base font-semibold">
                Éléments : Le montant de votre transaction.
                <br />
                Objectif : Lors de chaque vente, un prélèvement de 10% sera effectué sur le montant total de la transaction. Ce prélèvement couvre nos frais de service, logistique et le transport sécurisé des produits.
              </p>
            </li>
            {/* FIN DE LA NOUVELLE SECTION */}

            <li>
              <IconItem Icon={MessageSquare} title="Données d'Utilisation" />
              <p className="text-gray-600 ml-8 text-base">
                Éléments : Activité sur l'application (pages visitées, temps passé), préférences.
                <br />
                Objectif : Améliorer l'application, corriger les bugs et optimiser votre expérience.
              </p>
            </li>
          </ul>

          <div className="mt-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
            <p className="text-sm text-green-800 font-semibold">
              NOTE IMPORTANTE : Nous ne vendons ni ne louons vos données personnelles à des tiers.
            </p>
          </div>

          {/* Section 2: Comment nous utilisons vos données */}
          <h2 className="text-2xl font-bold text-green-800 mt-10 mb-4 flex items-center">
            <Globe className="w-6 h-6 mr-2 text-amber-600" />
            2. Comment nous utilisons les données
          </h2>
          <p className="mb-4 text-gray-700">
            Vos informations servent à faire fonctionner ElevagePro efficacement :
          </p>
          <ul className="list-disc space-y-2 ml-8 text-gray-700">
            <li>Pour valider votre identité et gérer votre compte.</li>
            <li>Pour connecter les vendeurs et les acheteurs (Marketplace).</li>
            <li>Pour vous envoyer des notifications importantes sur vos commandes ou le marché.</li>
            <li>Pour personnaliser les conseils et les offres qui vous sont les plus utiles.</li>
            <li>Pour la sécurité et la prévention des fraudes.</li>
          </ul>

          {/* Section 3: Vos droits */}
          <h2 className="text-2xl font-bold text-green-800 mt-10 mb-4 flex items-center">
            <Trash2 className="w-6 h-6 mr-2 text-amber-600" />
            3. Vos droits et Comment nous contacter
          </h2>
          <p className="mb-4 text-gray-700">
            Vous avez le contrôle total sur vos informations :
          </p>
          <ul className="list-disc space-y-2 ml-8 text-gray-700">
            <li>Droit d'accès :Demander une copie des données que nous détenons sur vous.</li>
            <li>Droit de rectification : Demander la correction de toute information incorrecte.</li>
            <li>Droit à l'oubli :Demander la suppression de vos données personnelles (sous certaines conditions légales).</li>
          </ul>

          <div className="mt-6 p-5 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-lg text-green-700 mb-2">
                Pour exercer vos droits ou poser une question :
            </h3>
            <p className="text-gray-700">
                Email : elevagepro@gmail.com
                <br />
                Adresse : Service Confidentialité, Abidjan, Côte d’Ivoire
            </p>
          </div>

          {/* Conclusion */}
          <p className="mt-12 text-center text-sm text-gray-500">
            Nous nous réservons le droit de modifier cette Politique. Nous vous informerons de tout changement majeur. En continuant d'utiliser ElevagePro, vous acceptez cette politique.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}