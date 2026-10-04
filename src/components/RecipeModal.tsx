import React, { useState } from 'react';
import { Recipe } from '../types/recipe';
import { CookingTimer } from './CookingTimer';
import { 
  X, 
  Heart, 
  Clock, 
  Flame, 
  Users, 
  Check, 
  Sparkles, 
  Printer, 
  Share2, 
  ChefHat, 
  UtensilsCrossed, 
  Info,
  CheckCircle2,
  Activity,
  Dumbbell,
  Droplets,
  Wheat
} from 'lucide-react';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  lang: 'si' | 'en';
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  onClose,
  isFavorite,
  onToggleFavorite,
  lang,
}) => {
  if (!recipe) return null;

  // Servings multiplier state
  const baseServings = recipe.servings || 4;
  const [servings, setServings] = useState<number>(baseServings);
  const scale = servings / baseServings;

  // Checked ingredients tracker
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  // Completed steps tracker
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  // Share notification
  const [copiedShare, setCopiedShare] = useState(false);

  const toggleIngredientCheck = (name: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const toggleStepCompleted = (stepNumber: number) => {
    setCompletedSteps((prev) => ({ ...prev, [stepNumber]: !prev[stepNumber] }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Format scaled ingredient amount nicely
  const formatAmount = (amount: number, unit: string) => {
    const scaled = amount * scale;
    // Format if clean number or fractions
    if (Number.isInteger(scaled)) return scaled.toString();
    const rounded = Math.round(scaled * 10) / 10;
    return rounded.toString();
  };

  // Nutritional values per serving
  const calories = recipe.caloriesPerServing;
  const protein = recipe.proteinPerServing ?? 0;
  const fat = recipe.fatPerServing ?? 0;
  const carbs = recipe.carbsPerServing ?? Math.max(0, Math.round((calories - (protein * 4 + fat * 9)) / 4));

  const totalMacroGrams = Math.max(1, protein + fat + carbs);
  const proteinPercent = Math.round((protein / totalMacroGrams) * 100);
  const fatPercent = Math.round((fat / totalMacroGrams) * 100);
  const carbsPercent = Math.max(0, 100 - proteinPercent - fatPercent);

  // Daily Value percentages based on 2,000 calorie reference diet
  const caloriesDv = Math.round((calories / 2000) * 100);
  const proteinDv = Math.round((protein / 50) * 100);
  const fatDv = Math.round((fat / 65) * 100);
  const carbsDv = Math.round((carbs / 275) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close and Share */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-stone-900">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/30" />

          {/* Action buttons on top of image */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all cursor-pointer"
              title="Share Recipe"
            >
              <Share2 className="w-5 h-5" />
            </button>

            <button
              onClick={handlePrint}
              className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all cursor-pointer"
              title="Print Recipe"
            >
              <Printer className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => onToggleFavorite(recipe.id, e)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                isFavorite
                  ? 'bg-rose-600 text-white'
                  : 'bg-black/40 hover:bg-black/60 text-white'
              }`}
              title="Save to favorites"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer ml-1"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {copiedShare && (
            <div className="absolute top-16 right-4 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-lg animate-in fade-in">
              {lang === 'si' ? 'ලින්ක් එක කොපි විය!' : 'Link copied to clipboard!'}
            </div>
          )}

          {/* Title and metadata on hero */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider">
                {recipe.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-xs text-xs font-semibold">
                {recipe.difficulty}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-xs text-xs font-semibold">
                {'🌶️'.repeat(recipe.spiceLevel)} {lang === 'si' ? 'සැර' : 'Spice'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight">
              {lang === 'si' ? recipe.sinhalaName : recipe.name}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-medium mt-1">
              {lang === 'si' ? recipe.name : recipe.sinhalaName}
            </p>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-center">
            <div>
              <p className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider">
                {lang === 'si' ? 'සූදානම් කාලය' : 'Prep Time'}
              </p>
              <p className="text-base font-bold text-stone-900 mt-0.5 flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{recipe.prepTime} min</span>
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider">
                {lang === 'si' ? 'පිසින කාලය' : 'Cook Time'}
              </p>
              <p className="text-base font-bold text-stone-900 mt-0.5 flex items-center justify-center gap-1">
                <Flame className="w-4 h-4 text-orange-600" />
                <span>{recipe.cookTime} min</span>
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider">
                {lang === 'si' ? 'කැලරි (එක් වේලකට)' : 'Calories'}
              </p>
              <p className="text-base font-bold text-stone-900 mt-0.5">
                {recipe.caloriesPerServing} kcal
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider">
                {lang === 'si' ? 'ආහාර පිළිවෙත' : 'Diet'}
              </p>
              <p className="text-base font-bold text-stone-900 mt-0.5 capitalize">
                {recipe.diet}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="text-stone-700 text-sm sm:text-base leading-relaxed bg-amber-50/50 p-4 rounded-2xl border border-amber-200/50">
            <p>{lang === 'si' ? recipe.sinhalaDescription : recipe.description}</p>
          </div>

          {/* Nutritional Facts Panel */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-xs space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 shadow-2xs">
                  <Activity className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                      {lang === 'si' ? 'පෝෂණ ගුණය' : 'Nutritional Facts'}
                    </h3>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200/60">
                      {lang === 'si' ? 'එක් වේලකට' : 'Per Serving'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {lang === 'si'
                      ? `මුළු වට්ටෝරුවෙන් වේල් ${recipe.servings} ක් සඳහා (ඇස්තමේන්තුගත අගයන්)`
                      : `Yields ${recipe.servings} servings in total (estimated nutritional values)`}
                  </p>
                </div>
              </div>

              <div className="text-xs text-stone-500 font-medium bg-stone-50 px-3 py-1.5 rounded-xl border border-stone-200/80">
                <span>{lang === 'si' ? 'සම්මත වේල: ' : 'Standard Serving: '}</span>
                <span className="font-bold text-stone-800">1 / {recipe.servings}</span>
              </div>
            </div>

            {/* 4 Nutrient Stat Cards: Calories, Protein, Fat, Carbs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {/* Calories */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-50/80 to-amber-50/50 border border-orange-200/80 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-orange-950 font-bold mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>{lang === 'si' ? 'කැලරි' : 'Calories'}</span>
                  </span>
                  <span className="text-[10px] bg-orange-200/80 text-orange-950 font-extrabold px-1.5 py-0.5 rounded-md">
                    {caloriesDv}% DV
                  </span>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-stone-900 font-mono tracking-tight">
                    {calories}
                  </p>
                  <span className="text-xs font-semibold text-stone-500 font-sans">
                    kcal / {lang === 'si' ? 'වේලකට' : 'serving'}
                  </span>
                </div>
              </div>

              {/* Protein */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 border border-blue-200/80 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-blue-950 font-bold mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Dumbbell className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{lang === 'si' ? 'ප්‍රෝටීන' : 'Protein'}</span>
                  </span>
                  <span className="text-[10px] bg-blue-200/80 text-blue-950 font-extrabold px-1.5 py-0.5 rounded-md">
                    {proteinDv}% DV
                  </span>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-stone-900 font-mono tracking-tight">
                    {protein}<span className="text-base font-bold text-stone-600 font-sans ml-0.5">g</span>
                  </p>
                  <span className="text-xs font-semibold text-stone-500 font-sans">
                    {proteinPercent}% {lang === 'si' ? 'මහාපෝෂක' : 'of macros'}
                  </span>
                </div>
              </div>

              {/* Fat */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/90 to-yellow-50/50 border border-amber-300/80 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-amber-950 font-bold mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{lang === 'si' ? 'මේදය (Fat)' : 'Total Fat'}</span>
                  </span>
                  <span className="text-[10px] bg-amber-200/80 text-amber-950 font-extrabold px-1.5 py-0.5 rounded-md">
                    {fatDv}% DV
                  </span>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-stone-900 font-mono tracking-tight">
                    {fat}<span className="text-base font-bold text-stone-600 font-sans ml-0.5">g</span>
                  </p>
                  <span className="text-xs font-semibold text-stone-500 font-sans">
                    {fatPercent}% {lang === 'si' ? 'මහාපෝෂක' : 'of macros'}
                  </span>
                </div>
              </div>

              {/* Carbohydrates */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-50/50 border border-emerald-200/80 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-emerald-950 font-bold mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Wheat className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{lang === 'si' ? 'කාබෝහයිඩ්‍රේට්' : 'Carbs'}</span>
                  </span>
                  <span className="text-[10px] bg-emerald-200/80 text-emerald-950 font-extrabold px-1.5 py-0.5 rounded-md">
                    {carbsDv}% DV
                  </span>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-stone-900 font-mono tracking-tight">
                    {carbs}<span className="text-base font-bold text-stone-600 font-sans ml-0.5">g</span>
                  </p>
                  <span className="text-xs font-semibold text-stone-500 font-sans">
                    {carbsPercent}% {lang === 'si' ? 'මහාපෝෂක' : 'of macros'}
                  </span>
                </div>
              </div>
            </div>

            {/* Macronutrient Balance Split Bar */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/70 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-stone-700 font-semibold">
                <span>{lang === 'si' ? 'පෝෂක සංයුතිය (Macronutrient Distribution by Weight)' : 'Macronutrient Distribution (by Weight)'}</span>
                <span className="font-mono text-stone-500 text-[11px]">{totalMacroGrams}g Total</span>
              </div>

              <div className="h-3 w-full bg-stone-200/80 rounded-full overflow-hidden flex shadow-inner">
                <div
                  style={{ width: `${proteinPercent}%` }}
                  className="bg-blue-500 h-full transition-all duration-500"
                  title={`Protein: ${protein}g (${proteinPercent}%)`}
                />
                <div
                  style={{ width: `${fatPercent}%` }}
                  className="bg-amber-500 h-full transition-all duration-500"
                  title={`Fat: ${fat}g (${fatPercent}%)`}
                />
                <div
                  style={{ width: `${carbsPercent}%` }}
                  className="bg-emerald-500 h-full transition-all duration-500"
                  title={`Carbohydrates: ${carbs}g (${carbsPercent}%)`}
                />
              </div>

              {/* Legend with grams and percentages */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-0.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-blue-500 shrink-0" />
                  <span className="text-stone-700 font-medium">{lang === 'si' ? 'ප්‍රෝටීන' : 'Protein'}:</span>
                  <span className="font-bold text-stone-900">{protein}g</span>
                  <span className="text-stone-500 text-[11px]">({proteinPercent}%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-amber-500 shrink-0" />
                  <span className="text-stone-700 font-medium">{lang === 'si' ? 'මේදය (Fat)' : 'Fat'}:</span>
                  <span className="font-bold text-stone-900">{fat}g</span>
                  <span className="text-stone-500 text-[11px]">({fatPercent}%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-emerald-500 shrink-0" />
                  <span className="text-stone-700 font-medium">{lang === 'si' ? 'කාබෝහයිඩ්‍රේට්' : 'Carbs'}:</span>
                  <span className="font-bold text-stone-900">{carbs}g</span>
                  <span className="text-stone-500 text-[11px]">({carbsPercent}%)</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 italic">
              * {lang === 'si'
                ? 'දෛනික අගය ප්‍රතිශතය (% Daily Value) දිනකට කැලරි 2,000 ක ආහාර වේලක් පදනම් කරගෙන ඇත. පොල්කිරි උකුකම සහ තෙල් භාවිතය අනුව සැබෑ අගයන් සුළු වශයෙන් වෙනස් විය හැක.'
                : '% Daily Values (DV) are based on a standard 2,000 calorie diet. Actual values may vary depending on coconut milk thickness and oil quantities.'}
            </p>
          </div>

          {/* Two-Column: Ingredients & Servings Scaler (Left) + Step Instructions (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Ingredients Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-amber-700" />
                  <span>{lang === 'si' ? 'අවශ්‍ය ද්‍රව්‍ය සහ ප්‍රමාණ' : 'Ingredients'}</span>
                </h3>

                {/* Servings Scaler */}
                <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl">
                  <button
                    onClick={() => setServings(Math.max(1, servings - 1))}
                    className="w-6 h-6 rounded-lg bg-white font-bold text-stone-700 hover:bg-amber-100 flex items-center justify-center text-xs shadow-2xs cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-stone-800 px-1.5 min-w-[28px] text-center">
                    {servings}
                  </span>
                  <button
                    onClick={() => setServings(servings + 1)}
                    className="w-6 h-6 rounded-lg bg-white font-bold text-stone-700 hover:bg-amber-100 flex items-center justify-center text-xs shadow-2xs cursor-pointer"
                  >
                    +
                  </button>
                  <span className="text-[10px] text-stone-700 pl-0.5 pr-1">
                    {lang === 'si' ? 'දෙනෙකුට' : 'ppl'}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-700 italic">
                {lang === 'si'
                  ? 'අමුද්‍රව්‍ය ලෑස්ති කරගත් පසු ලකුණු කරන්න (Check):'
                  : 'Check off ingredients as you prepare them:'}
              </p>

              {/* Ingredients list */}
              <div className="space-y-2">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[ing.name];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleIngredientCheck(ing.name)}
                      className={`p-2.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-stone-50 border-stone-200 text-stone-400 line-through'
                          : 'bg-white border-stone-200 text-stone-800 hover:border-amber-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'bg-emerald-600 text-white'
                              : 'border border-stone-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">
                          {lang === 'si' ? ing.sinhalaName : ing.name}
                          {ing.optional && (
                            <span className="ml-1 text-[10px] text-stone-700 not-italic">
                              ({lang === 'si' ? 'අවශ්‍ය නම්' : 'optional'})
                            </span>
                          )}
                        </span>
                      </div>

                      <span className="font-bold text-amber-900 shrink-0">
                        {formatAmount(ing.amount, ing.unit)} {ing.unit}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instructions Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="pb-2 border-b border-stone-200">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-amber-700" />
                  <span>{lang === 'si' ? 'පිසින පිළිවෙළ (ක්‍රමය)' : 'Step-by-Step Instructions'}</span>
                </h3>
              </div>

              {/* Steps list */}
              <div className="space-y-5">
                {recipe.instructions.map((step) => {
                  const isDone = !!completedSteps[step.stepNumber];
                  return (
                    <div
                      key={step.stepNumber}
                      className={`p-4 rounded-2xl border transition-all ${
                        isDone
                          ? 'bg-emerald-50/50 border-emerald-200'
                          : 'bg-white border-stone-200 hover:border-amber-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold ${
                            isDone ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
                          }`}>
                            {step.stepNumber}
                          </span>
                          <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                            {lang === 'si' ? step.sinhalaTitle : step.title}
                          </h4>
                        </div>

                        <button
                          onClick={() => toggleStepCompleted(step.stepNumber)}
                          className={`text-xs font-semibold px-2 py-1 rounded-lg border transition-colors cursor-pointer flex items-center gap-1 ${
                            isDone
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border-stone-200'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{isDone ? (lang === 'si' ? 'සම්පූර්ණයි' : 'Done') : (lang === 'si' ? 'ලකුණු කරන්න' : 'Mark Done')}</span>
                        </button>
                      </div>

                      <p className={`text-xs sm:text-sm leading-relaxed ${isDone ? 'text-stone-700' : 'text-stone-700'}`}>
                        {lang === 'si' ? step.sinhalaText : step.text}
                      </p>

                      {/* Built-in timer for steps with duration */}
                      {step.durationMinutes && (
                        <div className="mt-3">
                          <CookingTimer
                            initialMinutes={step.durationMinutes}
                            label={`${lang === 'si' ? 'පියවර' : 'Step'} ${step.stepNumber} ${lang === 'si' ? 'කාල ගණකය' : 'Timer'}`}
                            lang={lang}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Authentic Sri Lankan Chef Secrets ("රස රහස්") */}
          <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-700/10 p-5 sm:p-6 rounded-3xl border border-amber-300/80">
            <h4 className="text-base font-bold text-amber-950 flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-amber-700 fill-amber-500" />
              <span>{lang === 'si' ? 'රස රහස් (Authentic Chef Secrets)' : 'Authentic Sri Lankan Chef Secrets'}</span>
            </h4>
            <ul className="space-y-2">
              {(lang === 'si' ? recipe.sinhalaChefTips : recipe.chefTips).map((tip, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-stone-800 flex items-start gap-2 leading-relaxed">
                  <span className="text-amber-700 font-bold mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Serving Suggestions */}
          <div className="bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                {lang === 'si' ? 'පිළිගැන්වීමේ යෝජනා' : 'Serving Suggestions & Pairings'}
              </h5>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {lang === 'si' ? recipe.sinhalaServingSuggestions : recipe.servingSuggestions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
