import React from 'react';
import { Recipe } from '../types/recipe';
import { Heart, Clock, Flame, Users, Sparkles, ChevronRight } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  onSelect: (recipe: Recipe) => void;
  lang: 'si' | 'en';
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isFavorite,
  onToggleFavorite,
  onSelect,
  lang,
}) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'hard':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  const getDietBadge = (diet: string) => {
    if (diet === 'vegan') return { text: lang === 'si' ? 'වීගන්' : 'Vegan', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
    if (diet === 'vegetarian') return { text: lang === 'si' ? 'නිර්මාංශ' : 'Vegetarian', color: 'bg-green-50 text-green-700 border-green-200' };
    return null;
  };

  const dietBadge = getDietBadge(recipe.diet);

  return (
    <div
      onClick={() => onSelect(recipe)}
      className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
    >
      {/* Top Image Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient overlay for badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          {recipe.isHeritageFavorite && (
            <span className="px-2.5 py-1 rounded-full bg-amber-500/95 text-stone-950 font-extrabold text-[11px] shadow-sm backdrop-blur-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-amber-950" />
              <span>{lang === 'si' ? 'පාරම්පරික' : 'Heritage'}</span>
            </span>
          )}
          {dietBadge && (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border backdrop-blur-xs ${dietBadge.color}`}>
              {dietBadge.text}
            </span>
          )}
        </div>

        {/* Favorite Bookmark Button */}
        <button
          onClick={(e) => onToggleFavorite(recipe.id, e)}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all shadow-md cursor-pointer ${
            isFavorite
              ? 'bg-rose-600 text-white hover:bg-rose-700 scale-110'
              : 'bg-white/80 hover:bg-white text-stone-700 hover:text-rose-600'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
          aria-label="Toggle favorite"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white stroke-white' : ''}`} />
        </button>

        {/* Bottom of Image overlay metadata */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold drop-shadow-md">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>{recipe.cookTime} {lang === 'si' ? 'මිනි' : 'mins'}</span>
          </div>

          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
            <span className="text-[10px] text-stone-300">{lang === 'si' ? 'සැර:' : 'Spice:'}</span>
            <span title={`Spice level: ${recipe.spiceLevel}/4`}>
              {'🌶️'.repeat(recipe.spiceLevel)}
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata pill row */}
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md border ${getDifficultyColor(recipe.difficulty)}`}>
              {recipe.difficulty}
            </span>
            <span className="text-stone-700 text-xs flex items-center gap-1">
              <Users className="w-3 h-3 text-stone-700" />
              <span>{recipe.servings} {lang === 'si' ? 'දෙනෙකුට' : 'servings'}</span>
            </span>
          </div>

          {/* Dish Title */}
          <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors line-clamp-1">
            {lang === 'si' ? recipe.sinhalaName : recipe.name}
          </h3>

          {/* Dual subtitle */}
          <p className="text-xs text-amber-900/90 font-medium mb-1 line-clamp-1">
            {lang === 'si' ? recipe.name : recipe.sinhalaName}
          </p>

          {/* Tagline */}
          <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed mt-1">
            {lang === 'si' ? recipe.sinhalaTagline : recipe.tagline}
          </p>
        </div>

        {/* Footer of Card */}
        <div className="mt-4 pt-3.5 border-t border-stone-100 flex items-center justify-between">
          <div className="text-xs text-stone-700 font-medium">
            <span>{recipe.ingredients.length} {lang === 'si' ? 'අමුද්‍රව්‍ය' : 'ingredients'}</span>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 group-hover:text-amber-800 transition-colors">
            <span>{lang === 'si' ? 'වට්ටෝරුව බලන්න' : 'View Recipe'}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
