import React from 'react';
import { CATEGORIES_METADATA } from '../data/recipes';
import { Recipe, CategoryType } from '../types/recipe';
import { ArrowRight, Compass } from 'lucide-react';

interface CategoryShowcaseProps {
  recipes: Recipe[];
  onSelectCategory: (category: CategoryType) => void;
  lang: 'si' | 'en';
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  recipes,
  onSelectCategory,
  lang,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold mb-3 shadow-2xs">
          <Compass className="w-4 h-4 text-amber-700" />
          <span>{lang === 'si' ? 'හෙළ ආහාර වර්ග' : 'Heritage Food Categories'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display">
          {lang === 'si' ? '🍛 සාම්ප්‍රදායික ආහාර වර්ගීකරණය' : '🍛 Explore Sri Lankan Food Categories'}
        </h2>
        <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
          {lang === 'si'
            ? 'දිනපතා බත් පතේ සිට වීදි ආහාර, උත්සව කැවිලි සහ ඖෂධීය පාන දක්වා අපේ ආහාර සංස්කෘතියේ විවිධත්වය රසවිඳින්න.'
            : 'From daily staple rice & curries to sizzling street food, festival sweets, and restorative Ayurvedic porridges.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES_METADATA.map((cat) => {
          const count = recipes.filter((r) => r.category === cat.id).length;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as CategoryType)}
              className="group bg-white rounded-3xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center text-3xl shadow-inner transition-colors">
                    {cat.icon}
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full">
                    {count} {lang === 'si' ? 'වට්ටෝරු' : 'recipes'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                  {lang === 'si' ? cat.sinhalaName : cat.name}
                </h3>
                <p className="text-xs text-stone-500 font-medium mt-0.5">
                  {lang === 'si' ? cat.name : cat.sinhalaName}
                </p>

                <p className="text-xs text-stone-600 mt-2.5 leading-relaxed line-clamp-2">
                  {lang === 'si' ? cat.sinhalaDescription : cat.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800">
                <span>{lang === 'si' ? 'සියල්ල බලන්න' : 'Explore Category'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
