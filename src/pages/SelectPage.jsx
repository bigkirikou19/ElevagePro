import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Store, ShoppingCart, Check } from "lucide-react";

export default function SelectPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setTimeout(() => {
      if (role === "vendeur") {
        navigate("/Sell");
      } else {
        navigate("/Buy");
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white text-gray-800 flex flex-col items-center justify-center px-4 py-16">
      <div className="mb-12 text-center transform transition-all duration-500 hover:scale-105">
        <Link to="/Home" className="text-5xl font-bold text-green-700 tracking-wide mb-2 inline-block">
          Elevage<span className="text-green-600">Pro</span>
        </Link>
        <p className="text-base text-gray-600 mt-3 font-medium">Inscrivez-vous pour commencer</p>
      </div>

      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-green-100 rounded-lg">
          <User className="w-6 h-6 text-green-700" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Choisissez votre profil</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12 w-full max-w-2xl">
        {/* Carte Vendeur */}
        <button
          onClick={() => handleRoleSelect("vendeur")}
          className={`group relative flex flex-col items-center justify-center gap-4 px-8 py-8 rounded-2xl text-lg transition-all duration-300 w-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 ${
            selectedRole === "vendeur"
              ? "bg-green-700 text-white scale-105"
              : "bg-white text-gray-800 hover:bg-green-50 border-2 border-green-200"
          }`}
        >
          <div className={`p-4 rounded-full transition-colors ${
            selectedRole === "vendeur" ? "bg-green-600" : "bg-green-100 group-hover:bg-green-200"
          }`}>
            <Store className={`w-8 h-8 ${selectedRole === "vendeur" ? "text-white" : "text-green-700"}`} />
          </div>
          <span className="font-bold text-xl">Vendeur</span>
          <p className={`text-sm text-center px-4 ${
            selectedRole === "vendeur" ? "text-green-100" : "text-gray-600"
          }`}>
            Vendez vos produits d'élevage et gérez votre boutique
          </p>
          {selectedRole === "vendeur" && (
            <div className="absolute top-4 right-4">
              <Check className="w-6 h-6 text-white" />
            </div>
          )}
        </button>

        {/* Carte Acheteur */}
        <button
          onClick={() => handleRoleSelect("acheteur")}
          className={`group relative flex flex-col items-center justify-center gap-4 px-8 py-8 rounded-2xl text-lg transition-all duration-300 w-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 ${
            selectedRole === "acheteur"
              ? "bg-green-700 text-white scale-105"
              : "bg-white text-gray-800 hover:bg-green-50 border-2 border-green-200"
          }`}
        >
          <div className={`p-4 rounded-full transition-colors ${
            selectedRole === "acheteur" ? "bg-green-600" : "bg-green-100 group-hover:bg-green-200"
          }`}>
            <ShoppingCart className={`w-8 h-8 ${selectedRole === "acheteur" ? "text-white" : "text-green-700"}`} />
          </div>
          <span className="font-bold text-xl">Acheteur</span>
          <p className={`text-sm text-center px-4 ${
            selectedRole === "acheteur" ? "text-green-100" : "text-gray-600"
          }`}>
            Achetez des produits frais directement auprès des éleveurs
          </p>
          {selectedRole === "acheteur" && (
            <div className="absolute top-4 right-4">
              <Check className="w-6 h-6 text-white" />
            </div>
          )}
        </button>
      </div>

      <p className="text-base text-gray-700">
        Vous avez déjà un compte ?{" "}
        <Link to="/Login" className="text-green-700 font-semibold hover:text-green-800 hover:underline transition-colors">
          Connectez-vous
        </Link>
      </p>
    </div>
  );
}