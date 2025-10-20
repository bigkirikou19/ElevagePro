import React, { useState } from 'react';
import { CheckCircle, ChevronLeft, Store } from 'lucide-react';

function Register1() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    confirmerMotDePasse: '',
    telephone: '',
    lieuElevage: '',
    produitVendu: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Données de test / Exemples de données valides
  const testData = {
    nom: "DIABATE",
    prenom: "Ismael",
    email: "Diabateismael@gmail.com",
    telephone: "+225 07 88 77 66 55",
    motDePasse: "MonPass123",
  };


  // Fonction pour revenir à la page précédente
  const handleGoBack = () => {
    // Dans un environnement de navigation réel, ceci permet de revenir en arrière
    window.history.back();
  };

  // Liste des villes de Côte d'Ivoire
  const villes = [
    "Abidjan", "Abobo", "Adjamé", "Anyama", "Bingerville", "Yopougon", "Grand-Bassam", "Bonoua",
    "Aboisso", "San-Pédro", "Sassandra", "Soubré", "Tabou", "Man", "Danané", "Duékoué", "Guiglo",
    "Odienné", "Korhogo", "Ferkessédougou", "Boundiali", "Bouaké", "Katiola", "Sakassou",
    "Yamoussoukro", "Daloa", "Issia", "Sinfra", "Vavoua", "Zuénoula", "Gagnoa", "Divo", "Oumé",
    "Tiassalé", "Dabou", "Jacqueville", "Agboville", "Akoupé", "Adzopé", "Daoukro", "Dimbokro",
    "Toumodi", "Bongouanou", "Arrah", "Bondoukou", "Bouna", "Tanda", "Séguéla", "Mankono", "Touba"
  ];

  // Liste des types d'animaux vendus (correspond à typeElevage)
  const produits = [
    "Poulet", "Porc", "Bœuf", "Chèvre", "Mouton", "Poisson", "Lapin", "Chien",
    "Canard", "Dinde", "Pintade", "Escargot", "Autres"
  ];

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur du champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    // Validation du nom
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }

    // Validation du prénom
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    // Validation du mot de passe
    if (!formData.motDePasse) {
      newErrors.motDePasse = 'Le mot de passe est requis';
    } else if (formData.motDePasse.length < 6) {
      newErrors.motDePasse = 'Le mot de passe doit contenir au moins 6 caractères';
    }

    // Validation de la confirmation du mot de passe
    if (!formData.confirmerMotDePasse) {
      newErrors.confirmerMotDePasse = 'Veuillez confirmer le mot de passe';
    } else if (formData.motDePasse !== formData.confirmerMotDePasse) {
      newErrors.confirmerMotDePasse = 'Les mots de passe ne correspondent pas';
    }

    // Validation du téléphone (Exemple : +225 07 11 22 33 44)
    const phoneRegex = /^(\+225)?\s?\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le numéro de téléphone est requis';
    } else if (!phoneRegex.test(formData.telephone)) {
      newErrors.telephone = 'Format invalide (Ex: +225 07 11 22 33 44)';
    }

    // Validation du lieu d'élevage
    if (!formData.lieuElevage) {
      newErrors.lieuElevage = 'Veuillez sélectionner un lieu d\'élevage';
    }

    // Validation du produit vendu
    if (!formData.produitVendu) {
      newErrors.produitVendu = 'Veuillez sélectionner un produit vendu';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire (Génération de l'objet Vendeur.json)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      const today = new Date().toISOString().split('T')[0];
      // Note: L'ID est temporaire ici et devrait être généré par le serveur/Firestore
      const tempId = `V${Date.now().toString().slice(-4)}`; 

      // Construction de l'objet Vendeur.json complet
      const nouveauVendeur = {
        id: tempId,
        type: "vendeur",
        profil: {
          nom: formData.nom.toUpperCase(),
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          dateInscription: today,
          verification: {
            statut: "en_attente",
            dateVerification: null,
            documentsVerifies: []
          }
        },
        exploitation: {
          nom: `Ferme ${formData.nom.toUpperCase()} - ${formData.produitVendu}`,
          adresse: {
            ville: formData.lieuElevage, // Champ du formulaire
            commune: "", // A compléter dans une étape ultérieure
            quartier: "", // A compléter dans une étape ultérieure
            pays: "Côte d'Ivoire"
          },
          typeElevage: [formData.produitVendu], // Champ du formulaire (premier produit)
          nombreAnimaux: 0,
          superficie: "",
          certifications: []
        },
        produits: [], // Sera rempli après la création du compte
        statistiques: {
          ventesTotales: 0,
          chiffreAffaires: 0,
          noteMoyenne: 0,
          nombreAvis: 0,
          tauxReponse: 0,
          delaiReponse: "0"
        },
        ventes: [],
        paiement: {
          methodePrincipale: "",
          numeroCompte: formData.telephone, // Utilise le téléphone comme numéro de compte par défaut
          methodesSecondaires: [],
          soldeDisponible: 0,
          enAttente: 0
        },
        notifications: [],
        parametres: {
          notifications: {
            email: true,
            sms: true,
            push: true
          },
          confidentialite: {
            afficherTelephone: true,
            afficherAdresse: false
          },
          livraison: {
            proposeLivraison: false,
            zoneLivraison: [],
            fraisLivraison: 0
          }
        }
      };

      // Simuler l'envoi des données (Remplacez ceci par l'appel API vers Firestore)
      console.log('--- NOUVEAU VENDEUR ENREGISTRÉ (Objet JSON) ---');
      console.log(nouveauVendeur);
      console.log('-----------------------------------------------');

      // Afficher le message de succès
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        // Redirection SIMULÉE vers la page d'accueil (/) après 2 secondes
        setTimeout(() => {
           window.location.href = '/'; 
        }, 2000);
      }, 1000);
    }
  };

  // Message de succès
  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-12 w-full max-w-lg shadow-xl rounded-[60px] text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Inscription réussie !</h2>
          <p className="text-lg text-gray-600">Votre compte vendeur est créé.</p>
          <p className="text-sm text-gray-500 mt-2">Redirection vers l'accueil en cours...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 py-8">
      <div className="bg-white p-12 w-full max-w-lg shadow-xl rounded-[60px] relative">

        {/* En-tête avec logo et flèche de retour */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-700">LOGO</h2>
          <button
            onClick={handleGoBack}
            className="text-gray-600 hover:text-gray-800 transition duration-200"
            title="Retour"
          >
            <ChevronLeft className="h-6 w-6" /> 
          </button>
        </div>

        {/* Titre */}
        <div className="flex flex-col items-center justify-center mb-10">
          {/* L'icône 👤 a été remplacée par Store */}
          <Store className="w-12 h-12 text-green-500 mb-3" />
          <h1 className="text-3xl font-semibold text-gray-800">Inscription Vendeur</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Nom */}
          <div className="mb-5">
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Nom"
              className={`w-full px-5 py-4 bg-green-100 text-gray-800 placeholder-gray-600 
                          focus:outline-none focus:ring-2 focus:ring-green-400 rounded-[60px] text-lg
                          ${errors.nom ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.nom && <p className="text-red-500 text-sm mt-2 ml-5">{errors.nom}</p>}
          </div>

          {/* Prénom */}
          <div className="mb-5">
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Prénom"
              className={`w-full px-5 py-4 bg-green-100 text-gray-800 placeholder-gray-600 
                          focus:outline-none focus:ring-2 focus:ring-green-400 rounded-[60px] text-lg
                          ${errors.prenom ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.prenom && <p className="text-red-500 text-sm mt-2 ml-5">{errors.prenom}</p>}
          </div>

          {/* Email */}
          <div className="mb-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-5 py-4 bg-green-100 text-gray-800 placeholder-gray-600 
                          focus:outline-none focus:ring-2 focus:ring-green-400 rounded-[60px] text-lg
                          ${errors.email ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2 ml-5">{errors.email}</p>}
          </div>

          {/* Mot de passe */}
          <div className="mb-5">
            <input
              type="password"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              placeholder="Mot de passe"
              className={`w-full px-5 py-4 bg-green-100 text-gray-800 placeholder-gray-600 
                          focus:outline-none focus:ring-2 focus:ring-green-400 rounded-[60px] text-lg
                          ${errors.motDePasse ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.motDePasse && <p className="text-red-500 text-sm mt-2 ml-5">{errors.motDePasse}</p>}
          </div>

          {/* Confirmer mot de passe */}
          <div className="mb-5">
            <input
              type="password"
              name="confirmerMotDePasse"
              value={formData.confirmerMotDePasse}
              onChange={handleChange}
              placeholder="Confirmer mot de passe"
              className={`w-full px-5 py-4 bg-green-100 text-gray-800 placeholder-gray-600 
                          focus:outline-none focus:ring-2 focus:ring-green-400 rounded-[60px] text-lg
                          ${errors.confirmerMotDePasse ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.confirmerMotDePasse && <p className="text-red-500 text-sm mt-2 ml-5">{errors.confirmerMotDePasse}</p>}
          </div>

          {/* Numéro de téléphone */}
          <div className="mb-5">
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Numéro de téléphone (+225 XX XX XX XX XX)"
              className={`w-full px-5 py-4 bg-green-100 text-gray-800 placeholder-gray-600 
                          focus:outline-none focus:ring-2 focus:ring-green-400 rounded-[60px] text-lg
                          ${errors.telephone ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.telephone && <p className="text-red-500 text-sm mt-2 ml-5">{errors.telephone}</p>}
          </div>

          {/* Lieu d'élevage (select) */}
          <div className="relative mb-5">
            <select
              name="lieuElevage"
              value={formData.lieuElevage}
              onChange={handleChange}
              className={`w-full px-5 py-4 pr-10 bg-green-100 text-gray-800 
                          focus:outline-none focus:ring-2 focus:ring-green-400 
                          rounded-[60px] text-lg appearance-none
                          ${errors.lieuElevage ? 'ring-2 ring-red-500' : ''}`}
            >
              <option value="">Lieu d'élevage (Ville)</option>
              {villes.map((ville, index) => (
                <option key={index} value={ville}>{ville}</option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
              ▼
            </span>
            {errors.lieuElevage && <p className="text-red-500 text-sm mt-2 ml-5">{errors.lieuElevage}</p>}
          </div>

          {/* Produit vendu (select) */}
          <div className="relative mb-5">
            <select
              name="produitVendu"
              value={formData.produitVendu}
              onChange={handleChange}
              className={`w-full px-5 py-4 pr-10 bg-green-100 text-gray-800 
                          focus:outline-none focus:ring-2 focus:ring-green-400 
                          rounded-[60px] text-lg appearance-none
                          ${errors.produitVendu ? 'ring-2 ring-red-500' : ''}`}
            >
              <option value="">Produit vendu (Type d'animal)</option>
              {produits.map((produit, index) => (
                <option key={index} value={produit}>{produit}</option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
              ▼
            </span>
            {errors.produitVendu && <p className="text-red-500 text-sm mt-2 ml-5">{errors.produitVendu}</p>}
          </div>

          {/* Bouton Valider */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-green-500 text-white font-bold py-4 text-xl rounded-[60px] 
                        hover:bg-green-600 transition duration-300
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Inscription en cours...' : 'Valider'}
          </button>
        </form>
        
        {/* --- Aide pour le test (Maintenant en vert) --- */}
        <div className="mt-8 p-6 bg-green-50 border border-green-300 rounded-3xl"> 
          <p className="text-base text-green-800 font-bold mb-3 flex items-center">
            💡 Données de test (Valides pour le JSON) :
          </p>
          <ul className="text-sm text-gray-700 space-y-1.5 pl-4">
            <li className='flex justify-between border-b border-green-200 pb-1'>
              <span className='font-semibold'>Nom/Prénom:</span>
              <span className="font-mono bg-green-200 px-2 py-0.5 rounded text-gray-900">{testData.nom} {testData.prenom}</span>
            </li>
            <li className='flex justify-between border-b border-green-200 pb-1'>
              <span className='font-semibold'>Email:</span>
              <span className="font-mono bg-green-200 px-2 py-0.5 rounded text-gray-900">{testData.email}</span>
            </li>
            <li className='flex justify-between border-b border-green-200 pb-1'>
              <span className='font-semibold'>Téléphone:</span>
              <span className="font-mono bg-green-200 px-2 py-0.5 rounded text-gray-900">{testData.telephone}</span>
            </li>
            <li>
              <span className='font-semibold'>Mot de passe:</span>
              <span className="font-mono"> {testData.motDePasse}</span> (6+ caractères)
            </li>
            <li className='mt-2 text-xs text-gray-600'>
              **Note:** Choisir n'importe quelle option dans les listes déroulantes pour valider le formulaire.
            </li>
          </ul>
        </div>
        {/* --- Fin Aide pour le test --- */}


        {/* Lien vers la connexion */}
        <p className="mt-8 text-center text-base text-gray-600">
          Si vous avez déjà un compte{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            <a href="/Login">Connectez vous</a>
          </span>.
        </p>
      </div>
    </div>
  );
}
export default Register1;
