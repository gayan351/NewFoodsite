export type CategoryType = 
  | 'rice-curry' 
  | 'short-eats' 
  | 'sweets' 
  | 'hoppers' 
  | 'roti' 
  | 'sambols' 
  | 'drinks' 
  | 'desserts';

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'tea-time';
export type DietType = 'all' | 'vegetarian' | 'non-vegetarian' | 'vegan';
export type DifficultyType = 'all' | 'easy' | 'medium' | 'hard';
export type CookTimeRange = 'all' | 'under-20' | '20-40' | 'over-40';

export interface Ingredient {
  name: string;
  sinhalaName: string;
  amount: number;
  unit: string;
  pantryKey: string; // Identifier used for "What Can I Cook?" pantry matcher
  optional?: boolean;
}

export interface InstructionStep {
  stepNumber: number;
  title: string;
  sinhalaTitle: string;
  text: string;
  sinhalaText: string;
  durationMinutes?: number;
}

export interface Recipe {
  id: string;
  name: string;
  sinhalaName: string;
  tagline: string;
  sinhalaTagline: string;
  category: CategoryType;
  mealTypes: MealType[];
  diet: 'vegetarian' | 'non-vegetarian' | 'vegan';
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  caloriesPerServing: number;
  proteinPerServing: number; // in grams
  fatPerServing: number; // in grams
  carbsPerServing?: number; // in grams
  spiceLevel: 1 | 2 | 3 | 4; // 1: Mild, 2: Medium, 3: Spicy, 4: Fiery
  image: string;
  description: string;
  sinhalaDescription: string;
  ingredients: Ingredient[];
  instructions: InstructionStep[];
  chefTips: string[];
  sinhalaChefTips: string[];
  servingSuggestions: string;
  sinhalaServingSuggestions: string;
  isPopular?: boolean;
  isHeritageFavorite?: boolean;
}

export interface PantryItem {
  id: string;
  name: string;
  sinhalaName: string;
  category: 'grains' | 'protein' | 'coconut' | 'aromatics' | 'spices' | 'veggies';
  icon: string;
}

export interface FilterState {
  searchQuery: string;
  category: 'all' | CategoryType;
  diet: DietType;
  difficulty: DifficultyType;
  mealType: 'all' | MealType;
  cookTime: CookTimeRange;
  maxSpice: number;
  onlyHeritage: boolean;
}
