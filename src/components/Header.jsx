import React, { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const currentPath = window.location.pathname;
  
  const navItems = [
    { name: "Accueil", path: "/Home" },
    { name: "À propos", path: "/About" },
    { name: "Catégories", path: "/Category" },
    { name: "Nouveautés", path: "/News" },
  ];

  // Charger l'utilisateur depuis sessionStorage au montage du composant
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    
    if (storedUser && isAuthenticated === 'true') {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        console.log('--- UTILISATEUR CHARGÉ DANS HEADER ---', userData);
      } catch (error) {
        console.error('Erreur lors du chargement de l\'utilisateur', error);
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('isAuthenticated');
      }
    }
  }, []);

  // Fonction pour déterminer le lien du profil selon le type d'utilisateur
  const getProfileLink = () => {
    if (!user) return '/Login';
    return user.type === 'acheteur' ? '/ProfilBuy' : '/ProfilSell';
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Logo ElevagePro"
            className="w-10 h-10 object-cover rounded-full"
            onError={(e) => {
              e.target.src = "https://placehold.co/40x40/22C55E/FFFFFF?text=EP";
              e.target.onerror = null;
            }}
          />
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Elevage<span className="text-green-700">Pro</span>
          </span>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item, i) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={i}
                href={item.path}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  isActive 
                    ? "bg-green-200 text-green-900" 
                    : "text-gray-700 hover:bg-green-200"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Search + User/Login Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-64">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-transparent outline-none text-sm text-gray-700 w-full ml-2"
            />
          </div>
          
          {user ? (
            <a 
              href={getProfileLink()}
              className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-semibold hover:bg-green-800 transition cursor-pointer"
            >
              {user.nom} {user.prenom}
            </a>
          ) : (
            <a 
              href="/Login" 
              className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm hover:bg-green-800 transition"
            >
              Connexion
            </a>
          )}
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Déroulant Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item, i) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={i}
                  href={item.path}
                  className={`px-6 py-2 rounded-full font-semibold transition w-full text-center ${
                    isActive 
                      ? "bg-green-200 text-green-900" 
                      : "text-gray-700 hover:bg-green-200"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
            
            {user ? (
              <div className="w-full px-6">
                <a 
                  href={getProfileLink()}
                  className="bg-green-700 text-white rounded-lg p-3 text-center font-semibold block hover:bg-green-800 transition cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {user.nom} {user.prenom}
                </a>
              </div>
            ) : (
              <a 
                href="/Login" 
                className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm hover:bg-green-800 transition w-full text-center mx-6"
                onClick={() => setMenuOpen(false)}
              >
                Connexion
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;