import { PantryItem } from '../types/recipe';

export const PANTRY_CATEGORIES = [
  { id: 'grains', name: 'Grains & Flours', sinhalaName: 'ධාන්‍ය සහ පිටි වර්ග' },
  { id: 'protein', name: 'Meat, Fish & Eggs', sinhalaName: 'මස්, මාළු සහ බිත්තර' },
  { id: 'coconut', name: 'Coconut & Bases', sinhalaName: 'පොල් සහ තෙල් වර්ග' },
  { id: 'aromatics', name: 'Onions, Garlic & Herbs', sinhalaName: 'ළූණු, සුදුළූණු සහ කොළ' },
  { id: 'spices', name: 'Spices & Flavours', sinhalaName: 'කුළුබඩු සහ රසකාරක' },
  { id: 'veggies', name: 'Vegetables', sinhalaName: 'එළවළු වර්ග' },
] as const;

export const PANTRY_ITEMS: PantryItem[] = [
  // Grains & Flours
  { id: 'rice', name: 'Rice (White / Red)', sinhalaName: 'සහල් (සුදු / කැකුළු)', category: 'grains', icon: '🌾' },
  { id: 'wheat_flour', name: 'Wheat Flour', sinhalaName: 'පාන් පිටි', category: 'grains', icon: '🍞' },
  { id: 'rice_flour', name: 'Rice Flour', sinhalaName: 'හාල් පිටි', category: 'grains', icon: '🥣' },
  { id: 'kurakkan_flour', name: 'Finger Millet (Kurakkan)', sinhalaName: 'කුරක්කන් පිටි', category: 'grains', icon: '🌾' },
  { id: 'godamba_roti', name: 'Godamba / Parotta Roti', sinhalaName: 'ගෝදම්බ රොටී / පරාටා', category: 'grains', icon: '🫓' },
  { id: 'noodles', name: 'Noodles / String Hoppers', sinhalaName: 'නූඩ්ල්ස් / ඉඳිආප්ප', category: 'grains', icon: '🍜' },

  // Protein
  { id: 'chicken', name: 'Chicken', sinhalaName: 'කුකුළු මස්', category: 'protein', icon: '🍗' },
  { id: 'fish', name: 'Fresh Fish (Tuna/Kelawalla)', sinhalaName: 'කෙලවල්ලා / තලපත්', category: 'protein', icon: '🐟' },
  { id: 'egg', name: 'Eggs', sinhalaName: 'බිත්තර', category: 'protein', icon: '🥚' },
  { id: 'dhal', name: 'Lentils (Dhal / Parippu)', sinhalaName: 'මයිසූර් පරිප්පු', category: 'protein', icon: '🍲' },
  { id: 'canned_fish', name: 'Canned Fish (Salmon/Mackerel)', sinhalaName: 'ටින් මාළු', category: 'protein', icon: '🥫' },
  { id: 'prawns', name: 'Prawns / Shrimp', sinhalaName: 'ඉස්සන්', category: 'protein', icon: '🦐' },
  { id: 'maldive_fish', name: 'Maldive Fish (Umbalakada)', sinhalaName: 'උම්බලකඩ', category: 'protein', icon: '🐟' },

  // Coconut & Bases
  { id: 'scraped_coconut', name: 'Scraped Coconut', sinhalaName: 'ගාපු පොල්', category: 'coconut', icon: '🥥' },
  { id: 'coconut_milk', name: 'Coconut Milk', sinhalaName: 'පොල් කිරි (දියකිරි/මිටිකිරි)', category: 'coconut', icon: '🥛' },
  { id: 'coconut_oil', name: 'Coconut Oil / Cooking Oil', sinhalaName: 'පොල් තෙල්', category: 'coconut', icon: '🪔' },
  { id: 'kithul_jaggery', name: 'Kithul Jaggery / Treacle', sinhalaName: 'කිතුල් හකුරු / පැණි', category: 'coconut', icon: '🍯' },

  // Aromatics & Herbs
  { id: 'red_onion', name: 'Red Onions / Shallots', sinhalaName: 'රතු ළූණු', category: 'aromatics', icon: '🧅' },
  { id: 'big_onion', name: 'Big Onion', sinhalaName: 'ලොකු ළූණු', category: 'aromatics', icon: '🧅' },
  { id: 'garlic', name: 'Garlic', sinhalaName: 'සුදු ළූණු', category: 'aromatics', icon: '🧄' },
  { id: 'ginger', name: 'Ginger', sinhalaName: 'ඉඟුරු', category: 'aromatics', icon: '🫚' },
  { id: 'green_chilli', name: 'Green Chillies', sinhalaName: 'අමු මිරිස්', category: 'aromatics', icon: '🌶️' },
  { id: 'curry_leaves', name: 'Curry Leaves (Karapincha)', sinhalaName: 'කරපිංචා', category: 'aromatics', icon: '🍃' },
  { id: 'pandan', name: 'Pandan Leaves (Rampe)', sinhalaName: 'රම්පෙ', category: 'aromatics', icon: '🌿' },
  { id: 'lime', name: 'Lime / Lemon', sinhalaName: 'දෙහි', category: 'aromatics', icon: '🍋' },

  // Spices & Seasoning
  { id: 'chilli_powder', name: 'Chilli Powder / Flakes', sinhalaName: 'මිරිස් කුඩු / කෑලි මිරිස්', category: 'spices', icon: '🌶️' },
  { id: 'turmeric', name: 'Turmeric Powder', sinhalaName: 'කහ කුඩු', category: 'spices', icon: '🟡' },
  { id: 'curry_powder', name: 'Curry Powder (Roasted/Raw)', sinhalaName: 'තුනපහ කුඩු', category: 'spices', icon: '🏺' },
  { id: 'black_pepper', name: 'Black Pepper', sinhalaName: 'ගම්මිරිස්', category: 'spices', icon: '⚫' },
  { id: 'cinnamon', name: 'Ceylon Cinnamon', sinhalaName: 'ලංකා කුරුඳු', category: 'spices', icon: '🪵' },
  { id: 'cardamom', name: 'Cardamom & Cloves', sinhalaName: 'එනසාල් සහ කරාබුනැටි', category: 'spices', icon: '🌱' },
  { id: 'goraka', name: 'Garcinia (Goraka)', sinhalaName: 'ගොරකා', category: 'spices', icon: '🍂' },
  { id: 'mustard', name: 'Mustard Seeds', sinhalaName: 'අබ ඇට', category: 'spices', icon: '✨' },

  // Vegetables
  { id: 'potato', name: 'Potatoes', sinhalaName: 'අර්තාපල් / අල', category: 'veggies', icon: '🥔' },
  { id: 'tomato', name: 'Tomatoes', sinhalaName: 'තක්කාලි', category: 'veggies', icon: '🍅' },
  { id: 'carrots', name: 'Carrots', sinhalaName: 'කැරට්', category: 'veggies', icon: '🥕' },
  { id: 'leeks', name: 'Leeks / Cabbage', sinhalaName: 'ලීක්ස් / ගෝවා', category: 'veggies', icon: '🥬' },
  { id: 'polos', name: 'Young Jackfruit (Polos)', sinhalaName: 'පොලොස් ගැට', category: 'veggies', icon: '🍈' },
  { id: 'herbal_greens', name: 'Gotukola / Hathavariya / Mukunuwenna', sinhalaName: 'ගොටුකොළ / හාතාවාරිය', category: 'veggies', icon: '🌱' },
];

export const COMMON_STAPLE_IDS = [
  'rice',
  'scraped_coconut',
  'coconut_milk',
  'big_onion',
  'garlic',
  'green_chilli',
  'curry_leaves',
  'chilli_powder',
  'turmeric',
  'curry_powder',
  'coconut_oil'
];
