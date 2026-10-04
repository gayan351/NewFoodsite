import React from 'react';
import { Search, Sparkles, ChefHat, Clock, Award, X } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenMatcher: () => void;
  onSelectQuickTag: (tag: string) => void;
  lang: 'si' | 'en';
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenMatcher,
  onSelectQuickTag,
  lang,
}) => {
  const quickTags = [
    { label: lang === 'si' ? 'චිකන් කොත්තු' : 'Chicken Kottu', query: 'Kottu' },
    { label: lang === 'si' ? 'කිරිබත්' : 'Kiribath', query: 'Kiribath' },
    { label: lang === 'si' ? 'බිත්තර ආප්ප' : 'Egg Hoppers', query: 'Hoppers' },
    { label: lang === 'si' ? 'මාළු ඇඹුල් තියල්' : 'Ambul Thiyal', query: 'Ambul Thiyal' },
    { label: lang === 'si' ? 'පොල් රොටී' : 'Pol Roti', query: 'Pol Roti' },
    { label: lang === 'si' ? 'පරිප්පු හොද්ද' : 'Dhal Curry', query: 'Parippu' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-amber-500/10 via-[#faf7f2] to-[#faf7f2] pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-amber-900/5">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Culture pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
          <ChefHat className="w-4 h-4 text-amber-700" />
          <span>
            {lang === 'si' 
              ? '🌴 පාරම්පරික හෙළ බොජුන් රස මාවත' 
              : '🌴 The Authentic Taste of Ceylon Heritage'}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-display max-w-4xl mx-auto leading-[1.15]">
          {lang === 'si' ? (
            <>
              නියම ලාංකික රසයෙන් <span className="text-amber-700 underline decoration-amber-400/60 decoration-wavy">කෑම හදන්න</span> ඉගෙන ගන්න
            </>
          ) : (
            <>
              Master Authentic <span className="text-amber-700 underline decoration-amber-400/60 decoration-wavy">Sri Lankan Flavors</span> at Home
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          {lang === 'si'
            ? 'සුවඳැති කුළුබඩු, මිටිකිරි සහ පාරම්පරික ක්‍රමවේදයන් සමඟින් ඔබේ ප්‍රියතම ආහාර නිවසේදීම පහසුවෙන් පිසගන්න. ඔබේ කුස්සියේ ඇති අමුද්‍රව්‍ය වලින් සෑදිය හැකි කෑම වර්ගද ක්ෂණිකව සොයාගන්න.'
            : 'Explore clay pot curries, sizzling street kottu, crispy lacy hoppers, and traditional sweets. Use our smart pantry matcher to discover what you can cook today with what you have.'}
        </p>

        {/* Search Bar & Pantry Matcher Button */}
        <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-stretch gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
              <Search className="w-5 h-5 text-amber-700" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'si'
                  ? 'කෑම නම හෝ අමුද්‍රව්‍ය සොයන්න (උදා: කොත්තු, කිරිබත්, මාළු)...'
                  : 'Search by dish name or ingredient (e.g. Kottu, Kiribath, Fish)...'
              }
              className="w-full pl-12 pr-10 py-3.5 sm:py-4 bg-white rounded-2xl border border-stone-300 text-stone-900 placeholder-stone-400 shadow-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <button
            onClick={onOpenMatcher}
            className="px-6 py-3.5 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-2xl font-bold shadow-md shadow-amber-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            <Sparkles className="w-5 h-5 text-amber-200 fill-amber-200" />
            <span>{lang === 'si' ? 'මොනවද උයන්නෙ?' : 'What Can I Cook?'}</span>
          </button>
        </div>

        {/* Quick Search Chips */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold text-stone-700">
            {lang === 'si' ? 'ජනප්‍රිය සෙවුම්:' : 'Popular:'}
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag.query}
              onClick={() => onSelectQuickTag(tag.query)}
              className="px-3 py-1 bg-white hover:bg-amber-50 hover:border-amber-300 border border-stone-200 text-stone-700 text-xs font-medium rounded-full shadow-2xs transition-colors"
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto pt-6 border-t border-stone-200/60 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-800">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-700">{lang === 'si' ? 'පාරම්පරික වට්ටෝරු' : 'Authentic'}</p>
              <p className="text-sm font-bold text-stone-900">{lang === 'si' ? '100% ගැමි රස' : 'Village Recipes'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 text-orange-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-700">{lang === 'si' ? 'පියවරෙන් පියවර' : 'Step-by-Step'}</p>
              <p className="text-sm font-bold text-stone-900">{lang === 'si' ? 'වේලා ගණකය සමඟ' : 'Cooking Timers'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-700">{lang === 'si' ? 'අමුද්‍රව්‍ය සෙවුම' : 'Smart Pantry'}</p>
              <p className="text-sm font-bold text-stone-900">{lang === 'si' ? 'තිබෙන දෙයින් කෑම' : 'Ingredient Match'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
