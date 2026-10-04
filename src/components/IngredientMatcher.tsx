import React, { useState, useMemo } from 'react';
import { PANTRY_ITEMS, PANTRY_CATEGORIES, COMMON_STAPLE_IDS } from '../data/pantryIngredients';
import { Recipe, MealType } from '../types/recipe';
import { 
  Sparkles, 
  Check, 
  X, 
  Clock, 
  Flame, 
  ChefHat, 
  AlertCircle, 
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';

interface IngredientMatcherProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  lang: 'si' | 'en';
}

export const IngredientMatcher: React.FC<IngredientMatcherProps> = ({
  recipes,
  onSelectRecipe,
  lang,
}) => {
  // Selected ingredients state
  const [selectedPantryIds, setSelectedPantryIds] = useState<string[]>([
    'rice',
    'scraped_coconut',
    'coconut_milk',
    'big_onion',
    'egg',
    'green_chilli',
    'chilli_powder',
    'coconut_oil'
  ]);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [ingredientSearch, setIngredientSearch] = useState<string>('');
  const [mealFilter, setMealFilter] = useState<'all' | MealType>('all');
  const [strictMode, setStrictMode] = useState<boolean>(false); // Only 100% matches

  // Toggle ingredient
  const toggleIngredient = (id: string) => {
    setSelectedPantryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Quick select all common staples
  const selectCommonStaples = () => {
    setSelectedPantryIds((prev) => {
      const combined = new Set([...prev, ...COMMON_STAPLE_IDS]);
      return Array.from(combined);
    });
  };

  // Clear all
  const clearAllIngredients = () => {
    setSelectedPantryIds([]);
  };

  // Filtered pantry items displayed in the selector
  const displayedPantryItems = useMemo(() => {
    return PANTRY_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        !ingredientSearch.trim() ||
        item.name.toLowerCase().includes(ingredientSearch.toLowerCase()) ||
        item.sinhalaName.includes(ingredientSearch);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, ingredientSearch]);

  // Matching calculation for recipes
  const matchedRecipes = useMemo(() => {
    if (selectedPantryIds.length === 0) return [];

    const scored = recipes.map((recipe) => {
      // Gather all required pantry keys
      const requiredIngredients = recipe.ingredients.filter((i) => !i.optional);
      const totalRequired = requiredIngredients.length;

      // Identify which are present and which are missing
      const present: string[] = [];
      const missing: typeof recipe.ingredients = [];

      requiredIngredients.forEach((ing) => {
        if (selectedPantryIds.includes(ing.pantryKey)) {
          present.push(ing.pantryKey);
        } else {
          missing.push(ing);
        }
      });

      const matchPercent = totalRequired > 0 ? Math.round((present.length / totalRequired) * 100) : 0;
      const isPerfectMatch = missing.length === 0;

      return {
        recipe,
        totalRequired,
        presentCount: present.length,
        matchPercent,
        isPerfectMatch,
        missingIngredients: missing,
      };
    });

    // Filter by strictness & meal time
    let filtered = scored;
    if (strictMode) {
      filtered = filtered.filter((item) => item.isPerfectMatch);
    } else {
      // Show recipes with at least 50% match
      filtered = filtered.filter((item) => item.matchPercent >= 40);
    }

    if (mealFilter !== 'all') {
      filtered = filtered.filter((item) => item.recipe.mealTypes.includes(mealFilter));
    }

    // Sort by match percentage (descending)
    return filtered.sort((a, b) => b.matchPercent - a.matchPercent);
  }, [recipes, selectedPantryIds, strictMode, mealFilter]);

  const readyToCookCount = useMemo(() => {
    return matchedRecipes.filter((r) => r.isPerfectMatch).length;
  }, [matchedRecipes]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs sm:text-sm font-bold mb-3 shadow-2xs">
          <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
          <span>{lang === 'si' ? 'අමුද්‍රව්‍ය ගලපනය' : 'Smart Pantry Matcher'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display">
          {lang === 'si'
            ? '🥘 ඔබ ළඟ ඇති අමුද්‍රව්‍ය වලින් මොනවද හදන්න පුළුවන්?'
            : '🥘 What Can I Cook With What I Have?'}
        </h2>
        <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
          {lang === 'si'
            ? 'ඔබේ කුස්සියේ මේ වනවිට තිබෙන සහල්, මස්, එළවළු, කුළුබඩු හෝ පොල් තෝරන්න. ඔබට සෑදිය හැකි සියලුම කෑම වර්ග ස්වයංක්‍රීයව ගණනය කර ඉදිරිපත් කෙරේ.'
            : 'Select ingredients available in your kitchen (rice, chicken, coconut, spices, eggs...). Our smart engine calculates which authentic Sri Lankan dishes you can whip up immediately!'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Ingredient Selection Shelf (5 cols on lg) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm flex flex-col">
          {/* Header of pantry */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-100">
            <div>
              <h3 className="font-bold text-stone-900 flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-amber-600" />
                <span>{lang === 'si' ? 'මගේ කුස්සියේ අමුද්‍රව්‍ය' : 'My Kitchen Pantry'}</span>
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                {selectedPantryIds.length} {lang === 'si' ? 'ක් තෝරාගෙන ඇත' : 'ingredients selected'}
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={selectCommonStaples}
                className="px-2.5 py-1 text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg border border-amber-200 transition-colors"
                title={lang === 'si' ? 'මූලික කුළුබඩු සහ පොල් තෝරන්න' : 'Select basic spices & staples'}
              >
                {lang === 'si' ? '⚡ මූලික ද්‍රව්‍ය' : '⚡ Add Staples'}
              </button>
              {selectedPantryIds.length > 0 && (
                <button
                  onClick={clearAllIngredients}
                  className="px-2 py-1 text-xs font-semibold text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
                >
                  {lang === 'si' ? 'හිස් කරන්න' : 'Clear'}
                </button>
              )}
            </div>
          </div>

          {/* Search within pantry */}
          <div className="mt-4">
            <input
              type="text"
              value={ingredientSearch}
              onChange={(e) => setIngredientSearch(e.target.value)}
              placeholder={lang === 'si' ? 'අමුද්‍රව්‍ය සොයන්න (උදා: බිත්තර, මස්, පරිප්පු)...' : 'Filter ingredients...'}
              className="w-full px-3.5 py-2 text-sm bg-stone-50 rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-stone-800"
            />
          </div>

          {/* Category filter pills */}
          <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-full shrink-0 transition-colors ${
                activeCategory === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {lang === 'si' ? 'සියල්ල' : 'All'}
            </button>
            {PANTRY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 text-xs font-semibold rounded-full shrink-0 transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {lang === 'si' ? cat.sinhalaName : cat.name}
              </button>
            ))}
          </div>

          {/* Ingredient Pills Grid */}
          <div className="mt-3 overflow-y-auto max-h-[460px] pr-1 space-y-1.5">
            <div className="grid grid-cols-2 gap-2">
              {displayedPantryItems.map((item) => {
                const isSelected = selectedPantryIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleIngredient(item.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-medium flex items-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-amber-50 border-amber-400 text-amber-950 font-semibold shadow-xs ring-1 ring-amber-400/50'
                        : 'bg-stone-50/70 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span className="text-base shrink-0">{item.icon}</span>
                    <span className="truncate flex-1 leading-snug">
                      {lang === 'si' ? item.sinhalaName : item.name}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-amber-600 text-white'
                          : 'border border-stone-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Recipe Matches (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Controls Bar for results */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-stone-900">
                {lang === 'si' ? '🍛 හමුවූ වට්ටෝරු' : '🍛 Matching Recipes'}
              </span>
              <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 text-xs font-extrabold rounded-full">
                {matchedRecipes.length}
              </span>
              {readyToCookCount > 0 && (
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {readyToCookCount} {lang === 'si' ? 'ක් සම්පූර්ණයි!' : 'Ready now!'}
                </span>
              )}
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              {/* Meal Filter */}
              <select
                value={mealFilter}
                onChange={(e) => setMealFilter(e.target.value as any)}
                className="text-xs bg-stone-50 border border-stone-300 rounded-lg px-2.5 py-1.5 text-stone-700 focus:outline-hidden focus:ring-1 focus:ring-amber-500 font-medium"
              >
                <option value="all">{lang === 'si' ? 'සියලු වේලාවන්' : 'All Meals'}</option>
                <option value="breakfast">{lang === 'si' ? 'උදෑසන' : 'Breakfast'}</option>
                <option value="lunch">{lang === 'si' ? 'දවල්' : 'Lunch'}</option>
                <option value="dinner">{lang === 'si' ? 'රාත්‍රී' : 'Dinner'}</option>
                <option value="tea-time">{lang === 'si' ? 'තේ වේලාව' : 'Tea Time'}</option>
              </select>

              {/* Strict Mode Toggle */}
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-stone-700 select-none">
                <input
                  type="checkbox"
                  checked={strictMode}
                  onChange={(e) => setStrictMode(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                />
                <span>{lang === 'si' ? '100% ඇති දේවල් පමණක්' : '100% Ready only'}</span>
              </label>
            </div>
          </div>

          {/* Results List */}
          {matchedRecipes.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 border border-stone-200 text-center flex-1 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-stone-800">
                {lang === 'si' ? 'කිසිදු වට්ටෝරුවක් හමු නොවීය' : 'No matching dishes found'}
              </h3>
              <p className="mt-1 text-sm text-stone-500 max-w-sm">
                {strictMode
                  ? (lang === 'si' 
                      ? 'අවශ්‍ය සියලුම අමුද්‍රව්‍ය නොමැත. "100% ඇති දේවල් පමණක්" ඉවත් කර හෝ තවත් අමුද්‍රව්‍ය කිහිපයක් තෝරන්න.' 
                      : 'Uncheck "100% Ready only" or select a few more pantry items like coconut milk, onions, or rice.')
                  : (lang === 'si'
                      ? 'කරුණාකර වම් පසින් ඔබේ කුස්සියේ ඇති අමුද්‍රව්‍ය තෝරන්න.'
                      : 'Please select a few ingredients from your kitchen pantry on the left to see results.')}
              </p>
              <button
                onClick={selectCommonStaples}
                className="mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                {lang === 'si' ? 'මූලික අමුද්‍රව්‍ය ස්වයංක්‍රීයව තෝරන්න' : 'Select Common Staples for Me'}
              </button>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto max-h-[620px] pr-1">
              {matchedRecipes.map(({ recipe, matchPercent, isPerfectMatch, missingIngredients, presentCount, totalRequired }) => (
                <div
                  key={recipe.id}
                  onClick={() => onSelectRecipe(recipe)}
                  className="group bg-white rounded-2xl p-4 border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  {/* Dish Image */}
                  <div className="relative w-full sm:w-28 h-32 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      {isPerfectMatch ? (
                        <span className="px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-extrabold rounded-md shadow-xs flex items-center gap-1">
                          <Check className="w-3 h-3 stroke-[3]" />
                          100%
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-amber-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                          {matchPercent}%
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dish Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-stone-100 text-stone-700 rounded-md">
                        {recipe.mealTypes.map(m => m).join(', ')}
                      </span>
                      <span className="text-xs text-stone-700 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {recipe.cookTime} {lang === 'si' ? 'මිනි' : 'min'}
                      </span>
                      <span className="text-xs text-stone-700 flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-orange-500" />
                        {recipe.difficulty}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                      {lang === 'si' ? recipe.sinhalaName : recipe.name}
                    </h4>
                    <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                      {lang === 'si' ? recipe.sinhalaTagline : recipe.tagline}
                    </p>

                    {/* Missing / Matched breakdown */}
                    <div className="mt-2.5">
                      {isPerfectMatch ? (
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {lang === 'si'
                            ? 'ඔබ ළඟ අවශ්‍ය සියලු අමුද්‍රව්‍ය ඇත! දැන්ම පිසින්න.'
                            : 'You have all ingredients! Ready to cook immediately.'}
                        </span>
                      ) : (
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[11px] font-semibold text-amber-900">
                            {lang === 'si' 
                              ? `අඩු අමුද්‍රව්‍ය (${missingIngredients.length}):` 
                              : `Missing (${missingIngredients.length}):`}
                          </span>
                          {missingIngredients.map((m, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] bg-amber-50 text-amber-900 border border-amber-200/80 px-2 py-0.5 rounded-md"
                            >
                              {lang === 'si' ? m.sinhalaName : m.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Arrow */}
                  <div className="hidden sm:flex items-center text-amber-600 group-hover:translate-x-1 transition-transform self-center pr-2">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
