import React, { useState } from 'react';
import { Utensils, Heart, Sparkles, Compass, Flame, Menu, X, BookOpen } from 'lucide-react';

interface HeaderProps {
  activeTab: 'recipes' | 'matcher' | 'categories' | 'spices';
  setActiveTab: (tab: 'recipes' | 'matcher' | 'categories' | 'spices') => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  lang: 'si' | 'en';
  setLang: (lang: 'si' | 'en') => void;
  onOpenSpiceGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  favoritesCount,
  onOpenFavorites,
  lang,
  setLang,
  onOpenSpiceGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#fffdfa]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              setActiveTab('recipes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform duration-200">
              <Flame className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold font-display tracking-tight text-stone-900">
                  {lang === 'si' ? 'රස පියස' : 'Rasa Piya'}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 rounded-full border border-amber-200">
                  {lang === 'si' ? 'හෙළ බොජුන්' : 'Sri Lankan Cuisine'}
                </span>
              </div>
              <p className="text-xs text-stone-700 font-medium hidden sm:block">
                {lang === 'si' 
                  ? 'සාම්ප්‍රදායික ශ්‍රී ලාංකික වට්ටෝරු & අමුද්‍රව්‍ය සෙවුම' 
                  : 'Traditional Food Guide & Smart Recipe Finder'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <button
              onClick={() => setActiveTab('recipes')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'recipes'
                  ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/20'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>{lang === 'si' ? 'වට්ටෝරු ගවේෂණය' : 'All Recipes'}</span>
            </button>

            <button
              onClick={() => setActiveTab('matcher')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'matcher'
                  ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/20 ring-2 ring-amber-400/40'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-amber-50/80 text-amber-950'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>{lang === 'si' ? 'මොනවද උයන්නෙ?' : 'What Can I Cook?'}</span>
              <span className="bg-amber-200/80 text-amber-900 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md">
                {lang === 'si' ? 'විශේෂ' : 'Pantry'}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('categories')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'categories'
                  ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/20'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{lang === 'si' ? 'වර්ගීකරණය' : 'Categories'}</span>
            </button>

            <button
              onClick={onOpenSpiceGuide}
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-stone-700 hover:text-amber-800 hover:bg-amber-50/70 transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>{lang === 'si' ? 'කුළුබඩු රහස්' : 'Spice Heritage'}</span>
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
              <button
                onClick={() => setLang('si')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  lang === 'si'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                සිංහල
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  lang === 'en'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                English
              </button>
            </div>

            {/* Favorites button */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-all flex items-center gap-1.5 group cursor-pointer"
              title={lang === 'si' ? 'මගේ ප්‍රියතම වට්ටෝරු' : 'My Saved Recipes'}
              aria-label="Favorites"
            >
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold text-rose-800">
                {lang === 'si' ? 'ප්‍රියතම' : 'Saved'}
              </span>
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-rose-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs animate-bounce">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-stone-700 hover:bg-stone-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-900/10 space-y-2">
            <button
              onClick={() => {
                setActiveTab('recipes');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
                activeTab === 'recipes' ? 'bg-amber-600 text-white' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>{lang === 'si' ? 'සියලු වට්ටෝරු' : 'All Recipes'}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('matcher');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
                activeTab === 'matcher' ? 'bg-amber-600 text-white' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{lang === 'si' ? '🥘 මොනවද උයන්නෙ? (Pantry Finder)' : '🥘 What Can I Cook?'}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('categories');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
                activeTab === 'categories' ? 'bg-amber-600 text-white' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{lang === 'si' ? 'ආහාර වර්ගීකරණය' : 'Food Categories'}</span>
            </button>

            <button
              onClick={() => {
                onOpenSpiceGuide();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 text-stone-700 hover:bg-stone-100"
            >
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>{lang === 'si' ? '🌿 කුළුබඩු සහ මැටි වළං රහස්' : '🌿 Spices & Heritage Guide'}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
