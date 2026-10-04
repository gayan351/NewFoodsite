import React from 'react';
import { SPICE_HERITAGE } from '../data/spiceGuide';
import { X, Sparkles, BookOpen, Flame, Leaf } from 'lucide-react';

interface SpiceHeritageModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'si' | 'en';
}

export const SpiceHeritageModal: React.FC<SpiceHeritageModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-amber-700 via-amber-800 to-orange-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600/50 backdrop-blur-xs flex items-center justify-center text-amber-100">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">
                {lang === 'si' ? '🌿 හෙළ කුළුබඩු සහ මැටි වළං රහස්' : '🌿 Sri Lankan Spice & Clay Pot Heritage'}
              </h3>
              <p className="text-xs text-amber-200">
                {lang === 'si' ? 'සියවස් ගණනක් පැරණි අපේ ගැමි කුස්සියේ සුවඳ සහ විද්‍යාව' : 'Centuries of culinary wisdom, aromas, and clay pot alchemy'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {SPICE_HERITAGE.map((spice) => (
            <div
              key={spice.id}
              className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-amber-400 transition-colors space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'si' ? spice.sinhalaName : spice.name}</span>
                  </h4>
                  {spice.botanicalName && (
                    <span className="text-xs text-stone-500 italic">
                      {spice.botanicalName}
                    </span>
                  )}
                </div>

                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
                  {lang === 'si' ? spice.sinhalaRole : spice.role}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                  <p className="font-bold text-stone-700 mb-1">
                    {lang === 'si' ? 'රස ලක්ෂණය (Flavor):' : 'Flavor Profile:'}
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    {lang === 'si' ? spice.sinhalaFlavorProfile : spice.flavorProfile}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-amber-300/80">
                  <p className="font-bold text-amber-900 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>{lang === 'si' ? 'කුස්සියේ රහස (Kitchen Secret):' : 'Kitchen Secret:'}</span>
                  </p>
                  <p className="text-stone-700 leading-relaxed font-medium">
                    {lang === 'si' ? spice.sinhalaKitchenSecret : spice.kitchenSecret}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
