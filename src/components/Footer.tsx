import React from 'react';
import { Flame, Heart, Sparkles, ChefHat } from 'lucide-react';
import { CategoryType } from '../types/recipe';

interface FooterProps {
  onSelectCategory: (category: CategoryType) => void;
  onOpenMatcher: () => void;
  onOpenSpiceGuide: () => void;
  lang: 'si' | 'en';
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenMatcher,
  onOpenSpiceGuide,
  lang,
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-600 flex items-center justify-center text-white">
                <Flame className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-display text-white">
                {lang === 'si' ? 'රස පියස' : 'Rasa Piya'}
              </span>
            </div>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              {lang === 'si'
                ? 'ශ්‍රී ලංකාවේ පාරම්පරික ආහාර සංස්කෘතිය, රස රහස් සහ වට්ටෝරු එකතුව. නිවසේ ඇති අමුද්‍රව්‍ය වලින් ක්ෂණිකව කෑම වර්ග සොයාගන්න.'
                : 'Celebrating Sri Lankan culinary heritage: stone-ground sambols, clay pot curries, street kottu, and authentic sweetmeats.'}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 text-amber-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'si' ? '100% දේශීය වට්ටෝරු' : '100% Authentic Recipes'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 text-orange-400 text-xs font-semibold">
                <ChefHat className="w-3.5 h-3.5" />
                <span>{lang === 'si' ? 'පියවරෙන් පියවර' : 'Step-by-step Timers'}</span>
              </span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {lang === 'si' ? 'ජනප්‍රිය ආහාර' : 'Popular Categories'}
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('rice-curry')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'si' ? 'බත් සහ වෑංජන' : 'Rice & Curry'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('roti')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'si' ? 'චිකන් කොත්තු සහ රොටී' : 'Kottu & Roti'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('hoppers')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'si' ? 'බිත්තර ආප්ප සහ ඉඳිආප්ප' : 'Hoppers & String Hoppers'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('sambols')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'si' ? 'පොල් සම්බෝල සහ සීනි සම්බෝල' : 'Pol Sambol & Seeni Sambol'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('sweets')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {lang === 'si' ? 'කොණ්ඩ කැවුම් සහ කැවිලි' : 'Traditional Sweets (Kavum)'}
                </button>
              </li>
            </ul>
          </div>

          {/* Special Tools */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {lang === 'si' ? 'විශේෂාංග' : 'Interactive Features'}
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <button
                  onClick={onOpenMatcher}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{lang === 'si' ? 'මොනවද උයන්නෙ? (Pantry Finder)' : 'What Can I Cook?'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSpiceGuide}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>🌿</span>
                  <span>{lang === 'si' ? 'කුළුබඩු සහ මැටි වළං රහස්' : 'Spice Heritage & Clay Pots'}</span>
                </button>
              </li>
              <li>
                <span className="text-xs text-stone-500 block pt-3 leading-relaxed">
                  {lang === 'si'
                    ? 'මැටි හට්ටියේ සුවඳින් සහ පොල්කිරි රසයෙන් පිරුණු සැබෑ හෙළ රසය ඔබේ නිවසටම.'
                    : 'Cooked with passion, clay pot warmth, thick coconut cream, and pure Ceylon spices.'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>
            © {new Date().getFullYear()} රස පියස (Rasa Piya) - Sri Lankan Traditional Food Guide.
          </p>
          <p className="flex items-center gap-1">
            <span>{lang === 'si' ? 'ආදරයෙන් සාදන ලදී' : 'Crafted with'}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{lang === 'si' ? 'ශ්‍රී ලාංකික ආහාර ලෝලීන් වෙනුවෙන්' : 'for Sri Lankan food lovers'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
