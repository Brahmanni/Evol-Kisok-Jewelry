import { useState } from 'react';
import { Heart, IndianRupee, RefreshCw } from 'lucide-react';
import { Product, SurveyAnswers } from '../types';

interface RecommendationsProps {
  products: Product[];
  answers: SurveyAnswers;
  onRestart: () => void;
}

export const Recommendations = ({ products, answers, onRestart }: RecommendationsProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getSelectionSummary = () => {
    const labels: Record<string, Record<string, string>> = {
      style: {
        'modern': 'Modern & Contemporary',
        'classic': 'Classic & Timeless',
        'traditional': 'Traditional & Ethnic',
        'minimalist': 'Minimalist & Subtle'
      },
      occasion: {
        'wedding': 'Wedding & Special Events',
        'evening': 'Evening Occasions',
        'work': 'Work & Professional',
        'casual': 'Casual Everyday'
      },
      budget: {
        'under-50k': 'Under ₹50,000',
        '50k-100k': '₹50,000 - ₹1,00,000',
        '100k-150k': '₹1,00,000 - ₹1,50,000',
        'above-150k': 'Above ₹1,50,000'
      },
      metal: {
        'gold': 'Yellow Gold',
        'white-gold': 'White Gold',
        'rose-gold': 'Rose Gold',
        'platinum': 'Platinum'
      },
      vibe: {
        'minimal': 'Minimal & Understated',
        'bold': 'Bold & Statement',
        'traditional': 'Traditional & Ornate',
        'modern': 'Modern & Edgy'
      }
    };

    return Object.entries(answers)
      .map(([key, value]) => labels[key]?.[value])
      .filter(Boolean);
  };

  const summary = getSelectionSummary();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-6xl text-white mb-4">
            Curated For You
          </h2>
          <p className="text-gray-400 text-xl mb-6">
            {products.length} pieces matched to your style
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {summary.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-black shadow-lg shadow-amber-500/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Start Over
          </button>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No products match this category. Try selecting "All" or choose a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="aspect-square overflow-hidden bg-gray-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    className={`w-6 h-6 transition-colors ${
                      favorites.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-white'
                    }`}
                  />
                </button>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-sm uppercase tracking-wider">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 text-2xl font-bold mb-4">
                    <IndianRupee className="w-6 h-6" />
                    {formatPrice(product.price).replace('₹', '')}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.vibe.map((v) => (
                      <span
                        key={v}
                        className="px-3 py-1 text-xs font-medium bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded-full"
                      >
                        {v}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {favorites.length > 0 && (
          <div className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-400 to-yellow-400 text-black px-6 py-3 rounded-full shadow-2xl shadow-amber-500/50 animate-bounce">
            <p className="font-medium flex items-center gap-2">
              <Heart className="w-5 h-5 fill-current" />
              {favorites.length} Favorite{favorites.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
