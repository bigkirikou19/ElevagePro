import React, { useState } from 'react';
import { ChevronLeft, CheckCircle } from 'lucide-react';

// Données JSON des utilisateurs
const acheteurData = {
  "id": "A012",
  "type": "acheteur",
  "profil": {
    "nom": "Meité",
    "prenom": "Hamed",
    "email": "MeitéHamed20@gmail.com",
    "telephone": "+225 05 98 76 54 32",
    "typeClient": "particulier"
  }
};

const vendeurData = {
  "id": "V003",
  "type": "vendeur",
  "profil": {
    "nom": "DIABATE",
    "prenom": "Ismael",
    "email": "Diabateismael@gmail.com",
    "telephone": "+225 07 88 77 66 55",
    "dateInscription": "2024-10-20"
  }
};

const InputField = React.memo(({ name, type, placeholder, value, onChange, error }) => (
  <div className="mb-5">
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      className={`w-full px-5 py-4 bg-green-100 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-[60px] text-lg ${error ? 'ring-2 ring-red-500' : ''}`}
    />
    {error && <p id={`${name}-error`} className="text-red-500 text-sm mt-2 ml-5">{error}</p>}
  </div>
));

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    telephone: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Le nom d\'utilisateur est requis';
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le numéro de téléphone est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);

      // Vérification des identifiants
      setTimeout(() => {
        let userData = null;
        const username = formData.username.trim();
        const telephone = formData.telephone.trim();
        
        // Vérifier acheteur (nom complet = "Meité Hamed" + téléphone)
        const acheteurFullName = `${acheteurData.profil.nom} ${acheteurData.profil.prenom}`;
        if (telephone === acheteurData.profil.telephone &&
            username.toLowerCase() === acheteurFullName.toLowerCase()) {
          userData = {
            id: acheteurData.id,
            type: acheteurData.type,
            nom: acheteurData.profil.nom,
            prenom: acheteurData.profil.prenom,
            email: acheteurData.profil.email,
            telephone: acheteurData.profil.telephone
          };
        }
        // Vérifier vendeur (nom complet = "DIABATE Ismael" + téléphone)
        const vendeurFullName = `${vendeurData.profil.nom} ${vendeurData.profil.prenom}`;
        if (telephone === vendeurData.profil.telephone &&
            username.toLowerCase() === vendeurFullName.toLowerCase()) {
          userData = {
            id: vendeurData.id,
            type: vendeurData.type,
            nom: vendeurData.profil.nom,
            prenom: vendeurData.profil.prenom,
            email: vendeurData.profil.email,
            telephone: vendeurData.profil.telephone
          };
        }

        if (userData) {
          console.log('--- UTILISATEUR CONNECTÉ (Objet JSON) ---', userData);
          
          // Stocker les données utilisateur en sessionStorage
          sessionStorage.setItem('user', JSON.stringify(userData));
          sessionStorage.setItem('isAuthenticated', 'true');
          
          setAuthenticatedUser(userData);
          setIsSubmitting(false);
          setShowSuccess(true);

          // Redirection vers la page d'accueil après 1.5 seconde
          setTimeout(() => {
            window.location.href = '/Home';
          }, 1500);
        } else {
          setIsSubmitting(false);
          setErrors({ 
            username: 'Identifiants incorrects',
            telephone: 'Vérifiez votre nom et numéro de téléphone' 
          });
        }
      }, 1000);
    }
  };

  if (showSuccess && authenticatedUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="bg-white p-12 w-full max-w-lg shadow-xl rounded-[60px] text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Connexion réussie !</h2>
          <p className="text-lg text-gray-600">
            Bienvenue {authenticatedUser.nom} {authenticatedUser.prenom}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {authenticatedUser.type === 'acheteur' ? '🛒 Compte Acheteur' : '🏪 Compte Vendeur'}
          </p>
          <p className="text-sm text-gray-500 mt-4">Redirection vers l'accueil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 py-8">
      <div className="bg-white p-12 w-full max-w-lg shadow-xl rounded-[60px] relative">

        {/* En-tête */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-700">LOGO</h2>
          <button
            onClick={handleGoBack}
            className="hover:bg-gray-100 p-2 rounded-full transition duration-200"
            title="Retour"
            aria-label="Retour à la page précédente"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Titre */}
        <div className="flex flex-col items-center justify-center mb-10">
          <span className="text-4xl mb-3">👤</span>
          <h1 className="text-3xl font-semibold text-gray-800">Se connecter</h1>
        </div>

        <div>
          <InputField
            name="username"
            type="text"
            placeholder="Nom d'utilisateur (Nom ou Prénom)"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />
          
          <InputField
            name="telephone"
            type="tel"
            placeholder="Numéro de téléphone"
            value={formData.telephone}
            onChange={handleChange}
            error={errors.telephone}
          />

          {/* Bouton Valider */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full bg-green-500 text-white font-bold py-4 text-xl rounded-[60px] hover:bg-green-600 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Connexion en cours...' : 'Valider'}
          </button>
        </div>

        {/* Données de test */}
        <div className="mt-8 p-6 bg-green-100 border border-green-300 rounded-3xl">
          <p className="text-base text-gray-800 font-bold mb-3 flex items-center">
            💡 Comptes de test :
          </p>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 mb-1">🛒 Acheteur</p>
              <p className="text-xs text-gray-600">Nom: <span className="font-mono bg-green-200 px-2 py-0.5 rounded">{acheteurData.profil.nom} {acheteurData.profil.prenom} </span></p>
              <p className="text-xs text-gray-600 mt-1">Tél: <span className="font-mono bg-green-200 px-2 py-0.5 rounded">{acheteurData.profil.telephone}</span></p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 mb-1">🏪 Vendeur</p>
              <p className="text-xs text-gray-600">Nom: <span className="font-mono bg-green-200 px-2 py-0.5 rounded">{vendeurData.profil.nom} {vendeurData.profil.prenom}</span></p>
              <p className="text-xs text-gray-600 mt-1">Tél: <span className="font-mono bg-green-200 px-2 py-0.5 rounded">{vendeurData.profil.telephone}</span></p>
            </div>
          </div>
        </div>

        {/* Lien vers l'inscription */}
        <p className="mt-8 text-center text-base text-gray-600">
          Si vous n'avez pas de compte{" "}
          <a href="/Select" className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Inscrivez-vous
          </a>.
        </p>
      </div>
    </div>
  );
}

export default Login;