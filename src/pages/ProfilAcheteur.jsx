import React, { useState } from 'react';
import { User, LogOut, Home, MapPin, CreditCard, ShoppingBag, Package, Star, TrendingUp, Heart, Bell, Settings, Phone, Mail, Award, Calendar, DollarSign } from 'lucide-react';
import Acheteur from '../database/Acheteur.json';
// Composant ProfilTab amélioré
function ProfilTab({ acheteur }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Informations personnelles */}
        <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <User className="w-7 h-7 text-green-600" />
            Informations personnelles
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
              <User className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-500">Nom complet</p>
                <p className="font-bold text-gray-800">{acheteur.profil.prenom} {acheteur.profil.nom}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
              <Mail className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-bold text-gray-800">{acheteur.profil.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
              <Phone className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-xs text-gray-500">Téléphone</p>
                <p className="font-bold text-gray-800">{acheteur.profil.telephone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl">
              <Award className="w-5 h-5 text-yellow-600" />
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Type:</span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold capitalize">
                  {acheteur.profil.typeClient}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Adresse principale */}
        <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin className="w-7 h-7 text-green-600" />
            Adresse principale
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
              <p className="font-bold text-lg">{acheteur.adresse.principale.quartier}</p>
              <p className="text-gray-600">{acheteur.adresse.principale.rue}</p>
              <p className="text-gray-600">{acheteur.adresse.principale.commune}, {acheteur.adresse.principale.ville}</p>
              <p className="text-gray-500 mt-2 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {acheteur.adresse.principale.pays}
              </p>
            </div>
          </div>
        </div>

        {/* Adresse de livraison */}
        <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Package className="w-7 h-7 text-green-600" />
            Adresse de livraison
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
              <p className="font-bold text-lg">{acheteur.adresse.livraison.quartier}</p>
              <p className="text-gray-600">{acheteur.adresse.livraison.complementAdresse}</p>
              <p className="text-gray-600">{acheteur.adresse.livraison.commune}, {acheteur.adresse.livraison.ville}</p>
              <p className="text-gray-500 mt-2 flex items-center gap-1">
                <Phone className="w-4 h-4" /> {acheteur.adresse.livraison.telephone}
              </p>
            </div>
          </div>
        </div>

        {/* Méthodes de paiement */}
        <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CreditCard className="w-7 h-7 text-green-600" />
            Méthodes de paiement
          </h2>
          <div className="space-y-3">
            {acheteur.paiement.methodesEnregistrees.map((methode, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-bold text-gray-800">{methode.type}</p>
                    <p className="text-sm text-gray-600">{methode.numero}</p>
                  </div>
                </div>
                {methode.defaut && (
                  <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full font-bold">
                    Par défaut
                  </span>
                )}
              </div>
            ))}
          </div>
          <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-blue-600 transition-all shadow-lg">
            + Ajouter une méthode
          </button>
        </div>
      </div>

      {/* Panier actuel */}
      {acheteur.panier.length > 0 && (
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ShoppingBag className="w-7 h-7 text-green-600" />
            Panier actuel ({acheteur.panier.length} articles)
          </h2>
          <div className="space-y-3">
            {acheteur.panier.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-xl flex items-center justify-center text-3xl">
                    🐔
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{item.nom}</p>
                    <p className="text-sm text-gray-600">Quantité: <span className="font-semibold">{item.quantite}</span></p>
                  </div>
                </div>
                <p className="font-bold text-xl text-green-600">{item.total.toLocaleString()} FCFA</p>
              </div>
            ))}
            <div className="mt-4 p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold">
                  {acheteur.panier.reduce((sum, item) => sum + item.total, 0).toLocaleString()} FCFA
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Composant CommandesTab
function CommandesTab({ commandes }) {
  const getStatutColor = (statut) => {
    switch (statut) {
      case 'livré': return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      case 'en_cours': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      default: return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
          <ShoppingBag className="w-10 h-10 mb-3 opacity-80" />
          <p className="text-blue-100 text-sm">Total commandes</p>
          <p className="text-4xl font-bold">{commandes.length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
          <Package className="w-10 h-10 mb-3 opacity-80" />
          <p className="text-green-100 text-sm">Livrées</p>
          <p className="text-4xl font-bold">{commandes.filter(c => c.statut === 'livré').length}</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
          <TrendingUp className="w-10 h-10 mb-3 opacity-80" />
          <p className="text-yellow-100 text-sm">En cours</p>
          <p className="text-4xl font-bold">{commandes.filter(c => c.statut === 'en_cours').length}</p>
        </div>
      </div>

      {/* Liste des commandes */}
      {commandes.map((commande) => (
        <div key={commande.id} className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-all">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Commande #{commande.id}</h3>
              <p className="text-gray-600">🏪 {commande.vendeur.nom}</p>
            </div>
            <span className={`px-6 py-3 rounded-full font-bold shadow-lg ${getStatutColor(commande.statut)}`}>
              {commande.statut.toUpperCase()}
            </span>
          </div>

          <div className="space-y-3 mb-4">
            {commande.produits.map((produit, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl">
                <p className="font-bold text-gray-800">{produit.nom}</p>
                <p className="text-sm text-gray-600">Quantité: {produit.quantite} × {produit.prixUnitaire.toLocaleString()} FCFA</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
            <div className="flex justify-between text-lg font-bold text-green-600">
              <span>Total:</span>
              <span>{commande.montantFinal.toLocaleString()} FCFA</span>
            </div>
          </div>

          {commande.avis && (
            <div className="mt-4 p-4 bg-yellow-50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < commande.avis.note ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-700 italic">"{commande.avis.commentaire}"</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Composant FavorisTab
function FavorisTab({ favoris, panier }) {
  const [activeSection, setActiveSection] = useState('favoris');

  return (
    <div>
      <div className="flex gap-4 mb-6">
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

      {activeSection === 'favoris' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoris.map((favori) => (
            <div key={favori.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all">
              <div className="h-48 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 flex items-center justify-center text-6xl">
                🐑
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{favori.nom}</h3>
                <p className="text-3xl font-bold text-green-600 mb-3">{favori.prix.toLocaleString()} FCFA</p>
                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-blue-600 transition-all">
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {panier.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl">{item.nom}</h3>
                  <p className="text-gray-600">Quantité: {item.quantite}</p>
                </div>
                <p className="text-2xl font-bold text-green-600">{item.total.toLocaleString()} FCFA</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Composant StatistiquesTab
function StatistiquesTab({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
        <ShoppingBag className="w-12 h-12 mb-4 opacity-80" />
        <p className="text-blue-100 mb-2">Commandes</p>
        <p className="text-5xl font-bold">{stats.nombreCommandes}</p>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
        <DollarSign className="w-12 h-12 mb-4 opacity-80" />
        <p className="text-green-100 mb-2">Total dépensé</p>
        <p className="text-5xl font-bold">{stats.montantTotalDepense.toLocaleString()}</p>
        <p className="text-sm text-green-100 mt-2">FCFA</p>
      </div>
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
        <TrendingUp className="w-12 h-12 mb-4 opacity-80" />
        <p className="text-purple-100 mb-2">Moyenne/mois</p>
        <p className="text-5xl font-bold">{stats.commandesMoyenneParMois}</p>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-6 lg:col-span-3">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Catégories préférées</h3>
        <div className="flex flex-wrap gap-3">
          {stats.categoriesPreferes.map((cat, index) => (
            <span key={index} className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Composant principal
export default function ProfilAcheteur() {
  const [activeTab, setActiveTab] = useState('profil');
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const acheteur = Acheteur;

  const handleLogout = () => {
    console.log("Déconnexion en cours...");
    // Supprimer les données de session
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('isAuthenticated');
    
    // Afficher brièvement l'écran de déconnexion
    setIsLoggedOut(true);
    
    // Rediriger vers la page d'accueil après 2 secondes
    setTimeout(() => {
      window.location.href = '/Home';
    }, 2000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profil': return <ProfilTab acheteur={acheteur} />;
      case 'commandes': return <CommandesTab commandes={acheteur.commandes} />;
      case 'favoris': return <FavorisTab favoris={acheteur.favoris} panier={acheteur.panier} />;
      case 'statistiques': return <StatistiquesTab stats={acheteur.statistiques} />;
      default: return <ProfilTab acheteur={acheteur} />;
    }
  };

  if (isLoggedOut) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md transform hover:scale-105 transition-transform">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <LogOut className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold mb-3 text-gray-800">Déconnexion en cours...</h1>
          <p className="text-gray-600 mb-6">Vous allez être redirigé vers l'accueil</p>
          <div className="flex justify-center mb-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-green-600"></div>
          </div>
          <p className="text-sm text-gray-500">À bientôt sur notre plateforme ! 👋</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <User className="w-12 h-12 text-green-600" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold">{acheteur.profil.prenom} {acheteur.profil.nom}</h1>
                <p className="text-green-100 mt-1">📧 {acheteur.profil.email}</p>
                <span className="inline-block mt-2 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  🌟 Client {acheteur.profil.typeClient}
                </span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl flex items-center gap-2 shadow-xl transform hover:scale-105 transition-all"
            >
              <LogOut className="w-5 h-5" />
              Se déconnecter
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-fadeIn">
          {renderTabContent()}
        </div>
      </div>

      {/* Notifications Badge (optionnel) */}
      {acheteur.notifications.filter(n => !n.lu).length > 0 && (
        <div className="fixed bottom-8 right-8 z-50">
          <button className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold">
              {acheteur.notifications.filter(n => !n.lu).length}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
