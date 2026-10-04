import React from 'react';
import { Recipe } from '../types/recipe';
import { X, Heart, Trash2, ArrowRight, Utensils } from 'lucide-react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Recipe[];
  onRemoveFavorite: (recipeId: string) => void;
  onClearAll: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
  lang: 'si' | 'en';
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearAll,
  onSelectRecipe,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#fffdfa]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                {lang === 'si' ? 'මගේ ප්‍රියතම වට්ටෝරු' : 'Saved Recipes'}
              </h3>
              <p className="text-xs text-stone-500">
                {favorites.length} {lang === 'si' ? 'ක් සුරකින ලදි' : 'recipes saved'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {favorites.length > 0 && (
              <button
                onClick={onClearAll}
                className="p-2 text-stone-400 hover:text-rose-600 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                title={lang === 'si' ? 'සියල්ල ඉවත් කරන්න' : 'Clear all'}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {favorites.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400">
              <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center text-rose-300 mb-3">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-stone-700 text-base">
                {lang === 'si' ? 'ප්‍රියතම වට්ටෝරු කිසිවක් නැත' : 'No saved recipes yet'}
              </h4>
              <p className="text-xs text-stone-500 max-w-xs mt-1">
                {lang === 'si'
                  ? 'ඔබ කැමති ඕනෑම වට්ටෝරුවක ඇති හදවත (Heart) අයිකනය ක්ලික් කර මෙහි සුරැකිය හැක.'
                  : 'Click the heart icon on any recipe card to save it here for quick access later.'}
              </p>
              <button
                onClick={onClose}
                className="mt-5 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>{lang === 'si' ? 'වට්ටෝරු බලන්න' : 'Browse Recipes'}</span>
              </button>
            </div>
          ) : (
            favorites.map((recipe) => (
              <div
                key={recipe.id}
                className="group p-3 rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-sm bg-stone-50/50 hover:bg-white transition-all flex items-center gap-3 cursor-pointer"
                onClick={() => {
                  onSelectRecipe(recipe);
                  onClose();
                }}
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-stone-900 text-sm group-hover:text-amber-700 truncate">
                    {lang === 'si' ? recipe.sinhalaName : recipe.name}
                  </h4>
                  <p className="text-xs text-stone-500 truncate">
                    {lang === 'si' ? recipe.name : recipe.sinhalaName}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-stone-500">
                    <span>⏱️ {recipe.cookTime} min</span>
                    <span>•</span>
                    <span className="capitalize">{recipe.difficulty}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveFavorite(recipe.id);
                    }}
                    className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
