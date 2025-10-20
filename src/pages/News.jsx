import React, { useState, useMemo } from "react";
import { ArrowRight, Tag, Grid, List, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from "../components/Footer";

const productData = [
  {
    title: "BÉLIER", id: "belier", icon: "🐏", description: "Animaux robustes pour l'élevage",
    items: [
      { name: "Bélier de grande taille", price: "120 000 FCFA", unit: "Tête", image: "/images/BÉLIER.jpeg", badge: "Populaire", stock: "Disponible" },
      { name: "Grand bélier blanc", price: "150 000 FCFA", unit: "Tête", image: "/images/BÉLIER1.jpeg", badge: "Premium", stock: "Limité" },
      { name: "Bélier unique au monde", price: "200 000 FCFA", unit: "Tête", image: "/images/BÉLIER2.jpeg", badge: "Exclusif", stock: "Disponible" },
      { name: "Jeune bélier", price: "90 000 FCFA", unit: "Tête", image: "/images/BÉLIER3.jpeg", stock: "Disponible" },
    ],
  },
  {
    title: "CHÈVRES", id: "chevres", icon: "🐐", description: "Chèvres de qualité supérieure",
    items: [
      { name: "Chèvre locale", price: "50 000 FCFA", unit: "Tête", image: "/images/Chevre1.jpeg", badge: "Bio", stock: "Disponible" },
      { name: "Chèvre ", price: "80 000 FCFA", unit: "Tête", image: "/images/Chevre2.jpeg", badge: "Premium", stock: "Disponible" },
      { name: "Chèvre robuste", price: "70 000 FCFA", unit: "Tête", image: "/images/Chevre3.jpeg", stock: "Disponible" },
      { name: "Chevreau", price: "40 000 FCFA", unit: "Tête", image: "/images/Chevre4.jpeg", stock: "Disponible" },
    ],
  },
  {
    title: "PORCS", id: "porcs", icon: "🐷", description: "Porcs d'engraissement et reproducteurs",
    items: [
      { name: "Cochons de lait", price: "35 000 FCFA", unit: "Tête", image: "/images/porc1.jpg", stock: "Disponible" },
      { name: "Gros verrat", price: "180 000 FCFA", unit: "Tête", image: "/images/elevage-cochon-porcelet.jpeg", badge: "Premium", stock: "Limité" },
      { name: "Truie reproductrice", price: "200 000 FCFA", unit: "Tête", image: "/images/porc2.jpg", stock: "Disponible" },
      { name: "Porcelets (lot de 10)", price: "120 000 FCFA", unit: "Lot", image: "/images/porc3.jpg",  stock: "Disponible" },
    ],
  },
  {
    title: "POULETS", id: "poulets", icon: "🐔", description: "Volailles de qualité",
    items: [
      { name: "Poules pondeuses", price: "4 000 FCFA", unit: "Tête", image: "/images/poulet1.jpeg", badge: "Populaire", stock: "Disponible" },
      { name: "Poulet de chair", price: "Négociable", unit: "15 min", image: "/images/poulet2.jpeg", badge: "Gros", stock: "Disponible" },
      { name: "Coqs (lot de 5)", price: "35 000 FCFA", unit: "Lot", image: "/images/poulet.jpg", stock: "Disponible" },
      { name: "Poussins (par 100)", price: "70 000 FCFA", unit: "Lot", image: "/images/poussins.jpg", badge: "Lot", stock: "Disponible" },
    ],
  },
];

const StatusBadge = ({ text }) => {
  const styles = {
    "Populaire": "bg-blue-100 text-blue-800", "Premium": "bg-purple-100 text-purple-800",
    "Exclusif": "bg-amber-100 text-amber-800", "Nouveau": "bg-green-100 text-green-800",
    "Bio": "bg-emerald-100 text-emerald-800", "Lot": "bg-indigo-100 text-indigo-800",
    "Top": "bg-rose-100 text-rose-800", "Gros": "bg-orange-100 text-orange-800"
  };
  return <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold rounded-full ${styles[text] || "bg-gray-100 text-gray-800"}`}>{text}</span>;
};

const ProductCard = ({ product, viewMode }) => {
  const { name, price, unit, image, badge, stock } = product;
  const isAvailable = stock === "Disponible";
  const navigate = useNavigate();

  const handleOrder = () => {
    // Option 1: Rediriger vers la page de connexion
    navigate('/Login');
    
    // Option 2: Rediriger vers une page de commande avec les infos du produit
    // navigate('/order', { state: { product } });
    
    // Option 3: Rediriger vers une page spécifique
    // navigate('/Buy');
  };

  if (viewMode === "list") {
    return (
      <article className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden">
        <div className="relative w-full sm:w-48 h-40 sm:h-auto">
          {badge && <StatusBadge text={badge} />}
          <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy"
            onError={(e) => { e.target.src = "https://placehold.co/400x250/E5E7EB/6B7280?text=Image"; e.target.onerror = null; }} />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{stock}</span>
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t">
            <div>
              <span className="flex items-center text-green-700 font-extrabold text-xl">
                <Tag className="w-5 h-5 mr-2" />{price}
              </span>
              <span className="text-xs text-gray-500 ml-7">/{unit}</span>
            </div>
            <button 
              onClick={handleOrder}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition shadow-md disabled:opacity-50" 
              disabled={!isAvailable}
            >
              Commander
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 group">
      <div className="relative h-48 overflow-hidden">
        {badge && <StatusBadge text={badge} />}
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"
          onError={(e) => { e.target.src = "https://placehold.co/400x250/E5E7EB/6B7280?text=Image"; e.target.onerror = null; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]" title={name}>{name}</h3>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{stock}</span>
        <div className="flex items-center justify-between pt-3 mt-3 border-t">
          <div>
            <span className="flex items-center text-green-700 font-extrabold text-lg">
              <Tag className="w-4 h-4 mr-1" />{price}
            </span>
            <span className="text-xs text-gray-500">/{unit}</span>
          </div>
          <button 
            onClick={handleOrder}
            className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg font-semibold transition shadow-md disabled:opacity-50" 
            disabled={!isAvailable}
          >
            Commander
          </button>
        </div>
      </div>
    </article>
  );
};

const ProductSection = ({ title, id, items, description, icon, viewMode }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0, 4);

  return (
    <section id={id} className="mb-12 bg-gradient-to-br from-white to-amber-50/30 p-6 md:p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 pb-4 border-b-2 border-amber-200">
        <div className="flex items-center gap-3 mb-3 sm:mb-0">
          <span className="text-4xl">{icon}</span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 uppercase tracking-wide">{title}</h2>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
        </div>
        <a href={`#${id}`} className="text-green-700 flex items-center text-base font-bold hover:text-green-800 group">
          Catalogue <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
      <div className={viewMode === "list" ? "flex flex-col gap-4" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"}>
        {displayedItems.map((product, index) => <ProductCard key={`${id}-${index}`} product={product} viewMode={viewMode} />)}
      </div>
      {items.length > 4 && (
        <div className="text-center mt-6">
          <button onClick={() => setShowAll(!showAll)} className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-6 py-2 rounded-full font-semibold transition shadow-md">
            {showAll ? "Voir moins" : `Voir ${items.length - 4} de plus`}
          </button>
        </div>
      )}
    </section>
  );
};

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return productData;
    return productData.map(section => ({
      ...section,
      items: section.items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    })).filter(section => section.items.length > 0);
  }, [searchTerm]);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white via-amber-50/20 to-green-50/20">
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">🎉 Nos Nouveautés</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Découvrez notre sélection d'animaux de qualité pour votre élevage</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 w-full md:max-w-md relative mb-4 md:mb-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition ${viewMode === "grid" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`} title="Vue grille">
              <Grid className="w-5 h-5" />
            </button>
            <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition ${viewMode === "list" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`} title="Vue liste">
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
        {filteredData.length === 0 ? (
          <div className="text-center py-20"><p className="text-xl text-gray-500">Aucun produit ne correspond à votre recherche</p></div>
        ) : (
          filteredData.map((section) => <ProductSection key={section.id} {...section} viewMode={viewMode} />)
        )}
        <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-amber-50 rounded-xl border-l-4 border-green-500 shadow-lg">
          <p className="text-center text-gray-800 font-medium text-lg">💡 <strong>Bon à savoir :</strong> Les prix sont indicatifs et négociables.</p>
          <p className="text-center text-gray-600 text-sm mt-2">Contactez-nous pour des offres personnalisées !</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;