import React, { useState, useMemo, useCallback } from "react";
import {
  Menu,
  X,
  Search,
  Filter,
  Heart,
  User,
  ChevronRight,
  SlidersHorizontal,
  Tag,
} from "lucide-react";
import Header from "../components/Header"; // ✅ On garde uniquement l'import du Header

// =================================================================
// 🐄 Données principales : catégories, navigation, produits
// =================================================================

const CATEGORIES = [
  { id: "Bovins", name: "Bovins 🐄" },
  { id: "Caprins", name: "Caprins 🐐" },
  { id: "Ovins", name: "Ovins 🐏" },
  { id: "porcs", name: "Porcs 🐖" },
  { id: "poulets", name: "Volailles 🐔" },
  { id: "lapins", name: "Lapins 🐇" },
  { id: "poissons", name: "Aquaculture 🐟" },
  { id: "escargots", name: "Héliciculture 🐌" },
  { id: "autres", name: "Autres Espèces 🐾" },
];

const NAV_ITEMS = [
  { name: "Accueil", path: "/Home" },
  { name: "Catalogue", path: "/Category" },
  { name: "À Propos", path: "/About" },
  { name: "Nouveautés", path: "/News" },
];

const PRODUCT_DATA = [
  {
    id: "vaches",
    name: "Bovins 🐄",
    subcategories: [
      {
        id: "taureaux",
        title: "Taureaux reproducteurs",
        items: [
          {
            name: "Taureau Charolais 2 ans (Bio)",
            image:
              "https://placehold.co/150x150/065f46/ffffff?text=Charolais",
            price: "2 500 €",
            unit: "unité",
            stock: "Disponible",
          },
          {
            name: "Veau Limousin (5 mois)",
            image: "https://placehold.co/150x150/1e3a8a/ffffff?text=Limousin",
            price: "1 200 €",
            unit: "tête",
            stock: "Limité",
          },
          {
            name: "Génisse Laitière Holstein",
            image: "https://placehold.co/150x150/991b1b/ffffff?text=Holstein",
            price: "Prix Négociable",
            unit: "tête",
            stock: "Disponible",
          },
        ],
      },
      {
        id: "lait",
        title: "Produits laitiers & Viande",
        items: [
          {
            name: "Lait frais entier (bidon)",
            image: "https://placehold.co/150x150/fbbf24/000000?text=Lait",
            price: "2.50 €",
            unit: "litre",
            stock: "Disponible",
          },
          {
            name: "Carcasse de bœuf (en gros)",
            image: "https://placehold.co/150x150/7c2d12/ffffff?text=Boeuf",
            price: "5.50 €",
            unit: "kg",
            stock: "Disponible",
          },
        ],
      },
    ],
  },
  {
    id: "petits_ruminants",
    name: "Caprins/Ovins 🐐🐏",
    subcategories: [
      {
        id: "agneaux",
        title: "Agneaux pour engraissement",
        items: [
          {
            name: "Agneau de race Sarda",
            image: "https://placehold.co/150x150/d97706/ffffff?text=Agneau",
            price: "80 €",
            unit: "tête",
            stock: "Limité",
          },
        ],
      },
    ],
  },
  {
    id: "porcs",
    name: "Porcs 🐖",
    subcategories: [
      {
        id: "porcelets",
        title: "Porcelets",
        items: [
          {
            name: "Porcelet de 6 semaines",
            image: "https://placehold.co/150x150/be185d/ffffff?text=Porcelet",
            price: "120 €",
            unit: "unité",
            stock: "Disponible",
          },
        ],
      },
    ],
  },
  {
    id: "poulets",
    name: "Volailles 🐔",
    subcategories: [
      {
        id: "oeufs",
        title: "Œufs de poule",
        items: [
          {
            name: "Plaquette de 30 œufs frais",
            image: "https://placehold.co/150x150/059669/ffffff?text=Oeufs",
            price: "5.00 €",
            unit: "plaquette",
            stock: "Disponible",
          },
        ],
      },
    ],
  },
  {
    id: "escargots",
    name: "Héliciculture 🐌",
    subcategories: [
      {
        id: "escargots_gros",
        title: "Escargots prêts à cuisiner",
        items: [
          {
            name: "Gros Gris (par 100)",
            image:
              "https://placehold.co/150x150/57534e/ffffff?text=Escargots",
            price: "35 €",
            unit: "lot",
            stock: "Limité",
          },
        ],
      },
    ],
  },
];

// =================================================================
// ⚙️ Hook navigation simple
// =================================================================

const useNavigation = (initialPath = "/Category") => {
  const [currentPath, setCurrentPath] = useState(initialPath);

  const navigate = useCallback((path) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { currentPath, navigate };
};

// =================================================================
// 🔗 Liens et composants utilitaires
// =================================================================

const CustomLink = React.memo(({ to, children, className, onClick, navigate }) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      navigate(to);
      onClick?.();
    }}
    className={className}
  >
    {children}
  </button>
));

const CategoryButton = React.memo(({ name, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
      active
        ? "bg-green-700 text-white shadow-lg ring-2 ring-green-500"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {name}
  </button>
));

const ProductCard = React.memo(({ product }) => {
  const isNegotiable = product.price.toLowerCase().includes("négociable");

  return (
    <div className="flex flex-col bg-white p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-44 sm:w-52 flex-shrink-0 cursor-pointer border border-gray-100">
      {/* Image */}
      <div className="relative w-full h-24 sm:h-32 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
        {product.stock === "Limité" && (
          <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-red-500 text-white shadow-md">
            Stock {product.stock}
          </span>
        )}
        <button className="absolute top-2 right-2 p-1 bg-white/70 backdrop-blur-sm rounded-full text-red-500 shadow-md hover:bg-red-500 hover:text-white transition">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Nom du produit */}
      <p className="text-sm text-gray-900 text-center font-bold mb-1 px-1 line-clamp-2 min-h-[2.5rem]">
        {product.name}
      </p>

      {/* Prix */}
      <div className="flex flex-col items-center pt-2 border-t w-full border-gray-100">
        <p
          className={`text-base font-extrabold ${
            isNegotiable ? "text-amber-600" : "text-green-700"
          }`}
        >
          {product.price}
        </p>
        <p className="text-xs text-gray-500 font-medium">/{product.unit}</p>
      </div>

      {/* --- Boutons --- */}
      <div className="flex justify-center gap-2 mt-3">
        <button
          className="flex-1 bg-green-100 hover:bg-green-200 text-green-800 font-semibold text-xs px-3 py-2 rounded-lg shadow-sm transition"
          onClick={() => alert(`Détails du produit : ${product.name}`)}
        >
          Voir Détails
        </button>
        <button
          className="flex-1 bg-green-700 hover:bg-green-600 text-white font-semibold text-xs px-3 py-2 rounded-lg shadow-sm transition"
          onClick={() => alert(`Commande effectuée pour : ${product.name}`)}
        >
          Commander
        </button>
      </div>
    </div>
  );
});

const FilterModal = React.memo(({ isOpen, onClose, onApply }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[99] flex justify-end">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="bg-white w-full max-w-xs sm:max-w-sm h-full p-6 shadow-2xl overflow-y-auto z-10 animate-slideInRight">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <SlidersHorizontal className="w-6 h-6 text-green-700" />
            Filtrer
          </h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
            <h4 className="font-semibold text-gray-800 mb-3 border-b pb-1">Type d'offre</h4>
            {["Vente immédiate", "Prix Négociable", "En Gros"].map((type) => (
              <label key={type} className="flex items-center space-x-2 py-1 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded text-green-600 border-gray-300 focus:ring-green-500" />
                <span>{type}</span>
              </label>
            ))}
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
            <h4 className="font-semibold text-gray-800 mb-3 border-b pb-1">Disponibilité</h4>
            {["Disponible", "Stock Limité"].map((label, i) => (
              <label key={i} className="flex items-center space-x-2 py-1 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded text-green-600 border-gray-300 focus:ring-green-500"
                  defaultChecked={i === 0}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t space-y-3">
          <button
            onClick={() => {
              onApply();
              onClose();
            }}
            className="w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition shadow-lg transform active:scale-95"
          >
            Appliquer les Filtres
          </button>
          <button
            onClick={onClose}
            className="w-full text-gray-500 py-2 hover:text-gray-900 rounded-xl transition"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
});

const CategoryPage = ({
  activeCategory,
  setActiveCategory,
  isFilterActive,
  setIsFilterActive,
}) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const activeSection = useMemo(
    () => PRODUCT_DATA.find((section) => section.id === activeCategory),
    [activeCategory]
  );
  const handleApplyFilter = useCallback(() => setIsFilterActive(true), [setIsFilterActive]);
  const categoryName =
    CATEGORIES.find((c) => c.id === activeCategory)?.name ||
    "Sélectionnez une Catégorie";

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          Catalogue : <span className="text-green-700">{categoryName}</span>
        </h1>

        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
          <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide flex-grow">
            {CATEGORIES.map((cat) => (
              <CategoryButton
                key={cat.id}
                name={cat.name}
                active={cat.id === activeCategory}
                onClick={() => setActiveCategory(cat.id)}
              />
            ))}
          </div>

          <button
            onClick={() => setIsFilterModalOpen(true)}
            className={`flex items-center gap-1 p-3 rounded-full text-sm font-semibold transition-all shadow-md ml-4 flex-shrink-0 ${
              isFilterActive
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Filter className="w-5 h-5" />
            <span className="hidden sm:inline">Filtrer</span>
            {isFilterActive && (
              <span className="h-2 w-2 bg-white rounded-full ml-1 animate-pulse" />
            )}
          </button>
        </div>

        {activeSection?.subcategories?.length > 0 ? (
          activeSection.subcategories.map((subcat) => (
            <section key={subcat.id} className="mb-12">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-800">
                <Tag className="w-5 h-5 text-green-600" /> {subcat.title}
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </h2>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide py-3">
                {subcat.items.map((item, idx) => (
                  <ProductCard key={idx} product={item} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="text-center p-12 bg-gray-50 rounded-xl shadow-inner mt-10">
            <p className="text-lg text-gray-500 font-medium">
              Aucun produit ou sous-catégorie trouvé pour : {categoryName}.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Veuillez sélectionner une autre catégorie.
            </p>
          </div>
        )}
      </main>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleApplyFilter}
      />
    </div>
  );
};

// =================================================================
// 🚀 APP PRINCIPALE
// =================================================================

export default function App() {
  const { currentPath, navigate } = useNavigation("/Category");
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {currentPath === "/Category" ? (
        <>
          <Header currentPath={currentPath} navigate={navigate} />
          <CategoryPage
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            isFilterActive={isFilterActive}
            setIsFilterActive={setIsFilterActive}
          />
        </>
      ) : (
        <div className="pt-20 text-center p-10">
          <Header currentPath={currentPath} navigate={navigate} />
          <h1 className="text-3xl font-bold text-gray-900 mt-20">
            Page "{currentPath.substring(1)}" en construction...
          </h1>
          A<p className="text-gray-500 mt-3">
            Retour au{" "}
            <CustomLink
              to="/Category"
              navigate={navigate}
              className="text-green-600 hover:underline font-medium"
            >
              Catalogue
            </CustomLink>
          </p>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { font-family: 'Inter', sans-serif; }

        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.3s ease-out; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
