import React, { useState } from 'react';
import { ChevronLeft, CheckCircle } from 'lucide-react';
const LOGIN_PAGE_PATH = '/Login';

// Composant d'entrée générique
const InputField = React.memo(({ name, type, placeholder, value, onChange, error }) => (
  <div className="mb-5">
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      // Accessibilité et gestion des erreurs
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      className={`w-full px-5 py-4 bg-green-100 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-[60px] text-lg ${error ? 'ring-2 ring-red-500' : ''}`}
    />
    {error && <p id={`${name}-error`} className="text-red-500 text-sm mt-2 ml-5">{error}</p>}
  </div>
));

function Register2() {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', email: '', motDePasse: '', confirmerMotDePasse: '', telephone: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Données de test (pour faciliter l'essai du formulaire)
  const testData = { nom: "Meité", prenom: "Hamed", email: "MeiteHamed20@client.com", telephone: "+225 05 98 76 54 32", motDePasse: "ClientPass123" };

  const handleGoBack = () => { window.history.back(); };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // La regex de téléphone a été conservée, mais un format plus flexible pourrait être préférable en production.
    const phoneRegex = /^(\+225)?\s?\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/; 

    // Nom & Prénom
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';

    // Email
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Format d\'email invalide';

    // Mot de passe
    if (!formData.motDePasse) newErrors.motDePasse = 'Le mot de passe est requis';
    else if (formData.motDePasse.length < 6) newErrors.motDePasse = 'Le mot de passe doit contenir au moins 6 caractères';

    // Confirmation mot de passe
    if (!formData.confirmerMotDePasse) newErrors.confirmerMotDePasse = 'Veuillez confirmer le mot de passe';
    else if (formData.motDePasse !== formData.confirmerMotDePasse) newErrors.confirmerMotDePasse = 'Les mots de passe ne correspondent pas';

    // Téléphone
    if (!formData.telephone.trim()) newErrors.telephone = 'Le numéro de téléphone est requis';
    else if (!phoneRegex.test(formData.telephone)) newErrors.telephone = 'Format invalide (Ex: +225 05 98 76 54 32)';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const today = new Date().toISOString().split('T')[0];
      const tempId = `C${Date.now().toString().slice(-4)}`; 

      const nouveauClient = {
        id: tempId, type: "client",
        profil: { nom: formData.nom.toUpperCase(), prenom: formData.prenom, email: formData.email, telephone: formData.telephone, dateInscription: today },
        adresse: { principale: { ville: "", commune: "", quartier: "", pays: "Côte d'Ivoire" }, secondaires: [] },
        commandes: [], historiqueAchats: [], favoris: [], paiement: { methodes: [] }, notifications: [],
        parametres: { notifications: { email: true, sms: false }, confidentialite: {} }
      };

      console.log('--- NOUVEAU CLIENT ENREGISTRÉ (Objet JSON simulé) ---', nouveauClient);

      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        
        // REDIRECTION VERS LA PAGE DE CONNEXION après 1.5 seconde
        setTimeout(() => {
          // Utilise window.location.href pour simuler la navigation
          window.location.href = '/Home';
        }, 1500); 
      }, 1000);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="bg-white p-12 w-full max-w-lg shadow-xl rounded-[60px] text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Inscription réussie !</h2>
          <p className="text-lg text-gray-600">Votre compte client est créé.</p>
          <p className="text-sm text-gray-500 mt-2">Redirection vers la page de connexion...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 py-8">
      <div className="bg-white p-12 w-full max-w-lg shadow-xl rounded-[60px] relative">

        {/* En-tête (Design unifié) */}
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
          <h1 className="text-3xl font-semibold text-gray-800">Inscription Client</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <InputField name="nom" type="text" placeholder="Nom" value={formData.nom} onChange={handleChange} error={errors.nom} />
          <InputField name="prenom" type="text" placeholder="Prénom" value={formData.prenom} onChange={handleChange} error={errors.prenom} />
          <InputField name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} error={errors.email} />
          <InputField name="motDePasse" type="password" placeholder="Mot de passe" value={formData.motDePasse} onChange={handleChange} error={errors.motDePasse} />
          <InputField name="confirmerMotDePasse" type="password" placeholder="Confirmer mot de passe" value={formData.confirmerMotDePasse} onChange={handleChange} error={errors.confirmerMotDePasse} />
          <InputField name="telephone" type="tel" placeholder="Numéro de téléphone (+225 XX XX XX XX XX)" value={formData.telephone} onChange={handleChange} error={errors.telephone} />

          {/* Bouton Valider */}
          <button
            type="submit" disabled={isSubmitting}
            className={`w-full bg-green-500 text-white font-bold py-4 text-xl rounded-[60px] hover:bg-green-600 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Inscription en cours...' : 'Valider'}
          </button>
        </form>

        {/* Aide pour le test - Nuance de Vert cohérente */}
        <div className="mt-8 p-6 bg-green-100 border border-green-300 rounded-3xl"> 
          <p className="text-base text-gray-800 font-bold mb-3 flex items-center">💡 Données de test (Valides pour l'inscription) :</p>
          <ul className="text-sm text-gray-700 space-y-1.5 pl-4">
            <li className='flex justify-between border-b border-green-200 pb-1'><span className='font-semibold'>Nom/Prénom:</span> <span className="font-mono bg-green-200 px-2 py-0.5 rounded text-gray-900">{testData.nom} {testData.prenom}</span></li>
            <li className='flex justify-between border-b border-green-200 pb-1'><span className='font-semibold'>Email:</span> <span className="font-mono bg-green-200 px-2 py-0.5 rounded text-gray-900">{testData.email}</span></li>
            <li className='flex justify-between border-b border-green-200 pb-1'><span className='font-semibold'>Téléphone:</span> <span className="font-mono bg-green-200 px-2 py-0.5 rounded text-gray-900">{testData.telephone}</span></li>
            <li><span className='font-semibold'>Mot de passe:</span><span className="font-mono"> {testData.motDePasse}</span> (6+ caractères)</li>
          </ul>
        </div>

        {/* Lien vers la connexion */}
        <p className="mt-8 text-center text-base text-gray-600">
          Si vous avez déjà un compte{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            <a href={LOGIN_PAGE_PATH}>Connectez vous</a>
          </span>.
        </p>
      </div>
    </div>
  );
}

export default Register2;
