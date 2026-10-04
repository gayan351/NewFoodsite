import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Bell, CheckCircle2, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CookingTimerProps {
  initialMinutes: number;
  label?: string;
  lang: 'si' | 'en';
}

export const CookingTimer: React.FC<CookingTimerProps> = ({
  initialMinutes,
  label,
  lang,
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  useEffect(() => {
    setSecondsLeft(initialMinutes * 60);
    setIsRunning(false);
    setHasFinished(false);
  }, [initialMinutes]);

  useEffect(() => {
    let interval: any = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setHasFinished(true);
            try {
              confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
              });
            } catch (err) {
              // Canvas confetti safe fallback
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const toggleRun = () => {
    if (hasFinished) {
      setSecondsLeft(initialMinutes * 60);
      setHasFinished(false);
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  };

  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(initialMinutes * 60);
    setHasFinished(false);
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className={`p-3.5 rounded-2xl border transition-all ${
      hasFinished 
        ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-400/40' 
        : isRunning 
          ? 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-400/30' 
          : 'bg-stone-50 border-stone-200'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className={`w-4 h-4 ${hasFinished ? 'text-emerald-600' : isRunning ? 'text-amber-600 animate-spin' : 'text-stone-500'}`} />
          <span className="text-xs font-semibold text-stone-700">
            {label || (lang === 'si' ? 'පිසින වේලා ගණකය' : 'Step Timer')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className={`font-mono text-base font-extrabold ${hasFinished ? 'text-emerald-700' : isRunning ? 'text-amber-900' : 'text-stone-800'}`}>
            {timeFormatted}
          </span>

          <button
            onClick={toggleRun}
            className={`p-1.5 rounded-lg text-xs font-bold flex items-center justify-center transition-colors cursor-pointer ${
              hasFinished
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : isRunning
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-stone-800 text-white hover:bg-stone-900'
            }`}
            title={isRunning ? 'Pause' : 'Start'}
          >
            {hasFinished ? <CheckCircle2 className="w-3.5 h-3.5" /> : isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>

          <button
            onClick={reset}
            className="p-1.5 text-stone-500 hover:text-stone-700 hover:bg-stone-200 rounded-lg text-xs transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {hasFinished && (
        <div className="mt-2 text-xs font-bold text-emerald-800 flex items-center gap-1.5 animate-pulse">
          <Bell className="w-3.5 h-3.5 text-emerald-600" />
          <span>{lang === 'si' ? '🎉 වේලාව සම්පූර්ණයි! ඊළඟ පියවරට යන්න.' : '🎉 Time is up! Proceed to next step.'}</span>
        </div>
      )}
    </div>
  );
};
