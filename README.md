# 🌴 රස පියස (Rasa Piya) - Sri Lankan Traditional Food Guide & Recipe Finder

> **"ශ්‍රී ලංකාවේ පාරම්පරික රස රහස් සහ වට්ටෝරු එකතුව"**  
> An authentic, interactive Sri Lankan culinary guide and smart recipe finder built with modern React, TypeScript, and Tailwind CSS.

---

## ✨ Features (ප්‍රධාන විශේෂාංග)

### 🥘 1. "What Can I Cook With What I Have?" (මොනවද උයන්නෙ? - Smart Pantry Matcher)
- Select the ingredients available in your kitchen (*Rice, Chicken, Coconut Milk, Eggs, Onions, Spices, Lentils...*).
- **⚡ Quick Staple Selector**: One-click selection of common Sri Lankan pantry essentials (coconut oil, onions, garlic, chilli powder, turmeric, curry powder).
- Intelligent JavaScript matching algorithm:
  - **100% Ready to Cook** badge for dishes with all required ingredients.
  - Percentage match calculation and clear display of **missing ingredients**.
  - Strict mode toggle ("100% Ready only") and meal-time filter.

### 🥗 2. Nutritional Facts Panel (පෝෂණ ගුණය)
- Displays detailed nutritional breakdown per serving for every recipe:
  - 🔥 **Calories (කැලරි)** with % Daily Value (DV).
  - 🥩 **Protein (ප්‍රෝටීන)** with grams and macro percentage.
  - 🥑 **Total Fat (මේදය)** with grams and macro percentage.
  - 🌾 **Carbohydrates (කාබෝහයිඩ්‍රේට්)** with grams and macro percentage.
- **Macronutrient Balance Split Bar**: Tri-color visual distribution of Protein, Fat, and Carbs by weight.

### 🔍 3. Multi-Dimensional Search & Filtering (සෙවුම් සහ පෙරහන්)
- **Instant Search**: Search by dish name or ingredient in either Sinhala or English (e.g., "Kottu", "කිරිබත්", "Ambul Thiyal", "Parippu").
- **Meal Time Filter**: Breakfast (උදෑසන), Lunch (දවල්), Dinner (රාත්‍රී), Tea Time (තේ වේලාව).
- **Cook Time Filter**: Under 20 mins, 20–40 mins, 40+ mins.
- **Dietary Filter**: Vegetarian (නිර්මාංශ), Vegan (වීගන්), Non-Vegetarian.
- **Difficulty Filter**: Easy (පහසු), Medium (මධ්‍යම), Hard (සංකීර්ණ).
- **Spice Level Rating**: 1 to 4 chillies (🌶️).

### 🍛 4. Traditional Categories (ආහාර වර්ගීකරණය)
1. **Rice & Curry (බත් සහ වෑංජන)**: Southern Fish Ambul Thiyal, Village Chicken Curry, Creamy Parippu (Dhal), Polos Ambula (Baby Jackfruit).
2. **Roti & Street Food (රොටී සහ කොත්තු)**: Street-style Chicken Kottu, Rustic Pol Roti with Katta Sambol.
3. **Hoppers & String Hoppers (ආප්ප සහ ඉඳිආප්ප)**: Crispy Egg Hoppers (Biththara Aappa), String Hoppers with golden Kiri Hodi.
4. **Sambols & Relishes (සම්බෝල සහ අච්චාරු)**: Miris Gala Pol Sambol, Caramelized Seeni Sambol, Lunu Miris.
5. **Short Eats & Snacks (කෙටි කෑම)**: Crispy Sri Lankan Fish & Potato Rolls.
6. **Traditional Sweets (සාම්ප්‍රදායික කැවිලි)**: New Year Konda Kavum.
7. **Puddings & Desserts (අතුරුපස)**: Royal Kithul Watalappan with roasted cashews.
8. **Herbal Drinks & Porridges (ඖෂධීය පාන)**: Ayurvedic Kola Kenda with pure jaggery, Ceylon Spiced Ginger Tea.

### 👨‍🍳 5. Interactive Recipe Modal (සවිස්තරාත්මක වට්ටෝරු පුවරුව)
- **Dynamic Servings Scaler**: Scaling from 2 to 8+ servings automatically recalculates all ingredient amounts in real-time.
- **Preparation Checklist**: Interactive tickable ingredients to track prep.
- **Step-by-Step Instructions with Timers**: Built-in countdown timers with audio/visual cues and celebratory confetti.
- **Authentic Chef Secrets ("රස රහස්")**: Traditional clay pot techniques, coconut milk reduction methods, and goraka curing tips.
- **Print & Share**: One-click printable view and link sharing.

### ❤️ 6. Favorites / Saved Recipes (ප්‍රියතම වට්ටෝරු)
- Bookmark favorite dishes with the heart icon.
- Persisted in browser `localStorage`.
- Dedicated slide-over drawer with quick recipe launch and deletion.

### 🌿 7. Spice Heritage & Clay Pot Lore (කුළුබඩු රහස්)
- Educational guide exploring Ceylon Cinnamon, Goraka, Curry Leaves & Pandan, Roasted Curry Powder (Kalu Kudu), and earthen clay pot alchemy.

### 🌐 8. Bilingual Support (ද්විභාෂා සහාය)
- Seamless toggle between **සිංහල (Sinhala)** and **English**.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Animations & Effects**: Motion, Canvas Confetti
- **Build Tool**: Vite 8
- **Fonts**: Noto Sans Sinhala, Plus Jakarta Sans, Playfair Display

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository or navigate to the directory
cd sri-lankan-food

# Install dependencies
npm install

# Start development server
npm run dev
```

The application runs on `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Starts the Vite development server on port 3000.
- `npm run build` - Builds the application for production.
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Runs TypeScript type checking (`tsc --noEmit`).

---

## 📁 Project Structure

```
├── index.html                  # HTML entry point with web fonts & metadata
├── metadata.json               # Applet configuration & metadata
├── package.json                # Project dependencies and npm scripts
├── src/
│   ├── App.tsx                 # Main application state and tab routing
│   ├── main.tsx                # React root mount
│   ├── index.css               # Global Tailwind CSS and typography rules
│   ├── types/
│   │   └── recipe.ts           # TypeScript interfaces for recipes, filters & pantry
│   ├── data/
│   │   ├── recipes.ts          # Authentic recipes with bilingual text & nutritional data
│   │   ├── pantryIngredients.ts# Pantry items & categories for ingredient matching
│   │   └── spiceGuide.ts       # Sri Lankan spice heritage & culinary secrets
│   └── components/
│       ├── Header.tsx          # Navigation, language switch, and favorites counter
│       ├── Hero.tsx            # Hero banner, search bar, and quick chips
│       ├── IngredientMatcher.tsx# "What Can I Cook?" interactive matcher
│       ├── FilterBar.tsx       # Multi-dimensional filter system
│       ├── RecipeCard.tsx      # Dish card with badges, timers & bookmarks
│       ├── RecipeModal.tsx     # Full recipe sheet with Nutrition Facts & Scaler
│       ├── CookingTimer.tsx    # Interactive countdown step timer with confetti
│       ├── CategoryShowcase.tsx# Visual traditional category grid
│       ├── FavoritesDrawer.tsx # Slide-out drawer for saved recipes
│       ├── SpiceHeritageModal.tsx # Spice guide & clay pot lore modal
│       └── Footer.tsx          # Footer with cultural credits & quick links
└── tsconfig.json               # TypeScript configuration
```

---

## 📜 License

Created with ❤️ for Sri Lankan food lovers.
