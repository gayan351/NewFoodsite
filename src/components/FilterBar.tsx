import React from 'react';
import { FilterState, CategoryType, MealType, DietType, DifficultyType, CookTimeRange } from '../types/recipe';
import { CATEGORIES_METADATA } from '../data/recipes';
import { Filter, RotateCcw, Clock, Sparkles } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalResults: number;
  totalRecipes: number;
  lang: 'si' | 'en';
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  setFilters,
  totalResults,
  totalRecipes,
  lang,
}) => {
  const isFiltered =
    filters.category !== 'all' ||
    filters.diet !== 'all' ||
    filters.difficulty !== 'all' ||
    filters.mealType !== 'all' ||
    filters.cookTime !== 'all' ||
    filters.searchQuery !== '';

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      diet: 'all',
      difficulty: 'all',
      mealType: 'all',
      cookTime: 'all',
      maxSpice: 4,
      onlyHeritage: false,
    });
  };

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 border border-stone-200 shadow-xs mb-8">
      {/* Category Pills Slider */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-stone-100">
        <button
          onClick={() => setFilters((prev) => ({ ...prev, category: 'all' }))}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
            filters.category === 'all'
              ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/20'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          {lang === 'si' ? '🌟 සියලු වර්ග' : '🌟 All Dishes'}
        </button>

        {CATEGORIES_METADATA.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilters((prev) => ({ ...prev, category: cat.id as CategoryType }))}
            className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold shrink-0 transition-all flex items-center gap-1.5 ${
              filters.category === cat.id
                ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/20'
                : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{lang === 'si' ? cat.sinhalaName : cat.name}</span>
          </button>
        ))}
      </div>

      {/* Secondary Multi-filters row */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Meal Type */}
          <div className="flex items-center gap-1 bg-stone-50 px-2 py-1.5 rounded-xl border border-stone-200">
            <span className="text-stone-700 font-semibold px-1">
              {lang === 'si' ? 'වේලාව:' : 'Meal:'}
            </span>
            <select
              value={filters.mealType}
              onChange={(e) => setFilters((prev) => ({ ...prev, mealType: e.target.value as any }))}
              className="bg-transparent font-medium text-stone-800 focus:outline-hidden cursor-pointer"
            >
              <option value="all">{lang === 'si' ? 'සියල්ල' : 'All'}</option>
              <option value="breakfast">{lang === 'si' ? 'උදෑසන' : 'Breakfast'}</option>
              <option value="lunch">{lang === 'si' ? 'දවල්' : 'Lunch'}</option>
              <option value="dinner">{lang === 'si' ? 'රාත්‍රී' : 'Dinner'}</option>
              <option value="tea-time">{lang === 'si' ? 'තේ වේලාව' : 'Tea Time'}</option>
            </select>
          </div>

          {/* Diet filter */}
          <div className="flex items-center gap-1 bg-stone-50 px-2 py-1.5 rounded-xl border border-stone-200">
            <span className="text-stone-700 font-semibold px-1">
              {lang === 'si' ? 'ආහාර පිළිවෙත:' : 'Diet:'}
            </span>
            <select
              value={filters.diet}
              onChange={(e) => setFilters((prev) => ({ ...prev, diet: e.target.value as DietType }))}
              className="bg-transparent font-medium text-stone-800 focus:outline-hidden cursor-pointer"
            >
              <option value="all">{lang === 'si' ? 'සියල්ල' : 'All Diets'}</option>
              <option value="vegetarian">{lang === 'si' ? 'නිර්මාංශ (Vegetarian)' : 'Vegetarian'}</option>
              <option value="vegan">{lang === 'si' ? 'වීගන් (Vegan)' : 'Vegan'}</option>
              <option value="non-vegetarian">{lang === 'si' ? 'මස්/මාළු සහිත (Non-Veg)' : 'Non-Veg'}</option>
            </select>
          </div>

          {/* Cooking Time Range */}
          <div className="flex items-center gap-1 bg-stone-50 px-2 py-1.5 rounded-xl border border-stone-200">
            <Clock className="w-3.5 h-3.5 text-stone-700" />
            <span className="text-stone-700 font-semibold px-1">
              {lang === 'si' ? 'පිසින කාලය:' : 'Time:'}
            </span>
            <select
              value={filters.cookTime}
              onChange={(e) => setFilters((prev) => ({ ...prev, cookTime: e.target.value as CookTimeRange }))}
              className="bg-transparent font-medium text-stone-800 focus:outline-hidden cursor-pointer"
            >
              <option value="all">{lang === 'si' ? 'සියල්ල' : 'Any Time'}</option>
              <option value="under-20">{lang === 'si' ? 'මිනිත්තු 20ට අඩු' : '< 20 mins'}</option>
              <option value="20-40">{lang === 'si' ? 'මිනිත්තු 20 - 40' : '20 - 40 mins'}</option>
              <option value="over-40">{lang === 'si' ? 'මිනිත්තු 40ට වැඩි' : '40+ mins'}</option>
            </select>
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-1 bg-stone-50 px-2 py-1.5 rounded-xl border border-stone-200">
            <span className="text-stone-700 font-semibold px-1">
              {lang === 'si' ? 'අපහසුතාව:' : 'Difficulty:'}
            </span>
            <select
              value={filters.difficulty}
              onChange={(e) => setFilters((prev) => ({ ...prev, difficulty: e.target.value as DifficultyType }))}
              className="bg-transparent font-medium text-stone-800 focus:outline-hidden cursor-pointer"
            >
              <option value="all">{lang === 'si' ? 'සියල්ල' : 'All Levels'}</option>
              <option value="easy">{lang === 'si' ? 'පහසු (Easy)' : 'Easy'}</option>
              <option value="medium">{lang === 'si' ? 'මධ්‍යම (Medium)' : 'Medium'}</option>
              <option value="hard">{lang === 'si' ? 'සංකීර්ණ (Hard)' : 'Hard'}</option>
            </select>
          </div>
        </div>

        {/* Counter and Reset */}
        <div className="flex items-center gap-3">
          <div className="text-xs text-stone-500 font-medium">
            {lang === 'si' ? (
              <>වට්ටෝරු <b>{totalResults}</b> ක් ({totalRecipes} න්)</>
            ) : (
              <>Showing <b>{totalResults}</b> of {totalRecipes} dishes</>
            )}
          </div>

          {isFiltered && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors border border-amber-200 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'si' ? 'ෆිල්ටර ඉවත් කරන්න' : 'Reset'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
