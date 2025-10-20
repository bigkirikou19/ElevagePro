import React, { useState } from 'react';
import { User, MapPin, ShoppingBag, Heart, Bell, Settings, Package, CreditCard, Star, TrendingUp, LogOut, Home } from 'lucide-react';
// Importation des autres composants (ProfilTab, CommandesTab, FavorisTab, StatistiquesTab) non modifiée pour la déconnexion

// ----------------------------------------------------------------------
// Composant principal ProfilAcheteur (MODIFIÉ)
// ----------------------------------------------------------------------
export default function ProfilAcheteur() {
  const [activeTab, setActiveTab] = useState('profil');
  const [isLoggedOut, setIsLoggedOut] = useState(false); // NOUVEL ÉTAT pour la déconnexion

  // ... (Les données 'acheteur' restent inchangées)
  // Données directement intégrées
  const acheteur = {
    id: "A012",
    type: "acheteur",
    profil: {
      nom: "Meité",
      prenom: "Hamed",
      email: "MeitéHamed20@gmail.com",
      telephone: "+225 05 98 76 54 32",
      typeClient: "particulier"
    },
    adresse: {
      principale: {
        ville: "Abidjan",
        commune: "Cocody",
        quartier: "Riviera 3",
        rue: "Boulevard Latrille",
        pays: "Côte d'Ivoire"
      },
      livraison: {
        ville: "Abidjan",
        commune: "Cocody",
        quartier: "Riviera 3",
        complementAdresse: "Face à la pharmacie du coin",
        telephone: "+225 05 98 76 54 32"
      }
    },
    commandes: [
      {
        id: "CMD001",
        vendeur: {
          id: "V001",
          nom: "Ferme Kouassi & Fils"
        },
        produits: [
          {
            id: "P002",
            nom: "Lot de 15 poulets de chair",
            quantite: 1,
            prixUnitaire: 45000,
            total: 45000
          }
        ],
        montantTotal: 45000,
        fraisLivraison: 5000,
        montantFinal: 50000,
        statut: "en_cours",
        dateCommande: "2024-10-18",
        dateLivraisonPrevue: "2024-10-20",
        methodePaiement: "Orange Money",
        adresseLivraison: "Riviera 3, Face à la pharmacie",
        tracking: {
          etapes: [
            {
              statut: "commande_validee",
              date: "2024-10-18 10:30",
              description: "Commande confirmée par le vendeur"
            },
            {
              statut: "preparation",
              date: "2024-10-18 14:00",
              description: "Préparation de votre commande"
            }
          ]
        }
      },
      {
        id: "CMD002",
        vendeur: {
          id: "V015",
          nom: "Élevage Bio Savane"
        },
        produits: [
          {
            id: "P125",
            nom: "Cartons d'œufs frais",
            quantite: 2,
            prixUnitaire: 30000,
            total: 60000
          }
        ],
        montantTotal: 60000,
        fraisLivraison: 3000,
        montantFinal: 63000,
        statut: "livré",
        dateCommande: "2024-10-10",
        dateLivraison: "2024-10-12",
        methodePaiement: "MTN Money",
        adresseLivraison: "Riviera 3, Face à la pharmacie",
        avis: {
          note: 5,
          commentaire: "Excellent service, œufs très frais !",
          date: "2024-10-13"
        }
      }
    ],
    favoris: [
      {
        id: "P001",
        nom: "Bélier reproducteur",
        vendeur: "V001",
        prix: 120000,
        image: "/images/belier1.jpg",
        dateAjout: "2024-10-15"
      },
      {
        id: "P045",
        nom: "Chèvre alpine",
        vendeur: "V008",
        prix: 75000,
        image: "/images/chevre-alpine.jpg",
        dateAjout: "2024-10-12"
      }
    ],
    panier: [
      {
        id: "P078",
        nom: "Poulet fermier",
        vendeur: "V022",
        quantite: 3,
        prixUnitaire: 3500,
        total: 10500,
        image: "/images/poulet-fermier.jpg"
      }
    ],
    paiement: {
      methodePrincipale: "Orange Money",
      numeroCompte: "+225 05 98 76 54 32",
      methodesEnregistrees: [
        {
          type: "Orange Money",
          numero: "+225 05 98 76 54 32",
          defaut: true
        },
        {
          type: "MTN Money",
          numero: "+225 05 11 22 33 44",
          defaut: false
        }
      ]
    },
    historiquePaiements: [
      {
        id: "PAY001",
        commande: "CMD002",
        montant: 63000,
        methode: "MTN Money",
        date: "2024-10-10",
        statut: "reussi"
      },
      {
        id: "PAY002",
        commande: "CMD001",
        montant: 50000,
        methode: "Orange Money",
        date: "2024-10-18",
        statut: "en_attente"
      }
    ],
    statistiques: {
      nombreCommandes: 12,
      montantTotalDepense: 485000,
      commandesMoyenneParMois: 4,
      vendeursFavoris: 3,
      categoriesPreferes: ["Volailles", "Caprins", "Produits laitiers"]
    },
    avisLaisses: [
      {
        commande: "CMD002",
        vendeur: "V015",
        produit: "Cartons d'œufs frais",
        note: 5,
        commentaire: "Excellent service, œufs très frais !",
        date: "2024-10-13"
      }
    ],
    notifications: [
      {
        id: "N101",
        type: "commande_en_preparation",
        message: "Votre commande CMD001 est en préparation",
        date: "2024-10-18",
        lu: false
      },
      {
        id: "N102",
        type: "promotion",
        message: "Promotion sur les poulets fermiers : -20%",
        date: "2024-10-17",
        lu: true
      },
      {
        id: "N103",
        type: "livraison",
        message: "Votre commande CMD002 a été livrée",
        date: "2024-10-12",
        lu: true
      }
    ],
    parametres: {
      notifications: {
        email: true,
        sms: false,
        push: true,
        promotions: true,
        nouveautes: true
      },
      confidentialite: {
        afficherProfil: false,
        partagerHistorique: false
      },
      preferences: {
        langue: "fr",
        devise: "FCFA",
        categoriesFavorites: ["Volailles", "Caprins"]
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profil':
        return <ProfilTab acheteur={acheteur} />;
      case 'commandes':
        return <CommandesTab commandes={acheteur.commandes} />;
      case 'favoris':
        return <FavorisTab favoris={acheteur.favoris} panier={acheteur.panier} />;
      case 'statistiques':
        return <StatistiquesTab stats={acheteur.statistiques} historique={acheteur.historiquePaiements} avis={acheteur.avisLaisses} />;
      default:
        return <ProfilTab acheteur={acheteur} />;
    }
  };

  // NOUVELLE FONCTION DE DÉCONNEXION
  const handleLogout = () => {
    // Dans une application réelle :
    // 1. Appel API de déconnexion
    // 2. Nettoyage du token/session (localStorage.removeItem('token'))
    // 3. Mise à jour du contexte utilisateur (e.g., setAuth(false))
    // 4. Redirection vers la page d'accueil (e.g., navigate('/'))
    
    // Ici, nous simulons la redirection en changeant l'état
    console.log("Déconnexion de l'utilisateur...");
    setIsLoggedOut(true);
  };
  
  // Affichage de la page de déconnexion simulée
  if (isLoggedOut) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center transform scale-100 animate-fadeIn">
          <LogOut className="w-20 h-20 text-red-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Vous êtes déconnecté</h1>
          <p className="text-gray-600 mb-8">
            Merci de votre visite. Votre session a été terminée avec succès.
          </p>
          <a
            href="/" // Lien vers la page d'accueil (à remplacer par navigate('/') dans un routeur)
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <Home className="w-6 h-6" />
            Retourner à l'accueil
          </a>
        </div>
      </div>
    );
  }

  // Rendu normal du profil si l'utilisateur est connecté
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header (MODIFIÉ) */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-105">
                  <User className="w-12 h-12 text-green-600" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{acheteur.profil.prenom} {acheteur.profil.nom}</h1>
                <p className="text-green-100 flex items-center gap-2 justify-center md:justify-start">
                  <span>📧</span> {acheteur.profil.email}
                </p>
                <p className="text-green-100 flex items-center gap-2 justify-center md:justify-start">
                  <span>📱</span> {acheteur.profil.telephone}
                </p>
                <span className="inline-block mt-3 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  🌟 Client {acheteur.profil.typeClient}
                </span>
              </div>
            </div>
            {/* BOUTON DE DÉCONNEXION (AJOUTÉ) */}
            <button
              onClick={handleLogout}
              className="mt-4 md:mt-0 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Se déconnecter
            </button>
            {/* FIN DU BOUTON DE DÉCONNEXION */}
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Reste inchangé) */}
      <div className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {[
              { id: 'profil', label: 'Profil', icon: User },
              { id: 'commandes', label: 'Commandes', icon: ShoppingBag },
              { id: 'favoris', label: 'Favoris & Panier', icon: Heart },
              { id: 'statistiques', label: 'Statistiques', icon: TrendingUp }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 border-b-3 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600 font-bold bg-green-50'
                    : 'border-transparent text-gray-600 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className={`w-5 h-5 transition-transform ${activeTab === tab.id ? 'scale-110' : ''}`} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content avec animation (Reste inchangé) */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-fadeIn">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Les autres composants (ProfilTab, CommandesTab, FavorisTab, StatistiquesTab)
// restent tels quels. Seul le composant FavorisTab d'origine a été remplacé
// par la version plus complète FavorisTab du début du fichier.
// ----------------------------------------------------------------------
// ... (Copier/Coller les fonctions ProfilTab, CommandesTab, FavorisTab, StatistiquesTab ici)
// Les composants FavorisTab, ProfilTab, CommandesTab, StatistiquesTab sont inclus ci-dessous pour former un fichier complet.

// Les composants ProfilTab, CommandesTab, et StatistiquesTab sont inchangés par rapport à la version fournie.
// Le composant FavorisTab a été remplacé par la version complète et fonctionnelle qui gère les favoris ET le panier (celle du début du fichier).

function ProfilTab({ acheteur }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Informations personnelles */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <User className="w-6 h-6 mr-2 text-green-600" />
          Informations personnelles
        </h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500">Nom complet</p>
            <p className="font-semibold">{acheteur.profil.prenom} {acheteur.profil.nom}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold">{acheteur.profil.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Téléphone</p>
            <p className="font-semibold">{acheteur.profil.telephone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Type de client</p>
            <p className="font-semibold capitalize">{acheteur.profil.typeClient}</p>
          </div>
        </div>
      </div>

      {/* Adresse principale */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <MapPin className="w-6 h-6 mr-2 text-green-600" />
          Adresse principale
        </h2>
        <div className="space-y-2">
          <p className="font-semibold">{acheteur.adresse.principale.quartier}</p>
          <p>{acheteur.adresse.principale.rue}</p>
          <p>{acheteur.adresse.principale.commune}, {acheteur.adresse.principale.ville}</p>
          <p className="text-gray-600">{acheteur.adresse.principale.pays}</p>
        </div>
      </div>

      {/* Adresse de livraison */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Package className="w-6 h-6 mr-2 text-green-600" />
          Adresse de livraison
        </h2>
        <div className="space-y-2">
          <p className="font-semibold">{acheteur.adresse.livraison.quartier}</p>
          <p>{acheteur.adresse.livraison.complementAdresse}</p>
          <p>{acheteur.adresse.livraison.commune}, {acheteur.adresse.livraison.ville}</p>
          <p className="text-gray-600">Tél: {acheteur.adresse.livraison.telephone}</p>
        </div>
      </div>

      {/* Méthodes de paiement */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <CreditCard className="w-6 h-6 mr-2 text-green-600" />
          Méthodes de paiement
        </h2>
        <div className="space-y-3">
          {acheteur.paiement.methodesEnregistrees.map((methode, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">{methode.type}</p>
                <p className="text-sm text-gray-600">{methode.numero}</p>
              </div>
              {methode.defaut && (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Par défaut</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Panier actuel */}
      {acheteur.panier.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <ShoppingBag className="w-6 h-6 mr-2 text-green-600" />
            Panier actuel
          </h2>
          <div className="space-y-3">
            {acheteur.panier.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div>
                    <p className="font-semibold">{item.nom}</p>
                    <p className="text-sm text-gray-600">Quantité: {item.quantite}</p>
                  </div>
                </div>
                <p className="font-bold text-green-600">{item.total.toLocaleString()} FCFA</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CommandesTab({ commandes }) {
  const [selectedCommande, setSelectedCommande] = useState(null);

  const getStatutColor = (statut) => {
    switch (statut) {
      case 'livré': return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      case 'en_cours': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'en_preparation': return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const getStatutIcon = (statut) => {
    switch (statut) {
      case 'livré': return '✓';
      case 'en_cours': return '🚚';
      case 'en_preparation': return '📦';
      default: return '•';
    }
  };

  return (
    <div className="space-y-6">
      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm mb-1">Total commandes</p>
              <p className="text-4xl font-bold">{commandes.length}</p>
            </div>
            <ShoppingBag className="w-12 h-12 opacity-50" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm mb-1">Livrées</p>
              <p className="text-4xl font-bold">{commandes.filter(c => c.statut === 'livré').length}</p>
            </div>
            <Package className="w-12 h-12 opacity-50" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm mb-1">En cours</p>
              <p className="text-4xl font-bold">{commandes.filter(c => c.statut === 'en_cours').length}</p>
            </div>
            <TrendingUp className="w-12 h-12 opacity-50" />
          </div>
        </div>
      </div>

      {/* Liste des commandes */}
      {commandes.map((commande) => (
        <div key={commande.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Commande #{commande.id}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <span>🏪</span> {commande.vendeur.nom}
                </p>
              </div>
              <span className={`px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 ${getStatutColor(commande.statut)}`}>
                <span className="text-xl">{getStatutIcon(commande.statut)}</span>
                {commande.statut.replace('_', ' ').toUpperCase()}
              </span>
            </div>
          </div>

          <div className="p-6">
            {/* Produits */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-green-600" />
                Produits commandés
              </h4>
              {commande.produits.map((produit, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-4 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{produit.nom}</p>
                      <p className="text-sm text-gray-600">Quantité: <span className="font-semibold">{produit.quantite}</span> × {produit.prixUnitaire.toLocaleString()} FCFA</p>
                    </div>
                  </div>
                  <p className="font-bold text-xl text-green-600">{produit.total.toLocaleString()} FCFA</p>
                </div>
              ))}
            </div>

            {/* Résumé financier */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 shadow-inner">
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span className="flex items-center gap-2">
                    <span>💰</span> Sous-total
                  </span>
                  <span className="font-bold">{commande.montantTotal.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="flex items-center gap-2">
                    <span>🚚</span> Frais de livraison
                  </span>
                  <span className="font-bold">{commande.fraisLivraison.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t-2 border-gray-300 pt-3 text-green-600">
                  <span className="flex items-center gap-2">
                    <span>✨</span> Total
                  </span>
                  <span>{commande.montantFinal.toLocaleString()} FCFA</span>
                </div>
              </div>
            </div>

            {/* Informations de livraison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-blue-600 font-semibold mb-1">📅 Date de commande</p>
                <p className="font-bold text-gray-800">{commande.dateCommande}</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-sm text-green-600 font-semibold mb-1">🚚 Livraison prévue</p>
                <p className="font-bold text-gray-800">{commande.dateLivraisonPrevue || commande.dateLivraison || 'N/A'}</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-sm text-purple-600 font-semibold mb-1">💳 Paiement</p>
                <p className="font-bold text-gray-800">{commande.methodePaiement}</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-sm text-orange-600 font-semibold mb-1">📍 Adresse</p>
                <p className="font-bold text-gray-800">{commande.adresseLivraison}</p>
              </div>
            </div>

            {/* Avis client */}
            {commande.avis && (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Votre avis
                </h4>
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < commande.avis.note ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="font-bold text-xl ml-2">{commande.avis.note}/5</span>
                </div>
                <p className="text-gray-700 italic">"{commande.avis.commentaire}"</p>
                <p className="text-sm text-gray-500 mt-2">Publié le {commande.avis.date}</p>
              </div>
            )}

            {/* Suivi de commande */}
            {commande.tracking && (
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Suivi de commande
                </h4>
                <div className="space-y-4">
                  {commande.tracking.etapes.map((etape, index) => (
                    <div key={index} className="flex items-start gap-4 relative">
                      {index < commande.tracking.etapes.length - 1 && (
                        <div className="absolute left-[15px] top-[40px] w-0.5 h-12 bg-gradient-to-b from-green-500 to-blue-500"></div>
                      )}
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                        <p className="font-bold text-gray-800 capitalize">{etape.statut.replace('_', ' ')}</p>
                        <p className="text-sm text-gray-600 mt-1">{etape.description}</p>
                        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                          <span>🕐</span> {etape.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Composant FavorisTab COMPLET (celui qui gère à la fois favoris et panier)
function FavorisTab({ favoris, panier }) {
  const [activeSection, setActiveSection] = useState('favoris');

  const getAnimalIcon = (nom) => {
    if (nom.toLowerCase().includes('bélier') || nom.toLowerCase().includes('mouton')) return '🐑';
    if (nom.toLowerCase().includes('chèvre')) return '🐐';
    if (nom.toLowerCase().includes('poulet')) return '🐔';
    if (nom.toLowerCase().includes('vache') || nom.toLowerCase().includes('bœuf')) return '🐄';
    if (nom.toLowerCase().includes('porc') || nom.toLowerCase().includes('cochon')) return '🐷';
    return '🐾';
  };

  const totalPanier = panier.reduce((sum, item) => sum + item.total, 0);

  return (
    <div>
      {/* Sous-navigation */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveSection('favoris')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
            activeSection === 'favoris'
              ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg scale-105'
              : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
          }`}
        >
          <Heart className={`w-5 h-5 ${activeSection === 'favoris' ? 'fill-current' : ''}`} />
          Favoris ({favoris.length})
        </button>
        <button
          onClick={() => setActiveSection('panier')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
            activeSection === 'panier'
              ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg scale-105'
              : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          Panier ({panier.length})
        </button>
      </div>

      {/* Favoris */}
      {activeSection === 'favoris' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoris.map((favori) => (
            <div key={favori.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all group">
              <div className="relative h-56 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-50 group-hover:scale-110 transition-transform">
                    {getAnimalIcon(favori.nom)}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-green-600 transition-colors">{favori.nom}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-3xl font-bold text-green-600">{favori.prix.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">FCFA</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Ajouté le</p>
                    <p className="text-sm font-semibold text-gray-700">{favori.dateAjout}</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Panier */}
      {activeSection === 'panier' && (
        <div className="space-y-6">
          {panier.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-xl">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Votre panier est vide</h3>
              <p className="text-gray-600">Ajoutez des produits depuis vos favoris !</p>
            </div>
          ) : (
            <>
              {panier.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl flex items-center justify-center text-5xl">
                      {getAnimalIcon(item.nom)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-800 mb-2">{item.nom}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <span>💰</span> {item.prixUnitaire.toLocaleString()} FCFA/unité
                        </span>
                        <span className="flex items-center gap-1">
                          <span>📦</span> Quantité: {item.quantite}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-green-600">{item.total.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">FCFA</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-xl font-semibold hover:bg-blue-100 transition-colors">
                      Modifier
                    </button>
                    <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-xl font-semibold hover:bg-red-100 transition-colors">
                      Retirer
                    </button>
                  </div>
                </div>
              ))}

              {/* Résumé du panier */}
              <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Résumé du panier</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-lg">
                    <span className="flex items-center gap-2">
                      <span>📦</span> Total articles ({panier.length})
                    </span>
                    <span className="font-bold">{totalPanier.toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="flex items-center gap-2">
                      <span>🚚</span> Frais de livraison
                    </span>
                    <span className="font-bold">À calculer</span>
                  </div>
                  <div className="border-t-2 border-white/30 pt-4 flex justify-between text-2xl font-bold">
                    <span className="flex items-center gap-2">
                      <span>✨</span> Total estimé
                    </span>
                    <span>{totalPanier.toLocaleString()} FCFA</span>
                  </div>
                </div>
                <button className="w-full bg-white text-green-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl flex items-center justify-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  Procéder au paiement
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function StatistiquesTab({ stats, historique, avis }) {
  const moisLabels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  
  return (
    <div className="space-y-6">
      {/* Cartes statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <ShoppingBag className="w-12 h-12 opacity-80" />
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl font-bold">{stats.nombreCommandes}</span>
            </div>
          </div>
          <p className="text-blue-100 text-sm">Total des commandes</p>
          <p className="text-3xl font-bold mt-1">{stats.nombreCommandes}</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-12 h-12 opacity-80" />
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">💰</span>
            </div>
          </div>
          <p className="text-green-100 text-sm">Total dépensé</p>
          <p className="text-3xl font-bold mt-1">{stats.montantTotalDepense.toLocaleString()}</p>
          <p className="text-green-100 text-sm mt-1">FCFA</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <Star className="w-12 h-12 opacity-80" />
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl font-bold">{stats.commandesMoyenneParMois}</span>
            </div>
          </div>
          <p className="text-purple-100 text-sm">Commandes mensuelles</p>
          <p className="text-3xl font-bold mt-1">{stats.commandesMoyenneParMois}</p>
          <p className="text-purple-100 text-sm mt-1">en moyenne</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <Heart className="w-12 h-12 opacity-80 fill-current" />
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl font-bold">{stats.vendeursFavoris}</span>
            </div>
          </div>
          <p className="text-orange-100 text-sm">Vendeurs favoris</p>
          <p className="text-3xl font-bold mt-1">{stats.vendeursFavoris}</p>
        </div>
      </div>

      {/* Catégories préférées */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="text-3xl">🎯</span>
          Catégories préférées
        </h3>
        <div className="flex flex-wrap gap-4">
          {stats.categoriesPreferes.map((categorie, index) => {
            const colors = [
              'from-pink-500 to-red-500',
              'from-blue-500 to-purple-500',
              'from-green-500 to-teal-500',
              'from-yellow-500 to-orange-500'
            ];
            return (
              <div
                key={index}
                className={`bg-gradient-to-r ${colors[index % colors.length]} text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-110 transition-transform flex items-center gap-3`}
              >
                <span className="text-2xl">
                  {categorie === 'Volailles' ? '🐔' : categorie === 'Caprins' ? '🐐' : '🥛'}
                </span>
                {categorie}
              </div>
            );
          })}
        </div>
      </div>

      {/* Historique des paiements */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <CreditCard className="w-8 h-8 text-green-600" />
          Historique des paiements
        </h3>
        <div className="space-y-4">
          {historique.map((paiement) => (
            <div
              key={paiement.id}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  paiement.statut === 'reussi' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {paiement.statut === 'reussi' ? '✓' : '⏳'}
                </div>
                <div>
                  <p className="font-bold text-gray-800">Commande #{paiement.commande}</p>
                  <p className="text-sm text-gray-600">{paiement.methode}</p>
                  <p className="text-xs text-gray-500">{paiement.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">{paiement.montant.toLocaleString()}</p>
                <p className="text-sm text-gray-500">FCFA</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                  paiement.statut === 'reussi'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {paiement.statut === 'reussi' ? 'Payé' : 'En attente'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Avis laissés */}
      {avis && avis.length > 0 && (
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Star className="w-8 h-8 text-yellow-500 fill-current" />
            Vos avis récents
          </h3>
          <div className="space-y-4">
            {avis.map((avis, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-gray-800 text-lg">{avis.produit}</p>
                    <p className="text-sm text-gray-600">Vendeur: {avis.vendeur}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < avis.note ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-2">"{avis.commentaire}"</p>
                <p className="text-xs text-gray-500">Publié le {avis.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Graphique des dépenses (simulation visuelle) */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          Évolution des dépenses mensuelles
        </h3>
        <div className="flex items-end justify-between h-64 gap-2">
          {moisLabels.slice(0, 10).map((mois, index) => {
            const hauteur = Math.random() * 80 + 20;
            const couleurs = [
              'from-blue-400 to-blue-600',
              'from-green-400 to-green-600',
              'from-purple-400 to-purple-600',
              'from-pink-400 to-pink-600',
              'from-yellow-400 to-yellow-600'
            ];
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full bg-gradient-to-t ${couleurs[index % couleurs.length]} rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer shadow-lg`}
                  style={{ height: `${hauteur}%` }}
                  title={`${mois}: ${Math.floor(Math.random() * 100000).toLocaleString()} FCFA`}
                ></div>
                <p className="text-xs text-gray-600 mt-2 font-semibold">{mois}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 text-center">
            📊 Moyenne mensuelle: <span className="font-bold text-green-600">{Math.floor(stats.montantTotalDepense / 12).toLocaleString()} FCFA</span>
          </p>
        </div>
      </div>
    </div>
  );
}