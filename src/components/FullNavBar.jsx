import React, { useState } from "react";
// Importations d'icônes
import { Menu, X, Search, ChevronDown, Filter } from "lucide-react";

const Link = ({ to, children, className, onClick }) => (
    <a href={to} className={className} onClick={onClick}>
        {children}
    </a>
);
// Simulation du hook useLocation pour déterminer l'état actif du lien
const useLocation = () => ({ pathname: window.location.pathname });

// Liens de navigation principaux
const navItems = [
    { name: "Accueil", path: "/Home" },
    { name: "À propos", path: "/About" },
    { name: "Produits", path: "/products" },
    { name: "Nouveautés", path: "/News" },
];

// Liens de la barre de catégories secondaires
const mainCategories = [
    "Moutons", "Vaches", "Boeufs", "Poulets", "Porcs",
    "Dindons", "Poissons", "Chiens", "Chèvres"
];


// --- Composant FullNavBar ---
const FullNavBar = () => {
    // État pour gérer l'ouverture/fermeture du menu mobile
    const [menuOpen, setMenuOpen] = useState(false);
    // Récupération du chemin actuel pour l'état actif des liens
    const location = useLocation();

    return (
        // Conteneur fixé en haut pour le "headerfull"
        <div className="fixed top-0 left-0 w-full z-50 shadow-xl bg-white/95 backdrop-blur-sm">
            {/* 1. HEADER PRINCIPAL */}
            <header className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
                        <div className="w-9 h-9 bg-green-700 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
                             {/* Icône de ferme stylisée */}
                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-5m0 5l-4-4M7 4H2V9m0-5l4 4m0 12v5h5m0-5l4 4m12 0v5h-5m0-5l-4 4"/>
                             </svg>
                        </div>
                        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Elevage<span className="text-green-700">Pro</span></span>
                    </Link>

                    {/* Navigation (Desktop) - Couleurs d'origine conservées */}
                    <nav className="hidden md:flex gap-4 text-base font-medium">
                        {navItems.map((item, i) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={i}
                                    to={item.path}
                                    className={`px-4 py-2 rounded-full font-semibold transition duration-200 
                                                ${isActive ? "bg-green-200 text-green-900 shadow-inner" : "text-gray-700 hover:bg-green-100"}`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Search + Login (Desktop) */}
                    <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                        {/* Champ de recherche Desktop */}
                        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-64 ring-2 ring-transparent focus-within:ring-green-500 transition-all duration-300">
                            <Search className="w-4 h-4 text-gray-500" />
                            <label htmlFor="desktop-search" className="sr-only">Recherche</label>
                            <input
                                id="desktop-search"
                                type="text"
                                placeholder="Rechercher..."
                                className="bg-transparent outline-none text-sm text-gray-700 w-full ml-2"
                            />
                        </div>
                        {/* Bouton Connexion */}
                        <button className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm hover:bg-green-800 transition">
                         <a href="/Login">Connexion</a>
                            </button>
                    </div>

                    {/* Bouton Menu mobile */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-gray-100"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Ouvrir le menu"
                    >
                        {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
                    </button>
                </div>
            </header>
            {/* 2. BARRE DE CATÉGORIES SECONDAIRES (Visible sur Desktop) */}
            <div className="bg-gray-50/70 border-b border-gray-200 p-2 sm:p-3 hidden md:block">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    <div className="flex items-center space-x-3 sm:space-x-5 overflow-x-auto whitespace-nowrap">
                        {/* Liens de Catégories */}
                        {mainCategories.map((category, index) => (
                            <a
                                key={index}
                                href={`#${category.toLowerCase()}`} // Lien vers les ancres de la page
                                className="text-sm sm:text-base font-medium text-gray-800 
                                            hover:text-green-700 transition flex-shrink-0"
                            >
                                {category}
                            </a>
                        ))}

                        {/* Bouton Dropdown Catégories (Placeholder) */}
                        <button 
                            title="Plus de catégories"
                            className="p-1 sm:p-2 text-gray-700 hover:text-green-700 transition rounded-full hover:bg-gray-200 flex-shrink-0" >
                            <ChevronDown className="w-5 h-5" />
                        </button>
                        {/* Bouton Filtre (Placeholder) */}
                        <button 
                            title="Filtrer les résultats"
                            className="p-1 sm:p-2 text-gray-700 hover:text-green-700 transition rounded-full hover:bg-gray-200 ml-auto flex-shrink-0"
                        >
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. MENU MOBILE DÉROULANT */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-100 p-4">
                     {/* Search mobile intégré */}
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-full mb-6 ring-2 ring-transparent focus-within:ring-green-500 transition-all duration-300">
                        <Search className="w-4 h-4 text-gray-500" />
                        <label htmlFor="mobile-search" className="sr-only">Recherche mobile</label>
                        <input
                            id="mobile-search"
                            type="text"
                            placeholder="Rechercher des produits..."
                            className="bg-transparent outline-none text-sm text-gray-700 w-full ml-2"
                        />
                    </div>

                    <nav className="flex flex-col space-y-3">
                        {/* Liens de navigation mobile (avec fermeture du menu au clic) */}
                        {navItems.map((item, i) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={i}
                                    to={item.path}
                                    className={`px-4 py-2 rounded-full font-semibold transition text-base w-full text-center
                                        ${isActive ? "bg-green-200 text-green-900" : "text-gray-700 hover:bg-green-100"}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        {/* Bouton Connexion mobile */}
                        <Link
                            to="/Login"
                            className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-bold hover:bg-green-800 transition w-full text-center mt-4 shadow-md"
                            onClick={() => setMenuOpen(false)}
                        >
                            Connexion
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
};
export default FullNavBar;
