import React, { useState, useEffect, useMemo } from 'react';
import { Recipe, FilterState, CategoryType } from './types/recipe';
import { RECIPES } from './data/recipes';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { IngredientMatcher } from './components/IngredientMatcher';
import { CategoryShowcase } from './components/CategoryShowcase';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { SpiceHeritageModal } from './components/SpiceHeritageModal';
import { Footer } from './components/Footer';
import { Sparkles, Utensils, Compass, ChefHat, Heart, BookOpen, AlertCircle } from 'lucide-react';

export default function App() {
  // Active navigation tab
  const [activeTab, setActiveTab] = useState<'recipes' | 'matcher' | 'categories' | 'spices'>('recipes');

  // Language state (Sinhala 'si' or English 'en')
  const [lang, setLang] = useState<'si' | 'en'>(() => {
    const saved = localStorage.getItem('rasapiya_lang');
    return (saved === 'en' || saved === 'si') ? saved : 'si';
  });

  useEffect(() => {
    localStorage.setItem('rasapiya_lang', lang);
  }, [lang]);

  // Favorites state (array of recipe IDs)
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rasapiya_favorites');
      return saved ? JSON.parse(saved) : ['chicken-kottu', 'kiribath-lunu-miris'];
    } catch {
      return ['chicken-kottu', 'kiribath-lunu-miris'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('rasapiya_favorites', JSON.stringify(favoriteIds));
    } catch (e) {
      // Storage safe fallback
    }
  }, [favoriteIds]);

  // Selected recipe for detail modal
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Modals state
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isSpiceGuideOpen, setIsSpiceGuideOpen] = useState(false);

  // Multi-dimensional filters
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
    diet: 'all',
    difficulty: 'all',
    mealType: 'all',
    cookTime: 'all',
    maxSpice: 4,
    onlyHeritage: false,
  });

  // Toggle favorite
  const toggleFavorite = (recipeId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavoriteIds((prev) =>
      prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]
    );
  };

  const removeFavorite = (recipeId: string) => {
    setFavoriteIds((prev) => prev.filter((id) => id !== recipeId));
  };

  const clearAllFavorites = () => {
    setFavoriteIds([]);
  };

  // Filter recipes based on state
  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((recipe) => {
      // Search query filter (matches English name, Sinhala name, ingredients, taglines)
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesName =
          recipe.name.toLowerCase().includes(query) ||
          recipe.sinhalaName.includes(query) ||
          recipe.tagline.toLowerCase().includes(query) ||
          recipe.sinhalaTagline.includes(query);

        const matchesIngredient = recipe.ingredients.some(
          (ing) =>
            ing.name.toLowerCase().includes(query) ||
            ing.sinhalaName.includes(query)
        );

        if (!matchesName && !matchesIngredient) {
          return false;
        }
      }

      // Category filter
      if (filters.category !== 'all' && recipe.category !== filters.category) {
        return false;
      }

      // Meal type filter
      if (filters.mealType !== 'all' && !recipe.mealTypes.includes(filters.mealType)) {
        return false;
      }

      // Diet filter
      if (filters.diet !== 'all') {
        if (filters.diet === 'vegetarian' && recipe.diet !== 'vegetarian' && recipe.diet !== 'vegan') {
          return false;
        }
        if (filters.diet === 'vegan' && recipe.diet !== 'vegan') {
          return false;
        }
        if (filters.diet === 'non-vegetarian' && recipe.diet !== 'non-vegetarian') {
          return false;
        }
      }

      // Difficulty filter
      if (filters.difficulty !== 'all' && recipe.difficulty !== filters.difficulty) {
        return false;
      }

      // Cook time range
      if (filters.cookTime !== 'all') {
        if (filters.cookTime === 'under-20' && recipe.cookTime > 20) return false;
        if (filters.cookTime === '20-40' && (recipe.cookTime <= 20 || recipe.cookTime > 40)) return false;
        if (filters.cookTime === 'over-40' && recipe.cookTime <= 40) return false;
      }

      return true;
    });
  }, [filters]);

  // Favorite recipe objects
  const favoriteRecipes = useMemo(() => {
    return RECIPES.filter((r) => favoriteIds.includes(r.id));
  }, [favoriteIds]);

  // Featured / Heritage highlight recipes
  const popularRecipes = useMemo(() => {
    return RECIPES.filter((r) => r.isPopular);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-stone-800">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favoriteIds.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        lang={lang}
        setLang={setLang}
        onOpenSpiceGuide={() => setIsSpiceGuideOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {/* TAB 1: ALL RECIPES / HOME */}
        {activeTab === 'recipes' && (
          <div>
            {/* Hero Section */}
            <Hero
              searchQuery={filters.searchQuery}
              setSearchQuery={(query) => setFilters((prev) => ({ ...prev, searchQuery: query }))}
              onOpenMatcher={() => setActiveTab('matcher')}
              onSelectQuickTag={(query) => {
                setFilters((prev) => ({ ...prev, searchQuery: query }));
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              lang={lang}
            />

            {/* Popular Carousel / Highlights when not actively searching */}
            {!filters.searchQuery && filters.category === 'all' && (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                      <Sparkles className="w-4 h-4 fill-amber-500" />
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-900">
                      {lang === 'si' ? '🔥 ජනප්‍රියම හෙළ බොජුන්' : '🔥 Popular Sri Lankan Classics'}
                    </h2>
                  </div>
                  <span className="text-xs text-stone-500 font-semibold">
                    {lang === 'si' ? 'සැමගේ ප්‍රියතම' : "Cook's Favorites"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {popularRecipes.slice(0, 4).map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      isFavorite={favoriteIds.includes(recipe.id)}
                      onToggleFavorite={toggleFavorite}
                      onSelect={setSelectedRecipe}
                      lang={lang}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Main Recipes Grid with Filters */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-stone-900">
                    {lang === 'si' ? 'වට්ටෝරු එකතුව' : 'All Recipes'}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    {lang === 'si'
                      ? 'අවශ්‍ය පරිදි වර්ගීකරණයෙන් හෝ ආහාර වේල අනුව තෝරාගන්න'
                      : 'Filter by meal type, dietary preference, or prep time'}
                  </p>
                </div>
              </div>

              {/* Multi-Filter Bar */}
              <FilterBar
                filters={filters}
                setFilters={setFilters}
                totalResults={filteredRecipes.length}
                totalRecipes={RECIPES.length}
                lang={lang}
              />

              {/* Recipe Cards Grid */}
              {filteredRecipes.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-lg mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-700 mx-auto mb-4">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">
                    {lang === 'si' ? 'කිසිදු වට්ටෝරුවක් හමු නොවීය' : 'No recipes matched your search'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                    {lang === 'si'
                      ? 'වෙනත් වචනයකින් සොයන්න හෝ ෆිල්ටර ඉවත් කරන්න.'
                      : 'Try broadening your search criteria or resetting filters.'}
                  </p>
                  <button
                    onClick={() =>
                      setFilters({
                        searchQuery: '',
                        category: 'all',
                        diet: 'all',
                        difficulty: 'all',
                        mealType: 'all',
                        cookTime: 'all',
                        maxSpice: 4,
                        onlyHeritage: false,
                      })
                    }
                    className="mt-5 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    {lang === 'si' ? 'සියලු වට්ටෝරු නැවත පෙන්වන්න' : 'Show All Recipes'}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredRecipes.map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      isFavorite={favoriteIds.includes(recipe.id)}
                      onToggleFavorite={toggleFavorite}
                      onSelect={setSelectedRecipe}
                      lang={lang}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {/* TAB 2: INGREDIENT MATCHER (PANTRY) */}
        {activeTab === 'matcher' && (
          <IngredientMatcher
            recipes={RECIPES}
            onSelectRecipe={setSelectedRecipe}
            lang={lang}
          />
        )}

        {/* TAB 3: CATEGORIES SHOWCASE */}
        {activeTab === 'categories' && (
          <CategoryShowcase
            recipes={RECIPES}
            onSelectCategory={(category) => {
              setFilters((prev) => ({ ...prev, category }));
              setActiveTab('recipes');
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            lang={lang}
          />
        )}
      </main>

      {/* Recipe Detail Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        isFavorite={selectedRecipe ? favoriteIds.includes(selectedRecipe.id) : false}
        onToggleFavorite={toggleFavorite}
        lang={lang}
      />

      {/* Saved / Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favoriteRecipes}
        onRemoveFavorite={removeFavorite}
        onClearAll={clearAllFavorites}
        onSelectRecipe={setSelectedRecipe}
        lang={lang}
      />

      {/* Spice Heritage Guide Modal */}
      <SpiceHeritageModal
        isOpen={isSpiceGuideOpen}
        onClose={() => setIsSpiceGuideOpen(false)}
        lang={lang}
      />

      {/* Footer */}
      <Footer
        onSelectCategory={(category) => {
          setFilters((prev) => ({ ...prev, category }));
          setActiveTab('recipes');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenMatcher={() => {
          setActiveTab('matcher');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSpiceGuide={() => setIsSpiceGuideOpen(true)}
        lang={lang}
      />
    </div>
  );
}
