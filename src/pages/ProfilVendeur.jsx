import React, { useState } from 'react';
import { 
    User, MapPin, Package, ShoppingBag, Truck, DollarSign, 
    BarChart, Settings, CheckCircle, Clock, Heart, LogOut, 
    Home, Star, TrendingUp 
} from 'lucide-react';

// ----------------------------------------------------------------------
// Données du Vendeur (Basé sur Vendeur.json + données simulées d'historique/statistiques)
// ----------------------------------------------------------------------
const vendeur = {
  id: "V003",
  type: "vendeur",
  profil: {
    nom: "DIABATE",
    prenom: "Ismael",
    email: "Diabateismael@gmail.com",
    telephone: "+225 07 88 77 66 55",
    dateInscription: "2024-10-20",
    verification: {
      statut: "en_attente", // Peut être 'vérifié', 'en_attente', 'rejeté'
      dateVerification: null,
      documentsVerifies: []
    }
  },
  exploitation: {
    nom: "Élevage Diabaté Avicole",
    adresse: {
      ville: "Daloa",
      commune: "Daloa",
      quartier: "Maroc",
      pays: "Côte d'Ivoire"
    },
    typeElevage: ["Poulet", "Dinde"],
    nombreAnimaux: 500,
    superficie: "2 hectares",
    certifications: ["Agriculture biologique (en cours)"]
  },
  produits: [
    {
      id: "P004",
      nom: "Poulet de chair",
      categorie: "Volailles",
      prixUnitaireMoyen: 3500,
      stockDisponible: 150,
      description: "Poulets élevés en plein air, nourris aux grains locaux."
    },
    {
        id: "P005",
        nom: "Dinde",
        categorie: "Volailles",
        prixUnitaireMoyen: 15000,
        stockDisponible: 50,
        description: "Dindes fermières pour les fêtes de fin d'année."
    }
  ],
  statistiques: {
    ventesTotales: 15, 
    chiffreAffaires: 525000, 
    noteMoyenne: 4.5, 
    nombreAvis: 8, 
    tauxReponse: 95, 
    delaiReponse: "2 heures" 
  },
  ventes: [ 
    {
      id: "VEN001",
      date: "2024-10-15",
      montant: 85000,
      acheteur: "A012 (Hamed M.)",
      produitsVendues: "Lot de 20 poulets",
      statut: "livré"
    },
    {
      id: "VEN002",
      date: "2024-10-18",
      montant: 45000,
      acheteur: "A030 (Fatou C.)",
      produitsVendues: "Lot de 10 dindes",
      statut: "en_attente"
    }
  ],
  paiement: {
    methodePrincipale: "Orange Money",
    numeroCompte: "+225 07 88 77 66 55",
    soldeDisponible: 125000,
    enAttente: 45000
  },
  notifications: [],
  parametres: {
    notifications: { email: true, sms: true, push: true },
    confidentialite: { afficherTelephone: true, afficherAdresse: false },
    livraison: {
      proposeLivraison: true,
      zoneLivraison: ["Daloa", "Yamoussoukro"],
      fraisLivraison: 1000
    }
  }
};

// ----------------------------------------------------------------------
// 1. Composant principal ProfilVendeur (MOBILE FIRST)
// ----------------------------------------------------------------------
export default function ProfilVendeur() {
  const [activeTab, setActiveTab] = useState('profil');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profil':
        return <ProfilExploitationTab vendeur={vendeur} />;
      case 'produits':
        return <ProduitsStockTab produits={vendeur.produits} />;
      case 'ventes':
        return <VentesPaiementsTab ventes={vendeur.ventes} paiement={vendeur.paiement} />;
      case 'statistiques':
        return <StatistiquesVendeurTab stats={vendeur.statistiques} />;
      default:
        return <ProfilExploitationTab vendeur={vendeur} />;
    }
  };

  const handleLogout = () => {
    console.log("Déconnexion en cours...");
    // Supprimer les données de session
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('isAuthenticated');
    // Rediriger vers la page d'accueil
    window.location.href = '/Home';
  };

  const verificationStatut = vendeur.profil.verification.statut;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Header (Optimisé pour Mobile) */}
      <div className="bg-gradient-to-r from-orange-600 via-yellow-500 to-red-600 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
              {/* Photo de profil */}
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-105">
                  <User className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600" />
                </div>
                {/* Statut de Vérification */}
                <div 
                    className={`absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-3 border-white flex items-center justify-center font-bold text-xs sm:text-sm 
                        ${verificationStatut === 'vérifié' ? 'bg-green-500' : verificationStatut === 'en_attente' ? 'bg-yellow-500' : 'bg-red-500'}
                    `}
                >
                    {verificationStatut === 'vérifié' ? <CheckCircle className="w-4 h-4 text-white" /> : '...'}
                </div>
              </div>
              {/* Informations textuelles */}
              <div className="text-center md:text-left mt-3 md:mt-0">
                <h1 className="text-xl sm:text-3xl font-bold mb-1 md:mb-2">{vendeur.exploitation.nom}</h1>
                <p className="text-orange-100 flex items-center gap-2 justify-center md:justify-start text-sm sm:text-base">
                  <span>👤</span> {vendeur.profil.prenom} {vendeur.profil.nom}
                </p>
                <p className="text-orange-100 flex items-center gap-2 justify-center md:justify-start text-sm sm:text-base">
                  <span>📱</span> {vendeur.profil.telephone}
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold capitalize">
                  {verificationStatut === 'vérifié' ? '✅ Vendeur vérifié' : `⚠️ Vérification ${verificationStatut.replace('_', ' ')}`}
                </span>
              </div>
            </div>
            {/* BOUTON DE DÉCONNEXION */}
            <button
              onClick={handleLogout}
              className="w-full md:w-auto mt-4 md:mt-0 px-5 py-2 sm:px-6 sm:py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              Se déconnecter
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Optimisé pour Mobile : défilement horizontal) */}
      <div className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
            {[
              { id: 'profil', label: 'Exploitation', icon: MapPin },
              { id: 'produits', label: 'Produits & Stock', icon: Package },
              { id: 'ventes', label: 'Ventes & Paiements', icon: DollarSign },
              { id: 'statistiques', label: 'Performance', icon: BarChart }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 sm:px-6 sm:py-4 border-b-3 transition-all text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'border-orange-600 text-orange-600 font-bold bg-orange-50'
                    : 'border-transparent text-gray-600 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${activeTab === tab.id ? 'scale-110' : ''}`} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="animate-fadeIn">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. Composants des Onglets
// ----------------------------------------------------------------------

function ProfilExploitationTab({ vendeur }) {
    const verificationStatut = vendeur.profil.verification.statut;

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Infos Exploitation */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:col-span-2">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-orange-600" />
                    Détails de l'Exploitation : {vendeur.exploitation.nom}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    <InfoCard title="Type d'élevage" value={vendeur.exploitation.typeElevage.join(', ')} icon="🐔" />
                    <InfoCard title="Nombre d'animaux" value={vendeur.exploitation.nombreAnimaux.toLocaleString()} icon="🔢" />
                    <InfoCard title="Superficie" value={vendeur.exploitation.superficie} icon="📐" />
                    <InfoCard title="Ville" value={vendeur.exploitation.adresse.ville} icon="🏙️" />
                </div>
                <div className="mt-4 sm:mt-6">
                    <p className="text-sm text-gray-500 mb-1">Certification(s)</p>
                    <div className="flex flex-wrap gap-2">
                        {vendeur.exploitation.certifications.map((cert, index) => (
                            <span key={index} className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                {cert}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Infos Personnelles */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-orange-600" />
                    Propriétaire & Contact
                </h2>
                <div className="space-y-3">
                    <div><p className="text-sm text-gray-500">Nom complet</p><p className="font-semibold">{vendeur.profil.prenom} {vendeur.profil.nom}</p></div>
                    <div><p className="text-sm text-gray-500">Email</p><p className="font-semibold">{vendeur.profil.email}</p></div>
                    <div><p className="text-sm text-gray-500">Téléphone</p><p className="font-semibold">{vendeur.profil.telephone}</p></div>
                    <div><p className="text-sm text-gray-500">Inscrit depuis</p><p className="font-semibold">{vendeur.profil.dateInscription}</p></div>
                </div>
            </div>

            {/* Statut de Vérification */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600" />
                    Statut de Vérification
                </h2>
                <div className={`p-4 rounded-xl shadow-inner ${verificationStatut === 'vérifié' ? 'bg-green-50' : 'bg-yellow-50'}`}>
                    <div className="flex items-center gap-3">
                        {verificationStatut === 'vérifié' ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                            <Clock className="w-6 h-6 text-yellow-600" />
                        )}
                        <p className="font-bold capitalize text-sm sm:text-base">Statut: <span className={`${verificationStatut === 'vérifié' ? 'text-green-600' : 'text-yellow-600'}`}>{verificationStatut.replace('_', ' ')}</span></p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                        {verificationStatut === 'en_attente' ? "Veuillez soumettre vos documents pour finaliser la vérification de votre compte." : "Votre compte est entièrement vérifié."}
                    </p>
                </div>
            </div>
            
            {/* Paramètres de Livraison */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:col-span-2">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Truck className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-600" />
                    Paramètres de Livraison
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                        <p className="text-sm text-green-600 font-semibold">Propose Livraison</p>
                        <p className="font-bold text-gray-800 text-lg">{vendeur.parametres.livraison.proposeLivraison ? 'Oui' : 'Non'}</p>
                    </div>
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-xl sm:col-span-2">
                        <p className="text-sm text-blue-600 font-semibold">Zones Desservies</p>
                        <p className="font-bold text-gray-800 text-sm sm:text-base">{vendeur.parametres.livraison.zoneLivraison.join(', ')}</p>
                    </div>
                    <div className="bg-purple-50 p-3 sm:p-4 rounded-xl">
                        <p className="text-sm text-purple-600 font-semibold">Frais de base</p>
                        <p className="font-bold text-gray-800 text-lg">{vendeur.parametres.livraison.fraisLivraison.toLocaleString()} FCFA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProduitsStockTab({ produits }) {
    const getAnimalIcon = (nom) => {
        if (nom.toLowerCase().includes('poulet')) return '🐔';
        if (nom.toLowerCase().includes('dinde')) return '🦃';
        return '📦';
    };

    return (
        <div className="space-y-6">
            {/* Cartes de résumé de stock */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <InfoCard title="Total Produits" value={produits.length} icon="📝" />
                <InfoCard 
                    title="Stock Total (unités)" 
                    value={produits.reduce((sum, p) => sum + p.stockDisponible, 0).toLocaleString()} 
                    icon="📦" 
                    bgClass="bg-gradient-to-br from-green-500 to-green-600"
                />
                <InfoCard title="Volailles" value={produits.filter(p => p.categorie === 'Volailles').length} icon="🐔" />
                <InfoCard title="Prix moyen" value={`${Math.round(produits.reduce((sum, p) => sum + p.prixUnitaireMoyen, 0) / produits.length).toLocaleString()} FCFA`} icon="💰" />
            </div>

            {/* Liste des produits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {produits.map((produit) => (
                    <div key={produit.id} className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.03] transition-all">
                        <div className="relative h-40 sm:h-48 bg-gradient-to-br from-yellow-100 to-orange-100 overflow-hidden flex items-center justify-center">
                            <span className="text-6xl sm:text-8xl opacity-70">{getAnimalIcon(produit.nom)}</span>
                        </div>
                        <div className="p-4 sm:p-6">
                            <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-800 flex items-center gap-2">
                                {getAnimalIcon(produit.nom)} {produit.nom}
                            </h3>
                            <div className="flex items-center justify-between mb-4 border-b pb-3">
                                <div>
                                    <p className="text-2xl sm:text-3xl font-bold text-orange-600">{produit.prixUnitaireMoyen.toLocaleString()}</p>
                                    <p className="text-xs sm:text-sm text-gray-500">FCFA / unité</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl sm:text-2xl font-bold text-green-600">{produit.stockDisponible}</p>
                                    <p className="text-sm text-gray-500">en stock</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                {produit.description || "Aucune description fournie pour le moment."}
                            </p>
                            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg flex items-center justify-center gap-2">
                                <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                                Gérer le stock
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function VentesPaiementsTab({ ventes, paiement }) {
    const getStatutColor = (statut) => {
        switch (statut) {
            case 'livré': return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
            case 'en_attente': return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white';
            default: return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Infos Paiement & Solde */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                        Solde Disponible
                    </h2>
                    <p className="text-4xl sm:text-5xl font-bold mb-1">{paiement.soldeDisponible.toLocaleString()}</p>
                    <p className="text-sm text-green-100 mb-4">FCFA</p>
                    
                    <div className="flex justify-between border-t border-white/30 pt-3">
                        <p className="text-sm text-white/80">En attente</p>
                        <p className="font-bold text-lg">{paiement.enAttente.toLocaleString()} FCFA</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-orange-600" />
                        Méthode de Paiement
                    </h2>
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-sm text-gray-500">Méthode principale</p>
                        <p className="font-semibold text-lg">{paiement.methodePrincipale}</p>
                        <p className="text-sm text-gray-600">{paiement.numeroCompte}</p>
                    </div>
                </div>
            </div>

            {/* Historique des Ventes */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-red-600" />
                    Historique des Ventes Récentes
                </h2>
                <div className="space-y-4">
                    {ventes.map((vente) => (
                        <div key={vente.id} className="p-4 sm:p-5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-gray-800 text-sm sm:text-base">Vente #{vente.id}</h3>
                                <span className={`px-3 py-1 rounded-full font-bold text-xs ${getStatutColor(vente.statut)}`}>
                                    {vente.statut.toUpperCase()}
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                                <div className="text-sm">
                                    <p className="text-gray-600">{vente.produitsVendues}</p>
                                    <p className="text-xs text-gray-500">Acheteur: {vente.acheteur}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-xl text-orange-600">{vente.montant.toLocaleString()}</p>
                                    <p className="text-xs text-gray-500">Le {vente.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {ventes.length === 0 && (
                        <p className="text-center text-gray-500 py-4">Aucune vente enregistrée pour le moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

function StatistiquesVendeurTab({ stats }) {
    const getRatingStars = (note) => {
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(note) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        );
    };
    
    return (
        <div className="space-y-6">
            {/* Cartes statistiques principales */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StatCard 
                    title="Chiffre d'Affaires" 
                    value={`${Math.floor(stats.chiffreAffaires / 1000)}k FCFA`} 
                    icon="💰" 
                    bgClass="from-green-500 to-green-600"
                />
                <StatCard 
                    title="Ventes Totales" 
                    value={stats.ventesTotales} 
                    icon="🛒" 
                    bgClass="from-blue-500 to-blue-600"
                />
                <StatCard 
                    title="Note Moyenne" 
                    value={`${stats.noteMoyenne}/5`} 
                    icon="⭐" 
                    bgClass="from-yellow-500 to-orange-500"
                    footer={getRatingStars(stats.noteMoyenne)}
                />
                <StatCard 
                    title="Taux de Réponse" 
                    value={`${stats.tauxReponse}%`}
                    icon="💬" 
                    bgClass="from-purple-500 to-red-500"
                />
            </div>

            {/* Détails de performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        Métriques de Service
                    </h3>
                    <div className="space-y-4">
                        <MetricItem title="Nombre d'avis" value={stats.nombreAvis} description="Total d'évaluations clients." />
                        <MetricItem title="Délai de Réponse" value={stats.delaiReponse} description="Temps moyen pour répondre aux messages." />
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        Objectifs & Progrès (Simulé)
                    </h3>
                    <ProgressItem title="Objectif CA mensuel" target={800000} current={stats.chiffreAffaires} />
                    <ProgressItem title="Objectif Ventes" target={30} current={stats.ventesTotales} />
                </div>
            </div>
        </div>
    );
}

// ----------------------------------------------------------------------
// 3. Composants utilitaires
// ----------------------------------------------------------------------

const InfoCard = ({ title, value, icon, bgClass = 'bg-white' }) => (
    <div className={`rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 text-center ${bgClass.includes('bg-') ? bgClass + ' text-white' : 'bg-white text-gray-800'}`}>
        <p className="text-xl sm:text-2xl font-bold mb-1">{icon} {value}</p>
        <p className={`text-xs sm:text-sm font-semibold ${bgClass.includes('bg-') ? 'text-white/80' : 'text-gray-500'}`}>{title}</p>
    </div>
);

const StatCard = ({ title, value, icon, bgClass, footer }) => (
    <div className={`bg-gradient-to-br ${bgClass} text-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6`}>
        <div className="flex items-center justify-between mb-4">
            <span className="text-xl sm:text-3xl">{icon}</span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">...</span>
            </div>
        </div>
        <p className="text-xs sm:text-sm text-white/80">{title}</p>
        <p className="text-2xl sm:text-3xl font-bold mt-1">{value}</p>
        {footer && <div className="mt-2 text-sm">{footer}</div>}
    </div>
);

const MetricItem = ({ title, value, description }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
        <div>
            <p className="font-semibold text-sm sm:text-base text-gray-800">{title}</p>
            <p className="text-xs text-gray-500">{description}</p>
        </div>
        <p className="font-bold text-lg text-orange-600">{value}</p>
    </div>
);

const ProgressItem = ({ title, target, current }) => {
    const percentage = Math.min(100, (current / target) * 100);
    return (
        <div className="py-2">
            <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-sm sm:text-base text-gray-800">{title}</p>
                <p className="text-sm font-bold text-orange-600">{percentage.toFixed(1)}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Atteint: {current.toLocaleString()} / {target.toLocaleString()}</p>
        </div>
    );
};
