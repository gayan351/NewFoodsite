import { Recipe } from '../types/recipe';

export const RECIPES: Recipe[] = [
  {
    id: 'chicken-kottu',
    name: 'Street Style Chicken Kottu',
    sinhalaName: 'චිකන් කොත්තු රොටී',
    tagline: 'The undisputed king of Sri Lankan street food with fragrant spices and sizzling chopped roti.',
    sinhalaTagline: 'ශ්‍රී ලංකාවේ ප්‍රසිද්ධම වීදි ආහාරය - සුවඳවත් තුනපහ සහ රොටී සමඟින් පිසින ලද.',
    category: 'roti',
    mealTypes: ['dinner', 'lunch'],
    diet: 'non-vegetarian',
    difficulty: 'medium',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    caloriesPerServing: 520,
    proteinPerServing: 34,
    fatPerServing: 18,
    carbsPerServing: 55,
    spiceLevel: 3,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    description: 'Crispy shredded Godamba roti tossed vigorously on a blazing iron flat-top with tender chicken chunks, scrambled eggs, fresh leeks, carrots, onions, and rich spicy chicken curry gravy.',
    sinhalaDescription: 'කුඩාවට කැපූ ගෝදම්බ රොටී, රසවත් කුකුළු මස්, බිත්තර, ලීක්ස්, කැරට් සහ රස නහර පිනායන කුකුළු මස් හොදි සමඟ තැටියක තෙම්පරාදු කර සකසන ලද කොත්තු රොටී.',
    ingredients: [
      { name: 'Godamba / Parotta Roti (thin strips)', sinhalaName: 'කපාගත් ගෝදම්බ රොටී', amount: 6, unit: 'rotis', pantryKey: 'godamba_roti' },
      { name: 'Cooked Chicken (shredded)', sinhalaName: 'තම්බාගත්/බැදගත් කුකුළු මස්', amount: 300, unit: 'g', pantryKey: 'chicken' },
      { name: 'Eggs (whisked)', sinhalaName: 'බිත්තර', amount: 3, unit: 'eggs', pantryKey: 'egg' },
      { name: 'Chicken Curry Gravy', sinhalaName: 'කුකුළු මස් හොදි', amount: 150, unit: 'ml', pantryKey: 'curry_powder' },
      { name: 'Leeks & Carrots (julienned)', sinhalaName: 'සිහින්ව ලියාගත් ලීක්ස් සහ කැරට්', amount: 1.5, unit: 'cups', pantryKey: 'leeks' },
      { name: 'Big Onion (sliced)', sinhalaName: 'ලොකු ළූණු', amount: 1, unit: 'medium', pantryKey: 'big_onion' },
      { name: 'Green Chillies (chopped)', sinhalaName: 'අමු මිරිස්', amount: 3, unit: 'pods', pantryKey: 'green_chilli' },
      { name: 'Garlic & Ginger (minced)', sinhalaName: 'සුදුළූණු සහ ඉඟුරු', amount: 1.5, unit: 'tbsp', pantryKey: 'garlic' },
      { name: 'Chilli Flakes & Pepper', sinhalaName: 'කෑලි මිරිස් සහ ගම්මිරිස්', amount: 1, unit: 'tbsp', pantryKey: 'chilli_powder' },
      { name: 'Coconut Oil', sinhalaName: 'පොල් තෙල්', amount: 2, unit: 'tbsp', pantryKey: 'coconut_oil' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Temper Aromatics',
        sinhalaTitle: 'සුවඳැති ද්‍රව්‍ය තෙම්පරාදු කිරීම',
        text: 'Heat coconut oil in a wide heavy-bottomed wok or flat pan. Add sliced onions, ginger, garlic, and chopped green chillies. Sauté on medium-high until aromatic and slightly golden.',
        sinhalaText: 'විශාල තාච්චියකට හෝ තැටියකට තෙල් දමා රත්වන්නට හරින්න. ළූණු, සුදුළූණු, ඉඟුරු සහ අමු මිරිස් දමා සුවඳ එනතුරු රන්වන් පැහැ වනතෙක් බැදගන්න.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Scramble the Eggs',
        sinhalaTitle: 'බිත්තර එක් කිරීම',
        text: 'Push the aromatics to one side of the pan. Crack in the eggs, sprinkle a pinch of salt and pepper, and scramble quickly until 80% set.',
        sinhalaText: 'ළූණු මිශ්‍රණය පසෙකට කර බිත්තර දමා ලුණු, ගම්මිරිස් ස්වල්පයක් එක්කොට බිත්තර කැබලි වන සේ ඉක්මනින් කලවම් කරන්න.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Add Vegetables & Shredded Chicken',
        sinhalaTitle: 'එළවළු සහ මස් එක් කිරීම',
        text: 'Toss in the shredded carrots, leeks, and cooked chicken chunks. Stir-fry rapidly on high flame to maintain crunchiness.',
        sinhalaText: 'සිහින්ව කපාගත් කැරට්, ලීක්ස් සහ මස් කැබලි එකතු කර අධික ගින්දරේ විනාඩි 2ක් පමණ ඉක්මනින් කලවම් කරන්න.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Chop and Incorporate Roti & Curry',
        sinhalaTitle: 'රොටී සහ කරි හොදි මිශ්‍ර කිරීම',
        text: 'Add the shredded Godamba roti strips and pour over the hot chicken curry gravy with chilli flakes. Using two metal spatulas, chop and toss vigorously until all ingredients are steamy and well infused.',
        sinhalaText: 'කපාගත් රොටී කැබලි දමා ඒ මතට උණුසුම් කරි හොදි සහ කෑලි මිරිස් වත්කරන්න. පැතලි හැඳි දෙකකින් වේගයෙන් කොටමින් හොඳින් මිශ්‍ර කරන්න.',
        durationMinutes: 5
      }
    ],
    chefTips: [
      'For authentic roadside flavor, use a very hot iron skillet and do not overcook vegetables to keep their fresh crunch.',
      'A splash of lime juice squeezed right before eating cuts through the rich spices beautifully.'
    ],
    sinhalaChefTips: [
      'නියම කඩේ කොත්තු රසය ලබා ගැනීමට තැටිය ඉතා හොඳින් රත් වී තිබිය යුතු අතර එළවළු ඕනෑවට වඩා තැම්බෙන්නට නොදෙන්න.',
      'කෑමට පෙර දෙහි බිංදු කිහිපයක් එක් කිරීමෙන් සුවිශේෂී ප්‍රබෝධමත් රසයක් ලැබේ.'
    ],
    servingSuggestions: 'Serve piping hot with a cup of extra spicy curry gravy and a fried egg on top.',
    sinhalaServingSuggestions: 'උණුසුම් සැර හොදි කෝප්පයක් සහ උඩින් බුල්ස්අයි බිත්තරයක් සමඟ පිළිගන්වන්න.',
    isPopular: true,
    isHeritageFavorite: true
  },
  {
    id: 'kiribath-lunu-miris',
    name: 'Kiribath with Lunu Miris',
    sinhalaName: 'කිරිබත් සහ ලුණු මිරිස්',
    tagline: 'The revered Sri Lankan ceremonial milk rice, rich in creamy coconut and cultural blessing.',
    sinhalaTagline: 'ශ්‍රී ලාංකික මංගල හා සුබ මොහොතක ප්‍රධාන ආහාරය වන පොල්කිරි මිශ්‍ර කිරිබත් සහ සැර ලුණු මිරිස.',
    category: 'rice-curry',
    mealTypes: ['breakfast'],
    diet: 'vegetarian',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    caloriesPerServing: 380,
    proteinPerServing: 8,
    fatPerServing: 16,
    carbsPerServing: 52,
    spiceLevel: 3,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    description: 'Fragrant white raw or red kekulu rice cooked till tender, then steeped in luscious thick first-press coconut milk with sea salt, diamond-cut on a traditional banana leaf and served with fiery shallot-chilli lunu miris.',
    sinhalaDescription: 'හොඳින් තැම්බුණු සහල් වලට උකු පොල්කිරි සහ ලුණු දමා කිරිබත පදමට පිස, කෙසෙල් කොළයක හැඩගසා රතු ළූණු හා දෙහි මිශ්‍ර ලුණු මිරිසක් සමඟ පිරිනමනු ලැබේ.',
    ingredients: [
      { name: 'White Raw Rice / Kekulu', sinhalaName: 'කැකුළු සහල්', amount: 2, unit: 'cups', pantryKey: 'rice' },
      { name: 'Water', sinhalaName: 'වතුර', amount: 3.5, unit: 'cups', pantryKey: 'rice' },
      { name: 'Thick Coconut Milk (First extract)', sinhalaName: 'උකු පළමු මිටිකිරි', amount: 1.5, unit: 'cups', pantryKey: 'coconut_milk' },
      { name: 'Sea Salt', sinhalaName: 'කැට ලුණු', amount: 1.5, unit: 'tsp', pantryKey: 'chilli_powder' },
      { name: 'Red Onions / Shallots (for Lunu Miris)', sinhalaName: 'රතු ළූණු (ලුණු මිරිස සඳහා)', amount: 10, unit: 'shallots', pantryKey: 'red_onion' },
      { name: 'Chilli Flakes & Powder', sinhalaName: 'කෑලි මිරිස් සහ මිරිස් කුඩු', amount: 2, unit: 'tbsp', pantryKey: 'chilli_powder' },
      { name: 'Crushed Maldive Fish (optional)', sinhalaName: 'කුඩු කරගත් උම්බලකඩ', amount: 1, unit: 'tbsp', pantryKey: 'maldive_fish', optional: true },
      { name: 'Fresh Lime Juice', sinhalaName: 'දෙහි යුෂ', amount: 1, unit: 'whole lime', pantryKey: 'lime' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Cook the Rice',
        sinhalaTitle: 'බත් පිසගැනීම',
        text: 'Wash the rice thoroughly. Place in a clay pot or heavy saucepan with 3.5 cups of water. Bring to a boil and cook until the rice grains are very soft and the water has almost evaporated.',
        sinhalaText: 'සහල් සෝදා වතුර කෝප්ප 3.5ක් දමා මධ්‍යම ගින්දරේ සහල් ඇට හොඳින් මෙළෙක් වනතුරු තම්බා ගන්න.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Infuse Thick Coconut Milk',
        sinhalaTitle: 'මිටිකිරි එක් කිරීම',
        text: 'Dissolve salt in the thick coconut milk. Pour over the soft rice. Lower the flame and stir gently with a wooden spoon until the rice absorbs the milk and turns glossy and creamy.',
        sinhalaText: 'උකු මිටිකිරි වලට ලුණු දියකර බතට එක් කරන්න. අඩු ගින්දරේ හැඳිගාමින් කිරි බතට උරාගෙන දිලිසෙන සුළු පදම එනතෙක් පිසගන්න.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Shape and Diamond Cut',
        sinhalaTitle: 'කෙසෙල් කොළයේ හැඩ ගැසීම',
        text: 'Transfer the steaming rice onto a clean banana leaf or platter. Flatten to a smooth 1-inch thickness using a banana leaf or greased spatula. Allow to settle for 5 minutes, then slice into iconic diamond shapes.',
        sinhalaText: 'කෙසෙල් කොළයක් මතට කිරිබත දමා පැතලි කර විනාඩි 5ක් නිවෙන්න හැර කැවුම් හැඩයට හෝ හතරැස් හැඩයට කපාගන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Grind the Authentic Lunu Miris',
        sinhalaTitle: 'ලුණු මිරිස ඇඹරීම',
        text: 'In a mortar and pestle or grinding stone (miris gala), crush dry chilli flakes, salt, and Maldive fish. Add peeled shallots and crush into a coarse paste. Finish with fresh lime juice.',
        sinhalaText: 'වංගෙඩියක හෝ මිරිස් ගලක කෑලි මිරිස්, ලුණු හා උම්බලකඩ අඹරා රතු ළූණු දමා කැබලි සිටින සේ කොටා දෙහි යුෂ එක් කරන්න.',
        durationMinutes: 4
      }
    ],
    chefTips: [
      'Use traditional clay pot (හට්ටිය) for uniform heat distribution and that irreplaceable village aroma.',
      'Add salt directly to the coconut milk before pouring into the rice for evenly balanced seasoning.'
    ],
    sinhalaChefTips: [
      'මැටි හට්ටියක පිසීමෙන් කිරිබතට අනර්ඝ සුවඳක් සහ සියුම් රසයක් ලැබේ.',
      'ලුණු ස්වල්පය පොල්කිරි වලට කලින්ම දියකර එක්කිරීමෙන් කිරිබත පුරා ලුණු පදම සමසේ පැතිරෙයි.'
    ],
    servingSuggestions: 'Serve warm on a banana leaf alongside fiery Lunu Miris and sweet Seeni Sambol.',
    sinhalaServingSuggestions: 'කෙසෙල් කොළයක උණුසුම් කිරිබත් සමඟ ලුණු මිරිස් හෝ සීනි සම්බෝල පිළිගන්වන්න.',
    isPopular: true,
    isHeritageFavorite: true
  },
  {
    id: 'fish-ambul-thiyal',
    name: 'Southern Fish Ambul Thiyal',
    sinhalaName: 'මාළු ඇඹුල් තියල්',
    tagline: 'Ancient clay-pot sour & peppery dry fish preserve perfected in the coastal south of Sri Lanka.',
    sinhalaTagline: 'දකුණු ලක පාරම්පරික ක්‍රමයට ගොරකා සහ කළු ගම්මිරිස් සමග මැටි වළඳක හිඳුවා ගත් මාළු වෑංජනය.',
    category: 'rice-curry',
    mealTypes: ['lunch', 'dinner'],
    diet: 'non-vegetarian',
    difficulty: 'medium',
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    caloriesPerServing: 310,
    proteinPerServing: 42,
    fatPerServing: 6,
    carbsPerServing: 8,
    spiceLevel: 3,
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1000&q=80',
    description: 'Firm cubes of fresh tuna or sailfish simmered without coconut milk in a rich dark paste of boiled dried Goraka (Garcinia), coarse black pepper, cinnamon, and curry leaves in a clay pot until dry and intensely flavorful.',
    sinhalaDescription: 'තලපත් හෝ කෙලවල්ලා මාළු කැබලි, තම්බා අඹරාගත් කළු ගොරකා තලපය, ගම්මිරිස්, කරපිංචා සහ කුරුඳු සමඟ මැටි හට්ටියේ වතුර සිඳී යනතුරු හිඳුවාගන්නා අපූරු ඇඹුල් තියල්.',
    ingredients: [
      { name: 'Fresh Tuna / Sailfish (cubed)', sinhalaName: 'කෙලවල්ලා හෝ තලපත් මාළු', amount: 500, unit: 'g', pantryKey: 'fish' },
      { name: 'Dried Goraka (Garcinia cambogia)', sinhalaName: 'ගොරකා කැබලි', amount: 50, unit: 'g', pantryKey: 'goraka' },
      { name: 'Black Peppercorns (coarsely ground)', sinhalaName: 'කළු ගම්මිරිස් කුඩු', amount: 2, unit: 'tbsp', pantryKey: 'black_pepper' },
      { name: 'Curry Leaves & Pandan', sinhalaName: 'කරපිංචා සහ රම්පෙ', amount: 2, unit: 'sprigs', pantryKey: 'curry_leaves' },
      { name: 'Garlic & Ginger (crushed)', sinhalaName: 'සුදුළූණු සහ ඉඟුරු', amount: 1, unit: 'tbsp', pantryKey: 'garlic' },
      { name: 'Ceylon Cinnamon Stick', sinhalaName: 'කුරුඳු පොතු', amount: 1, unit: 'piece', pantryKey: 'cinnamon' },
      { name: 'Chilli Powder & Turmeric', sinhalaName: 'මිරිස් කුඩු සහ කහ කුඩු', amount: 1, unit: 'tsp', pantryKey: 'chilli_powder' },
      { name: 'Sea Salt', sinhalaName: 'ලුණු', amount: 1.5, unit: 'tsp', pantryKey: 'chilli_powder' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Make Goraka Paste',
        sinhalaTitle: 'ගොරකා තලපය සකසා ගැනීම',
        text: 'Soak goraka in warm water for 15 minutes, then grind on a stone or blend into a smooth jet-black thick paste with black pepper and salt.',
        sinhalaText: 'ගොරකා උණු වතුරේ පෙඟෙන්න හැර ගම්මිරිස් සහ ලුණු සමඟ ඉතා සිහින් කළු තලපයක් වනසේ අඹරාගන්න.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Marinate Fish Cubes',
        sinhalaTitle: 'මාළු කැබලි පදම් කිරීම',
        text: 'Wash the firm tuna cubes. Coat every single cube uniformly with the goraka-pepper paste, crushed garlic, ginger, and turmeric.',
        sinhalaText: 'මාළු කැබලි සෝදා සකසාගත් ගොරකා තලපය, සුදුළූණු, ඉඟුරු සහ කහ කුඩු සියල්ල මාළු කැබලිවල හොඳින් තවරන්න.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Layer in Clay Pot',
        sinhalaTitle: 'මැටි හට්ටියේ අතුරා ගැනීම',
        text: 'Line the bottom of a clay pot with banana leaf or a bed of curry leaves to prevent sticking. Arrange the coated fish pieces in a single tight layer. Add half a cup of water.',
        sinhalaText: 'මැටි හට්ටියේ පතුලට කරපිංචා හෝ කෙසෙල් කොළයක් අතුරා මාළු කැබලි තනි තට්ටුවකට තබන්න. වතුර කෝප්ප භාගයක් එක්කරන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Slow Simmer until Dry',
        sinhalaTitle: 'අඩු ගින්දරේ හිඳුවා ගැනීම',
        text: 'Cover and simmer on low heat. Never stir with a spoon—swirl the pot gently by holding the handles. Cook until all liquid evaporates and the fish turns dark and aromatic.',
        sinhalaText: 'පියන වසා අඩු ගින්දරේ හිඳෙන්නට හරින්න. හැඳි නොගා හට්ටිය වටේට කරකවමින් වතුර සම්පූර්ණයෙන් සිඳී තෙල් පෑදෙන තෙක් පිසගන්න.',
        durationMinutes: 20
      }
    ],
    chefTips: [
      'Ambul Thiyal actually tastes better on the 2nd and 3rd day as the sourness and pepper penetrate deep into the fish fibers!',
      'Traditional Southern cooks never stir Ambul Thiyal with a spoon to keep the fish cubes completely intact.'
    ],
    sinhalaChefTips: [
      'ඇඹුල් තියල් දෙවැනි සහ තෙවැනි දින වලදී වඩාත් රසවත් වේ, මන්ද ඇඹුල් සහ ගම්මිරිස් මාළු තුළට හොඳින් කා වදින බැවිනි.',
      'මාළු කැබලි කැඩී නොයන ලෙස කිසිවිටෙකත් හැන්දෙන් නොකලවම් කර හට්ටිය අත් දෙකෙන් කරකවන්න.'
    ],
    servingSuggestions: 'Authentic companion to White Rice, Parippu (Dhal curry), and fresh Pol Sambol.',
    sinhalaServingSuggestions: 'සුදු බත්, කහ පරිප්පු හොද්ද සහ පොල් සම්බෝල සමඟ දිව්‍යමය රසයකි.',
    isPopular: true,
    isHeritageFavorite: true
  },
  {
    id: 'egg-hoppers',
    name: 'Crispy Egg Hoppers (Biththara Aappa)',
    sinhalaName: 'බිත්තර ආප්ප සහ පැණි ආප්ප',
    tagline: 'Lacy, crispy-edged fermented bowl pancakes with a soft steamed egg nestled in the warm center.',
    sinhalaTagline: 'දාරය කරස් ගා හැපෙන, මැද පුළුන් මෙන් මෙළෙක් බිත්තරයක් රැඳි අපේ රටේ ආප්ප.',
    category: 'hoppers',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'non-vegetarian',
    difficulty: 'medium',
    prepTime: 25,
    cookTime: 15,
    servings: 4,
    caloriesPerServing: 240,
    proteinPerServing: 9,
    fatPerServing: 11,
    carbsPerServing: 26,
    spiceLevel: 1,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    description: 'Fermented rice flour and coconut milk batter swirled in a hemispherical hopper pan (thachchiya), topped with a fresh farm egg cracked in the center, steamed until the yolk is runny and edges are golden brown.',
    sinhalaDescription: 'හාල් පිටි සහ පොල් කිරි පැසවා සකසන ලද ආප්ප තාච්චියේ කරකවා මැදට බිත්තරයක් දමා පියන වසා වාෂ්පයෙන් තම්බාගත් රසවත් බිත්තර ආප්ප.',
    ingredients: [
      { name: 'Rice Flour (fine)', sinhalaName: 'සිහින් හාල් පිටි', amount: 2, unit: 'cups', pantryKey: 'rice_flour' },
      { name: 'Coconut Milk (fresh)', sinhalaName: 'මිටිකිරි', amount: 1.5, unit: 'cups', pantryKey: 'coconut_milk' },
      { name: 'Coconut Water or Yeast', sinhalaName: 'පොල් වතුර හෝ ඊස්ට්', amount: 1, unit: 'tsp yeast', pantryKey: 'coconut_milk' },
      { name: 'Farm Eggs', sinhalaName: 'බිත්තර', amount: 4, unit: 'whole', pantryKey: 'egg' },
      { name: 'Sugar & Salt', sinhalaName: 'සීනි සහ ලුණු', amount: 1, unit: 'tsp', pantryKey: 'chilli_powder' },
      { name: 'Cracked Black Pepper', sinhalaName: 'කළු ගම්මිරිස් කුඩු', amount: 1, unit: 'tsp', pantryKey: 'black_pepper' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Ferment Batter',
        sinhalaTitle: 'ආප්ප පිටි මිශ්‍රණය පැසවීම',
        text: 'Mix rice flour with coconut water, yeast, and sugar. Knead into a soft dough and let ferment in a warm spot for 6 to 8 hours until bubbly and aromatic.',
        sinhalaText: 'හාල් පිටි වලට ඊස්ට්, සීනි සහ පොල් වතුර දමා අනා පැය 6-8ක් පැසෙන්නට තබන්න.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Thin with Coconut Milk',
        sinhalaTitle: 'පොල්කිරි යොදා දියර කරගැනීම',
        text: 'Gradually whisk in thick coconut milk and salt until the batter reaches a smooth pancake consistency.',
        sinhalaText: 'පැසුණු පිටි මිශ්‍රණයට උකු පොල් කිරි සහ ලුණු දමා සුමට දියරයක් වනසේ හොඳින් කලවම් කරන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Swirl the Hopper Pan',
        sinhalaTitle: 'තාච්චියේ ආප්ප කරකැවීම',
        text: 'Heat the hopper pan and lightly wipe with an oiled cloth. Pour a ladle of batter into the center, hold both handles, and swirl quickly so batter lines the sides.',
        sinhalaText: 'ආප්ප තාච්චිය රත්කර තෙල් ස්වල්පයක් ගා ආප්ප මිශ්‍රණයෙන් හැන්දක් දමා අත් දෙකෙන් අල්ලා වටේට කරකවා ගන්න.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Drop the Egg & Steam',
        sinhalaTitle: 'බිත්තරය මැදට දමා පියන වැසීම',
        text: 'Crack an egg directly into the center. Sprinkle freshly cracked black pepper and salt. Cover tightly and cook on medium-low for 2-3 minutes until edges are crispy brown and yolk is cooked to preference.',
        sinhalaText: 'ආප්පය මැදට බිත්තරයක් කඩා දමා ගම්මිරිස් සහ ලුණු ඉසින්න. පියන වසා විනාඩි 2-3ක් බිත්තරය තැම්බී දාරය කරස් ගාන තෙක් පිසගන්න.',
        durationMinutes: 3
      }
    ],
    chefTips: [
      'Seasoning the hopper pan properly with an oiled cloth ensures the hopper releases like silk without tearing.',
      'For sweeter cravings, add a spoonful of kithul treacle into plain hoppers to make Pani Aappa!'
    ],
    sinhalaChefTips: [
      'තාච්චියට තෙල් රෙදි කඩකින් තෙල් ගා හොඳින් රත් කරගැනීමෙන් ආප්පය නොඇලී ලෙහෙසියෙන්ම ගැලවී එයි.',
      'පැණි ආප්ප සඳහා උණුසුම් ආප්පය මැදට කිතුල් පැණි හැන්දක් දමා පිළිගන්වන්න.'
    ],
    servingSuggestions: 'Serve with spicy Lunu Miris, Katta Sambol, or sweet Seeni Sambol.',
    sinhalaServingSuggestions: 'සැර ලුණු මිරිස් හෝ සීනි සම්බෝල සමඟ උණුවෙන්ම රසවිඳින්න.',
    isPopular: true,
    isHeritageFavorite: true
  },
  {
    id: 'pol-roti-katta-sambol',
    name: 'Rustic Pol Roti & Katta Sambol',
    sinhalaName: 'පොල් රොටී සහ කට්ට සම්බෝල',
    tagline: 'Hearty flatbread kneaded with fresh grated coconut and green chillies, served with zesty onion sambol.',
    sinhalaTagline: 'ගාගත් පොල්, අමුමිරිස් හා පිටි එකට අනා තැටියේ පුළුස්සා ගත් සම්ප්‍රදායික උණු උණු පොල් රොටී.',
    category: 'roti',
    mealTypes: ['breakfast', 'dinner', 'tea-time'],
    diet: 'vegetarian',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    caloriesPerServing: 280,
    proteinPerServing: 7,
    fatPerServing: 12,
    carbsPerServing: 38,
    spiceLevel: 2,
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=1000&q=80',
    description: 'Crispy on the outside, tender on the inside flatbreads made with wheat or kurakkan flour, freshly scraped coconut, chopped shallots, curry leaves, and green chillies, dry-toasted on a hot tawa with fiery Katta Sambol.',
    sinhalaDescription: 'නැවුම්ව ගාගත් පොල්, පාන් පිටි හෝ කුරක්කන් පිටි, සිහින්ව ලියාගත් රතු ළූණු, අමුමිරිස් හා කරපිංචා දමා අනා ගත් රොටී තැටියේ රන්වන් පැහැ වනතුරු පුළුස්සා කට්ට සම්බෝල සමඟ කෑමට ගනී.',
    ingredients: [
      { name: 'Wheat Flour / Kurakkan Flour', sinhalaName: 'පාන් පිටි හෝ කුරක්කන් පිටි', amount: 2, unit: 'cups', pantryKey: 'wheat_flour' },
      { name: 'Freshly Scraped Coconut', sinhalaName: 'අලුත් ගාගත් පොල්', amount: 1.5, unit: 'cups', pantryKey: 'scraped_coconut' },
      { name: 'Red Onions (finely chopped)', sinhalaName: 'රතු ළූණු', amount: 6, unit: 'shallots', pantryKey: 'red_onion' },
      { name: 'Green Chillies (chopped)', sinhalaName: 'අමු මිරිස්', amount: 3, unit: 'pods', pantryKey: 'green_chilli' },
      { name: 'Curry Leaves (finely shredded)', sinhalaName: 'කරපිංචා', amount: 1, unit: 'sprig', pantryKey: 'curry_leaves' },
      { name: 'Salt & Lukewarm Water', sinhalaName: 'ලුණු සහ මඳ උණුසුම් වතුර', amount: 0.75, unit: 'cups', pantryKey: 'wheat_flour' },
      { name: 'Chilli Flakes & Lime (for Katta Sambol)', sinhalaName: 'කෑලි මිරිස් සහ දෙහි (කට්ට සම්බෝලයට)', amount: 2, unit: 'tbsp', pantryKey: 'chilli_powder' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Combine Dry Ingredients',
        sinhalaTitle: 'වියළි ද්‍රව්‍ය එකතු කිරීම',
        text: 'In a large bowl, rub the scraped coconut with salt, chopped onions, green chillies, and curry leaves using your fingers to release essential oils.',
        sinhalaText: 'බඳුනකට ගාගත් පොල්, ලුණු, සිහින්ව කපාගත් රතු ළූණු, අමුමිරිස් සහ කරපිංචා දමා අතින් හොඳින් මිරිකමින් පොඩි කරන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Knead the Dough',
        sinhalaTitle: 'පිටි ගුලිය අනා ගැනීම',
        text: 'Add the flour and mix. Gradually pour lukewarm water a little at a time and knead into a pliable, non-sticky dough ball.',
        sinhalaText: 'පිටි එකතු කර මඳ උණුසුම් වතුර ටිකෙන් ටික දමමින් ඇඟිලිවල නොඇලෙන මෘදු පිටි ගුලියක් වනසේ අනා ගන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Flatten into Discs',
        sinhalaTitle: 'රොටී හැඩ ගසා ගැනීම',
        text: 'Divide into 6 golf ball sized portions. Flatten each portion into a circular disc (approx 5mm thick) using your palms or a rolling pin.',
        sinhalaText: 'පිටි ගුලි 6කට කඩා අත්ලෙන් හෝ තෙල් ගෑ ලෑල්ලක තබා රවුම් හැඩයට තුනී කරගන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Toast on Hot Griddle',
        sinhalaTitle: 'තැටියේ පුළුස්සා ගැනීම',
        text: 'Place the roti on a dry hot griddle or skillet. Toast both sides on medium flame until light golden-brown toasted spots appear.',
        sinhalaText: 'තෙල් නොදැමූ රස්නෙ තැටියක දමා දෙපැත්ත හරවමින් රන්වන් තිත් මතු වනතුරු හොඳින් පුළුස්සා ගන්න.',
        durationMinutes: 8
      }
    ],
    chefTips: [
      'Pressing the chopped onions and chillies with salt and coconut first releases their flavorful juices into the dough.',
      'Substitute half of the wheat flour with Kurakkan (finger millet) flour for high-fiber diabetic-friendly authentic village roti.'
    ],
    sinhalaChefTips: [
      'පොල් සමග ළූණු, අමුමිරිස් සහ ලුණු අතින් තද කර මිරිකීමෙන් එහි යුෂ පිටි මිශ්‍රණය පුරා අපූරුවට මුසු වේ.',
      'සෞඛ්‍ය සම්පන්න ගමේ රසයක් සඳහා පාන් පිටි වෙනුවට කුරක්කන් පිටි අඩක් මිශ්‍ර කරන්න.'
    ],
    servingSuggestions: 'Best enjoyed warm with Katta Sambol, Lunumiris, or sweet Kithul Treacle.',
    sinhalaServingSuggestions: 'කට්ට සම්බෝල, ලුණු මිරිස් හෝ කිතුල් පැණි සමඟ උණුවෙන්ම රසවිඳින්න.',
    isPopular: true,
    isHeritageFavorite: true
  },
  {
    id: 'parippu-dhal-curry',
    name: 'Creamy Sri Lankan Parippu (Dhal Curry)',
    sinhalaName: 'ක්‍රීමි පරිප්පු හොද්ද (තෙම්පරාදු පරිප්පු)',
    tagline: 'The quintessential golden comfort food of every Sri Lankan household, rich with coconut milk and tempered spices.',
    sinhalaTagline: 'ශ්‍රී ලාංකික හැම ගෙදරකම දිනපතා පිසෙන, උකු පොල්කිරි සහ සුවඳැති තෙම්පරාදුවෙන් අනූන කහ පරිප්පු වෑංජනය.',
    category: 'rice-curry',
    mealTypes: ['breakfast', 'lunch', 'dinner'],
    diet: 'vegan',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    caloriesPerServing: 220,
    proteinPerServing: 12,
    fatPerServing: 8,
    carbsPerServing: 26,
    spiceLevel: 1,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    description: 'Split red lentils simmered gently with turmeric, raw curry powder, curry leaves, and pandan, finished with rich coconut milk and crowned with sizzling tempered mustard seeds, shallots, and dried red chillies.',
    sinhalaDescription: 'රතු පරිප්පු, කහ, අමු තුනපහ, රම්පෙ, කරපිංචා සමඟ මඳ ගින්නේ තම්බා, උකු පොල්කිරි දමා, රතු ළූණු, අබ සහ වියළි මිරිස් තෙම්පරාදුව එක්කළ රසවත් පරිප්පු හොද්ද.',
    ingredients: [
      { name: 'Red Split Lentils (Masoor Dhal)', sinhalaName: 'රතු පරිප්පු', amount: 1.5, unit: 'cups', pantryKey: 'dhal' },
      { name: 'Thick Coconut Milk', sinhalaName: 'උකු මිටිකිරි', amount: 1, unit: 'cup', pantryKey: 'coconut_milk' },
      { name: 'Red Onions (sliced)', sinhalaName: 'රතු ළූණු', amount: 5, unit: 'shallots', pantryKey: 'red_onion' },
      { name: 'Garlic (sliced)', sinhalaName: 'සුදු ළූණු', amount: 3, unit: 'cloves', pantryKey: 'garlic' },
      { name: 'Green Chillies (slit)', sinhalaName: 'අමු මිරිස්', amount: 2, unit: 'pods', pantryKey: 'green_chilli' },
      { name: 'Curry Leaves & Pandan (Rampe)', sinhalaName: 'කරපිංචා සහ රම්පෙ', amount: 2, unit: 'sprigs', pantryKey: 'curry_leaves' },
      { name: 'Turmeric Powder', sinhalaName: 'කහ කුඩු', amount: 0.5, unit: 'tsp', pantryKey: 'turmeric' },
      { name: 'Raw Sri Lankan Curry Powder', sinhalaName: 'අමු තුනපහ කුඩු', amount: 1, unit: 'tsp', pantryKey: 'curry_powder' },
      { name: 'Mustard Seeds', sinhalaName: 'අබ ඇට', amount: 0.5, unit: 'tsp', pantryKey: 'mustard' },
      { name: 'Dried Red Chillies (broken)', sinhalaName: 'වියළි මිරිස් කරල්', amount: 2, unit: 'pods', pantryKey: 'chilli_powder' },
      { name: 'Coconut Oil for tempering', sinhalaName: 'පොල් තෙල්', amount: 1.5, unit: 'tbsp', pantryKey: 'coconut_oil' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil Lentils with Aromatics',
        sinhalaTitle: 'පරිප්පු තම්බා ගැනීම',
        text: 'Wash the dhal thoroughly until water runs clear. Place in a saucepan with 2 cups water, turmeric, half the sliced onions, garlic, green chillies, curry leaves, and pandan. Simmer until dhal is tender and water is absorbed.',
        sinhalaText: 'පරිප්පු හොඳින් සෝදා වතුර කෝප්ප 2ක්, කහ කුඩු, ළූණු අඩක්, සුදුළූණු, අමුමිරිස්, කරපිංචා හා රම්පෙ දමා පරිප්පු ඇට මෙළෙක් වනතුරු තම්බාගන්න.',
        durationMinutes: 12
      },
      {
        stepNumber: 2,
        title: 'Add Coconut Milk',
        sinhalaTitle: 'පොල්කිරි සහ ලුණු එක්කිරීම',
        text: 'Pour in the thick coconut milk, raw curry powder, and salt. Stir gently and bring to a gentle bubble for 3-4 minutes. Do not let it boil violently.',
        sinhalaText: 'උකු මිටිකිරි, අමු තුනපහ සහ ලුණු එකතු කරන්න. හැඳිගාමින් විනාඩි 3-4ක් මඳ ගින්නේ පිසෙන්නට හරින්න.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Sizzle the Tempered Spices',
        sinhalaTitle: 'සුවඳවත් තෙම්පරාදුව සකස් කිරීම',
        text: 'In a small pan, heat coconut oil. Sizzle mustard seeds until popping, then add remaining shallots, dried red chillies, and curry leaves. Fry until golden brown.',
        sinhalaText: 'වෙනත් කුඩා තාච්චියක පොල් තෙල් රත්කර අබ පුපුරුවා, ඉතිරි ළූණු, වියළි මිරිස් සහ කරපිංචා දමා රන්වන් වනතෙක් තෙම්පරාදු කරන්න.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Combine & Rest',
        sinhalaTitle: 'තෙම්පරාදුව හොද්දට එක් කිරීම',
        text: 'Pour the sizzling tempered spices directly over the creamy dhal curry. Cover immediately with a lid for 2 minutes to trap the heavenly aroma.',
        sinhalaText: 'රත්වූ තෙම්පරාදුව කෙලින්ම පරිප්පු හොද්දට වත්කර සුවඳ රැඳෙන සේ වහාම පියන වසා විනාඩි 2ක් තබන්න.',
        durationMinutes: 2
      }
    ],
    chefTips: [
      'Always add salt AFTER the dhal has boiled soft; adding salt too early can prevent the lentils from softening nicely.',
      'Covering the pot immediately after pouring the sizzling tempering locks in the fragrant volatile oils.'
    ],
    sinhalaChefTips: [
      'පරිප්පු ඇට හොඳින් තැම්බුණු පසුව පමණක් ලුණු එක් කරන්න; මුලදීම ලුණු දැමීමෙන් පරිප්පු තැම්බීම ප්‍රමාද වේ.',
      'තෙම්පරාදුව දැමූ වහාම පියන වැසීමෙන් රසවත් සුවඳ මුළු හොද්ද පුරාම තැන්පත් වේ.'
    ],
    servingSuggestions: 'Flawless partner for hot Steamed Rice, Roast Paan, or crispy Pol Roti.',
    sinhalaServingSuggestions: 'සුදු බත්, රෝස් පාන් හෝ උණුසුම් පොල් රොටී සමඟ ඉතා ප්‍රණීතයි.',
    isPopular: true,
    isHeritageFavorite: true
  },
  {
    id: 'polos-curry',
    name: 'Traditional Polos Ambula (Baby Jackfruit Curry)',
    sinhalaName: 'ගමේ රසට පොලොස් ඇඹුල',
    tagline: 'The royal slow-cooked vegan delight of Sri Lanka, simmered in a clay pot until meat-like tender.',
    sinhalaTagline: 'පැය ගණනක් මැටි වළඳේ අඩු ගින්දරේ හිඳුවා ගත්, මස් රස පරදන සිංහල ගැමි පොලොස් ඇඹුල.',
    category: 'rice-curry',
    mealTypes: ['lunch', 'dinner'],
    diet: 'vegan',
    difficulty: 'hard',
    prepTime: 25,
    cookTime: 60,
    servings: 6,
    caloriesPerServing: 260,
    proteinPerServing: 6,
    fatPerServing: 14,
    carbsPerServing: 30,
    spiceLevel: 3,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    description: 'Baby jackfruit chunks gently tenderized with dark roasted Sri Lankan curry powder, Goraka, garlic, thick coconut milk, and spices, slow-cooked in a traditional clay pot over low heat until deeply mahogany colored.',
    sinhalaDescription: 'පොලොස් ගැට කැබලි, කළුවරට බැදපු තුනපහ, ගොරකා, සුදුළූණු සහ උකු පොල්කිරි සමඟ මැටි හට්ටියේ මඳ ගින්නේ හිඳුවා ගන්නා පාරම්පරික පොලොස් ඇඹුල.',
    ingredients: [
      { name: 'Baby Jackfruit (peeled & chunked)', sinhalaName: 'කපාගත් පොලොස් ගැට', amount: 500, unit: 'g', pantryKey: 'polos' },
      { name: 'Dark Roasted Sri Lankan Curry Powder', sinhalaName: 'කළුවරට බැදපු තුනපහ', amount: 2.5, unit: 'tbsp', pantryKey: 'curry_powder' },
      { name: 'Thick Coconut Milk', sinhalaName: 'උකු මිටිකිරි', amount: 2, unit: 'cups', pantryKey: 'coconut_milk' },
      { name: 'Thin Coconut Milk', sinhalaName: 'දියකිරි', amount: 2, unit: 'cups', pantryKey: 'coconut_milk' },
      { name: 'Goraka (Garcinia paste)', sinhalaName: 'ගොරකා තලපය', amount: 1.5, unit: 'tbsp', pantryKey: 'goraka' },
      { name: 'Red Onions & Garlic', sinhalaName: 'රතු ළූණු සහ සුදු ළූණු', amount: 8, unit: 'cloves/shallots', pantryKey: 'red_onion' },
      { name: 'Curry Leaves, Pandan & Cinnamon', sinhalaName: 'කරපිංචා, රම්පෙ, කුරුඳු', amount: 2, unit: 'sprigs', pantryKey: 'curry_leaves' },
      { name: 'Chilli Powder & Black Pepper', sinhalaName: 'මිරිස් කුඩු සහ ගම්මිරිස් කුඩු', amount: 1.5, unit: 'tbsp', pantryKey: 'chilli_powder' },
      { name: 'Salt', sinhalaName: 'ලුණු', amount: 1.5, unit: 'tsp', pantryKey: 'chilli_powder' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Prep Baby Jackfruit',
        sinhalaTitle: 'පොලොස් කැබලි සූදානම් කිරීම',
        text: 'Oil your hands and knife to handle the sticky sap. Peel the outer thorny skin and cut the tender baby jackfruit into bite-sized triangular pieces. Immerse immediately in turmeric water to prevent discoloration.',
        sinhalaText: 'අත්වල සහ පිහියේ තෙල් ගා පොලොස් කටු ඉවත් කර ත්‍රිකෝණාකාර කැබලි වලට කපා කහ වතුරේ දමන්න.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Marinate with Spices & Goraka',
        sinhalaTitle: 'තුනපහ සහ ගොරකා මිශ්‍ර කිරීම',
        text: 'Drain the polos pieces. Mix thoroughly with dark roasted curry powder, chilli powder, goraka paste, black pepper, pounded garlic, sliced onions, and salt.',
        sinhalaText: 'පොලොස් කැබලි වලට බැදපු තුනපහ, මිරිස් කුඩු, ගොරකා, ගම්මිරිස්, සුදුළූණු සහ ලුණු දමා හොඳින් අතගාන්න.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Slow Simmer in Thin Coconut Milk',
        sinhalaTitle: 'දියකිරෙන් මඳ ගින්නේ තැම්බීම',
        text: 'Transfer to an unglazed clay pot. Add thin coconut milk, cinnamon, rampe, and karapincha. Cover tightly and cook on low heat for 40 minutes until polos begins to soften.',
        sinhalaText: 'මැටි හට්ටියකට දමා දියකිරි, කුරුඳු, රම්පෙ සහ කරපිංචා එක්කර පියන වසා මඳ ගින්දරේ විනාඩි 40ක් තැම්බෙන්න හරින්න.',
        durationMinutes: 40
      },
      {
        stepNumber: 4,
        title: 'Simmer with Thick Coconut Milk',
        sinhalaTitle: 'මිටිකිරි දමා හිඳුවා ගැනීම',
        text: 'Pour in the thick coconut milk (mitikiri). Lower flame to the minimum and gently simmer until the gravy turns rich, velvety dark brown and the polos is so tender it yields to a spoon.',
        sinhalaText: 'උකු මිටිකිරි දමා ගින්දර ඉතා අඩු මට්ටමකට දමා තෙල් පෑදී කළු-දුඹුරු පැහැ වනතුරු පැය භාගයක් පමණ හිඳුවා ගන්න.',
        durationMinutes: 25
      }
    ],
    chefTips: [
      'In traditional village kitchens, Polos is cooked overnight on dying firewood embers (ලිපේ තියා හිඳවීම) for an incomparable tender texture.',
      'A dash of crushed dried black pepper at the very end enhances its rich woody aroma.'
    ],
    sinhalaChefTips: [
      'ගැමි ගෙවල්වල පොලොස් ඇඹුල දර ලිපේ අළු යට තබා රැයක් පුරා හිඳවයි, එමඟින් මස් මෙන් මෙළෙක් රසයක් ලැබේ.',
      'අවසානයේදී නැවුම්ව අඹරාගත් කළු ගම්මිරිස් ස්වල්පයක් ඉසීමෙන් සුවිශේෂී සුවඳක් එක්වේ.'
    ],
    servingSuggestions: 'An essential centerpiece for Sri Lankan rice and curry feasts.',
    sinhalaServingSuggestions: 'රතු කැකුළු බත්, පරිප්පු සහ පොල් සම්බෝල සමඟ නියම සංකලනයකි.',
    isPopular: true,
    isHeritageFavorite: true
  },
  {
    id: 'pol-sambol',
    name: 'Authentic Miris Gala Pol Sambol',
    sinhalaName: 'නියම මිරිස් ගලේ පොල් සම්බෝල',
    tagline: 'The iconic fiery, ruby-red coconut relish ground fresh on the granite stone with red onions and lime.',
    sinhalaTagline: 'නැවුම් පොල්, රතු ළූණු, වියළි මිරිස්, දෙහි සහ උම්බලකඩ මිරිස් ගලේ අඹරා ගත් නියම පොල් සම්බෝල.',
    category: 'sambols',
    mealTypes: ['breakfast', 'lunch', 'dinner'],
    diet: 'vegetarian',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    caloriesPerServing: 175,
    proteinPerServing: 3,
    fatPerServing: 15,
    carbsPerServing: 6,
    spiceLevel: 3,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    description: 'Freshly scraped coconut hand-crushed on a traditional granite grinding stone with whole dry red chillies, shallots, sea salt, Maldive fish flakes, and freshly squeezed key lime juice.',
    sinhalaDescription: 'නැවුම්ව ගාගත් පොල්, වියළි මිරිස් කරල්, රතු ළූණු, ලුණු, උම්බලකඩ සහ නැවුම් දෙහි යුෂ මිරිස් ගලක හෝ වංගෙඩියක මෘදුව අඹරා සකසන ලද සම්ප්‍රදායික පොල් සම්බෝල.',
    ingredients: [
      { name: 'Freshly Scraped Coconut', sinhalaName: 'නැවුම් ගාගත් පොල්', amount: 2, unit: 'cups', pantryKey: 'scraped_coconut' },
      { name: 'Whole Dry Red Chillies / Flakes', sinhalaName: 'වියළි මිරිස් කරල් / කෑලි මිරිස්', amount: 2, unit: 'tbsp', pantryKey: 'chilli_powder' },
      { name: 'Red Onions / Shallots (sliced)', sinhalaName: 'රතු ළූණු', amount: 6, unit: 'shallots', pantryKey: 'red_onion' },
      { name: 'Maldive Fish Flakes (optional)', sinhalaName: 'උම්බලකඩ කුඩු', amount: 1, unit: 'tbsp', pantryKey: 'maldive_fish', optional: true },
      { name: 'Fresh Lime Juice', sinhalaName: 'දෙහි යුෂ', amount: 1.5, unit: 'whole lime', pantryKey: 'lime' },
      { name: 'Sea Salt', sinhalaName: 'කැට ලුණු', amount: 1, unit: 'tsp', pantryKey: 'chilli_powder' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Crush the Chillies and Salt',
        sinhalaTitle: 'මිරිස් සහ ලුණු ඇඹරීම',
        text: 'On a traditional grinding stone (miris gala) or in a mortar, grind the dry chillies, salt, and Maldive fish flakes into a coarse crimson paste.',
        sinhalaText: 'මිරිස් ගලක හෝ වංගෙඩියක වියළි මිරිස්, ලුණු සහ උම්බලකඩ දමා තරමක් සියුම් වනතුරු අඹරන්න.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Pound the Shallots',
        sinhalaTitle: 'රතු ළූණු එක්කර තැලීම',
        text: 'Add the sliced red shallots to the paste and crush lightly to release the sweet onion juices without pureeing them completely.',
        sinhalaText: 'රතු ළූණු එකතු කර සම්පූර්ණයෙන් පොඩි නොවී කැබලි සිටින සේ මඳක් තලා මිශ්‍ර කරන්න.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Incorporate Scraped Coconut',
        sinhalaTitle: 'පොල් එකතු කර අතගෑම',
        text: 'Spread the freshly scraped coconut over the mixture. Use the stone or pestle to gently fold and rub until the coconut absorbs the bright orange-red chili color.',
        sinhalaText: 'ගාගත් පොල් එකතු කර මිරිස් පාට පොල් වලට හොඳින් උරාගන්නා තෙක් අඹරා මිශ්‍ර කරන්න.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Finish with Lime',
        sinhalaTitle: 'දෙහි යුෂ මුසු කිරීම',
        text: 'Squeeze fresh lime juice over the sambol. Toss lightly with fingers. Taste and balance salt and lime.',
        sinhalaText: 'නැවුම් දෙහි යුෂ ඉස අතින් හොඳින් කලවම් කරන්න. ලුණු සහ ඇඹුල් පදම පරීක්ෂා කරන්න.',
        durationMinutes: 1
      }
    ],
    chefTips: [
      'Using the traditional grinding stone (Miris Gala) extracts the natural oils from the coconut and onions, creating a flavor unachievable in electric food processors.',
      'For a smoky breakfast variation, saute the sambol in a pan with a drop of coconut oil (Badapu Pol Sambol).'
    ],
    sinhalaChefTips: [
      'මිරිස් ගලේ ඇඹරීමෙන් පොල් සහ ළූණු වල ස්වභාවික තෙල් පිටතට පැමිණ අසමසම රසයක් ලබා දෙයි.',
      'උදෑසන පාන් සමඟ කෑමට පොල් තෙල් ස්වල්පයක් දමා තාච්චියේ බැදගත් (බැදපු පොල් සම්බෝල) සාදා ගත හැක.'
    ],
    servingSuggestions: 'Essential side for Hoppers, String Hoppers, Rice & Curry, and warm Crusty Bread with Butter.',
    sinhalaServingSuggestions: 'ආප්ප, ඉඳිආප්ප, බත් සහ බටර් ගෑ උණුසුම් රෝස් පාන් සමඟ අතිවිශිෂ්ටයි.',
    isPopular: true,
    isHeritageFavorite: true
  },
  {
    id: 'sri-lankan-fish-rolls',
    name: 'Crispy Sri Lankan Fish Rolls (Short Eats)',
    sinhalaName: 'ක්‍රිස්පි මාළු රෝල්ස් (කෙටි කෑම)',
    tagline: 'The undisputed party snack of Sri Lanka: spiced fish and potato wrapped in a thin crepe, crumbed and fried.',
    sinhalaTagline: 'ලංකාවේ ඕනෑම උත්සවයක ප්‍රධාන කෙටි කෑමක් වන සැර මාළු සහ අල පිරවූ රසවත් රෝල්ස්.',
    category: 'short-eats',
    mealTypes: ['tea-time'],
    diet: 'non-vegetarian',
    difficulty: 'medium',
    prepTime: 30,
    cookTime: 20,
    servings: 6,
    caloriesPerServing: 290,
    proteinPerServing: 14,
    fatPerServing: 13,
    carbsPerServing: 30,
    spiceLevel: 2,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1000&q=80',
    description: 'Savory filling of mashed potatoes, canned mackerel or tuna, sautéed leeks, onions, black pepper, and curry leaves encased inside a delicate rolled crepe, dipped in egg wash, coated in breadcrumbs and deep-fried to golden crunch.',
    sinhalaDescription: 'තම්බාගත් අර්තාපල්, ටින් මාළු හෝ කෙලවල්ලා, ලීක්ස්, ළූණු සහ ගම්මිරිස් පිරවුම සිහින් පෑන්කේක් වල ඔතා, බිත්තර හා බිස්කට් කුඩුවල දවටා ගැඹුරු තෙලේ රන්වන් වනතුරු බැදගත් මාළු රෝල්ස්.',
    ingredients: [
      { name: 'Canned Mackerel / Tuna or Boiled Fish', sinhalaName: 'ටින් මාළු හෝ තම්බාගත් මාළු', amount: 300, unit: 'g', pantryKey: 'canned_fish' },
      { name: 'Boiled Potatoes (mashed)', sinhalaName: 'තම්බා පොඩි කරගත් අර්තාපල්', amount: 3, unit: 'medium', pantryKey: 'potato' },
      { name: 'All-Purpose Flour (for crepes)', sinhalaName: 'පාන් පිටි', amount: 1.5, unit: 'cups', pantryKey: 'wheat_flour' },
      { name: 'Eggs (for batter & coating)', sinhalaName: 'බිත්තර', amount: 2, unit: 'eggs', pantryKey: 'egg' },
      { name: 'Breadcrumbs', sinhalaName: 'පාන් කුඩු / බිස්කට් කුඩු', amount: 2, unit: 'cups', pantryKey: 'wheat_flour' },
      { name: 'Big Onion (finely diced)', sinhalaName: 'ලොකු ළූණු', amount: 1, unit: 'medium', pantryKey: 'big_onion' },
      { name: 'Leeks & Green Chillies', sinhalaName: 'ලීක්ස් සහ අමු මිරිස්', amount: 0.5, unit: 'cup', pantryKey: 'leeks' },
      { name: 'Curry Leaves & Black Pepper', sinhalaName: 'කරපිංචා සහ කළු ගම්මිරිස්', amount: 1.5, unit: 'tbsp', pantryKey: 'black_pepper' },
      { name: 'Coconut Oil for frying', sinhalaName: 'බැදීමට පොල් තෙල්', amount: 3, unit: 'cups', pantryKey: 'coconut_oil' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Cook the Spiced Fish Filling',
        sinhalaTitle: 'මාළු පිරවුම පිසගැනීම',
        text: 'In a pan with 1 tbsp oil, sauté diced onions, green chillies, and curry leaves. Add shredded fish, mashed potatoes, plenty of black pepper, and salt. Cook until dry and cool.',
        sinhalaText: 'තාච්චියකට තෙල් ස්වල්පයක් දමා ළූණු, අමුමිරිස්, කරපිංචා තෙම්පරාදු කර මාළු, අල, ගම්මිරිස් සහ ලුණු දමා තෙතමනය සිඳෙන තෙක් පිස නිවෙන්න හරින්න.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Make Paper-Thin Crepes',
        sinhalaTitle: 'සිහින් පෑන්කේක් තැටියේ සාදා ගැනීම',
        text: 'Whisk flour, 1 egg, a pinch of salt, and water to make a thin batter. Pour a small ladle on a non-stick pan to make ultra-thin crepes without browning.',
        sinhalaText: 'පිටි, බිත්තරයක්, ලුණු සහ වතුර දමා සිහින් දියරයක් සාදා නොඇලෙන තැටියක සිහින් පෑන්කේක් සාදාගන්න.',
        durationMinutes: 12
      },
      {
        stepNumber: 3,
        title: 'Fill and Roll',
        sinhalaTitle: 'පිරවුම තබා රෝල් කරගැනීම',
        text: 'Place 2 tablespoons of fish filling onto the center of each crepe. Fold the sides inward and roll tightly into a cylinder.',
        sinhalaText: 'පෑන්කේක් එකක් මැදට මාළු මිශ්‍රණයෙන් හැඳි දෙකක් තබා දෙපැත්ත නවා තදින් රෝල් කරන්න.',
        durationMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Crumb and Deep Fry',
        sinhalaTitle: 'පාන් කුඩු තවරා ගැඹුරු තෙලේ බැදීම',
        text: 'Dip each roll into beaten egg, roll in breadcrumbs to coat completely, then deep-fry in hot oil until deep golden and crunchy.',
        sinhalaText: 'රෝල්ස් බිත්තර සාරුවේ ගිල්වා පාන් කුඩු වල දවටා හොඳින් රත්වූ ගැඹුරු තෙලේ රන්වන් පැහැ වනතුරු බදින්න.',
        durationMinutes: 10
      }
    ],
    chefTips: [
      'Double crumb the rolls (egg -> crumbs -> egg -> crumbs) for an extra shattering crunch that stays crispy for hours.',
      'Make sure the fish filling is completely cool before rolling, or the hot steam will tear the delicate crepes.'
    ],
    sinhalaChefTips: [
      'වැඩිපුර කරස් ගා හැපෙන ගතියක් සඳහා බිත්තර සහ පාන්කුඩු දෙවරක් තවරන්න.',
      'රෝල්ස් පෑන්කේක් එකේ ඔතන්නට පෙර මාළු පිරවුම සම්පූර්ණයෙන්ම නිවෙන්නට හරින්න.'
    ],
    servingSuggestions: 'Serve with spicy tomato sauce or sweet chilli sauce and a steaming cup of Ceylon ginger tea.',
    sinhalaServingSuggestions: 'තක්කාලි සෝස් සහ උණුසුම් ඉඟුරු තේ කෝප්පයක් සමඟ හවස තේ වේලාවට පිළිගන්වන්න.',
    isPopular: true
  },
  {
    id: 'traditional-watalappan',
    name: 'Royal Sri Lankan Watalappan',
    sinhalaName: 'සාම්ප්‍රදායික කිතුල් වටලප්පන්',
    tagline: 'Rich steamed coconut jaggery custard perfumed with Ceylon cardamom, nutmeg, and crunchy roasted cashews.',
    sinhalaTagline: 'කිතුල් හකුරු, උකු පොල්කිරි, එනසාල් සහ කජු සමඟ වාෂ්පයෙන් තම්බාගත් ශ්‍රී ලාංකික රජ බොජුනක් බඳු අතුරුපස.',
    category: 'desserts',
    mealTypes: ['lunch', 'dinner'],
    diet: 'vegetarian',
    difficulty: 'medium',
    prepTime: 20,
    cookTime: 45,
    servings: 6,
    caloriesPerServing: 350,
    proteinPerServing: 9,
    fatPerServing: 17,
    carbsPerServing: 42,
    spiceLevel: 1,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    description: 'An iconic festive Sri Lankan dessert made by blending grated Kithul palm jaggery, thick fresh coconut milk, eggs, aromatic spices like cardamom, nutmeg, and cloves, then steamed to honeycomb perfection and topped with golden cashew nuts.',
    sinhalaDescription: 'ගාගත් කිතුල් හකුරු, උකු පොල් කිරි, බිත්තර, සුවඳැති එනසාල් සහ සාදික්කා සමඟ මිශ්‍ර කර, කජු එක්කර වාෂ්පයෙන් තම්බා සකසන ලද පැණි බේරෙන වටලප්පන්.',
    ingredients: [
      { name: 'Pure Kithul Jaggery / Treacle', sinhalaName: 'පිරිසිදු කිතුල් හකුරු හෝ පැණි', amount: 350, unit: 'g', pantryKey: 'kithul_jaggery' },
      { name: 'Thick Coconut Milk (First extract)', sinhalaName: 'උකු පළමු මිටිකිරි', amount: 1.5, unit: 'cups', pantryKey: 'coconut_milk' },
      { name: 'Fresh Eggs', sinhalaName: 'බිත්තර', amount: 6, unit: 'eggs', pantryKey: 'egg' },
      { name: 'Cardamom Pods (freshly crushed)', sinhalaName: 'කුඩු කරගත් එනසාල්', amount: 1, unit: 'tsp', pantryKey: 'cardamom' },
      { name: 'Grated Nutmeg & Clove powder', sinhalaName: 'සාදික්කා සහ කරාබුනැටි කුඩු', amount: 0.25, unit: 'tsp', pantryKey: 'cardamom' },
      { name: 'Roasted Cashew Nuts (split)', sinhalaName: 'බැදගත් කජු මද', amount: 50, unit: 'g', pantryKey: 'kithul_jaggery' },
      { name: 'Pinch of Salt', sinhalaName: 'ලුණු ස්වල්පයක්', amount: 0.25, unit: 'tsp', pantryKey: 'chilli_powder' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Melt the Jaggery',
        sinhalaTitle: 'හකුරු දියකර ගැනීම',
        text: 'Grate or shave the kithul jaggery finely. Gently heat with 3 tablespoons of water or warm coconut milk until completely melted and smooth. Strain through a fine sieve to remove any grit and let it cool.',
        sinhalaText: 'හකුරු සිහින්ව ගා වතුර ස්වල්පයක් සමඟ මඳ ගින්නේ දියකර පෙරාගෙන නිවෙන්න හරින්න.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Whisk Eggs Gently',
        sinhalaTitle: 'බිත්තර මෘදුව ගසා ගැනීම',
        text: 'In a large bowl, whisk eggs lightly with a fork until blended. Do NOT over-beat or whip into foam, as excess bubbles cause a coarse texture.',
        sinhalaText: 'බඳුනක බිත්තර ගෑරුප්පුවකින් මෘදුව කලවම් කරන්න. පෙන නොනැගෙන සේ පරිස්සමින් මිශ්‍ර කරන්න.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Combine Custard & Spices',
        sinhalaTitle: 'කිරි සහ කුළුබඩු මිශ්‍ර කිරීම',
        text: 'Stir in the cooled melted jaggery syrup, thick coconut milk, ground cardamom, nutmeg, clove powder, and a tiny pinch of salt. Strain the whole mixture through a muslin cloth or fine strainer.',
        sinhalaText: 'නිවුණු හකුරු පැණි, උකු පොල්කිරි, එනසාල්, සාදික්කා සහ ලුණු ස්වල්පයක් එකතු කර සියුම් පෙනේරයකින් පෙරාගන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Steam with Cashews',
        sinhalaTitle: 'කජු දමා වාෂ්පයෙන් තැම්බීම',
        text: 'Pour into a heatproof bowl or pudding dish. Cover tightly with foil to prevent steam droplets from falling in. Steam in a steamer for 40-45 minutes. Top with roasted cashews halfway through. Chill before slicing.',
        sinhalaText: 'තැටියකට දමා වාෂ්ප බිංදු නොවැටෙන සේ තීරු කඩදාසියකින් වසා වාෂ්පයෙන් විනාඩි 40-45ක් තම්බා ගන්න. බාගයක් තැම්බුණු පසු කජු උඩින් තබන්න.',
        durationMinutes: 45
      }
    ],
    chefTips: [
      'Never boil the jaggery and coconut milk vigorously together; always let the jaggery cool before blending with eggs so the eggs do not curdle.',
      'Covering the bowl with foil during steaming ensures a glossy, silky-smooth top without unsightly water droplets.'
    ],
    sinhalaChefTips: [
      'බිත්තර සමඟ මිශ්‍ර කිරීමට පෙර හකුරු දියරය සම්පූර්ණයෙන්ම නිවී තිබිය යුතුය, නැතහොත් බිත්තර කැටි ගැසේ.',
      'තැම්බීමේදී වාෂ්ප වතුර බඳුනට නොවැටෙන සේ ඇලුමිනියම් ෆොයිල් එකකින් තදින් වසන්න.'
    ],
    servingSuggestions: 'Serve chilled or at room temperature, garnished with toasted cashew nuts.',
    sinhalaServingSuggestions: 'ශීතකරණයේ තබා සිසිල් කර හෝ සාමාන්‍ය උෂ්ණත්වයේදී කජු සමඟ පිළිගන්වන්න.',
    isPopular: true,
    isHeritageFavorite: true
  },
  {
    id: 'string-hoppers-kiri-hodi',
    name: 'String Hoppers (Idiyappam) with Kiri Hodi',
    sinhalaName: 'ඉඳිආප්ප සහ කිරිහොදි',
    tagline: 'Delicate steamed rice flour noodle discs served with fragrant tempered coconut gravy and pol sambol.',
    sinhalaTagline: 'හාල් පිටියෙන් මිරිකා වාෂ්පයෙන් තැම්බූ මෘදු ඉඳිආප්ප සහ උකු කිරිහොදි.',
    category: 'hoppers',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'vegetarian',
    difficulty: 'medium',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    caloriesPerServing: 290,
    proteinPerServing: 6,
    fatPerServing: 9,
    carbsPerServing: 48,
    spiceLevel: 1,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    description: 'Fine nests of rice flour dough pressed through an idiyappam press onto woven bamboo mats and steamed to cloud-soft perfection. Served with golden turmeric Kiri Hodi (coconut gravy) and freshly grated Pol Sambol.',
    sinhalaDescription: 'හාල් පිටි අනා ඉඳිආප්ප වංගෙඩියෙන් තට්ටු මතට මිරිකා වාෂ්පයෙන් තම්බාගත් මෘදු ඉඳිආප්ප, කහ සහ උළුහාල් යෙදූ රසවත් කිරිහොදි සහ පොල් සම්බෝල සමඟ.',
    ingredients: [
      { name: 'Red or White Rice Flour', sinhalaName: 'කැකුළු හාල් පිටි', amount: 2.5, unit: 'cups', pantryKey: 'rice_flour' },
      { name: 'Boiling Hot Water & Salt', sinhalaName: 'නටන උණු වතුර සහ ලුණු', amount: 1.5, unit: 'cups', pantryKey: 'rice_flour' },
      { name: 'Coconut Milk (for Kiri Hodi)', sinhalaName: 'පොල් කිරි (කිරිහොදි සඳහා)', amount: 2, unit: 'cups', pantryKey: 'coconut_milk' },
      { name: 'Shallots & Green Chillies', sinhalaName: 'රතු ළූණු සහ අමු මිරිස්', amount: 5, unit: 'shallots', pantryKey: 'red_onion' },
      { name: 'Curry Leaves, Pandan & Fenugreek', sinhalaName: 'කරපිංචා, රම්පෙ, උළුහාල්', amount: 1, unit: 'tbsp', pantryKey: 'curry_leaves' },
      { name: 'Turmeric Powder & Lime', sinhalaName: 'කහ කුඩු සහ දෙහි යුෂ', amount: 1, unit: 'tsp', pantryKey: 'turmeric' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Make String Hopper Dough',
        sinhalaTitle: 'ඉඳිආප්ප පිටි ගුලිය සකස් කිරීම',
        text: 'Mix rice flour with salt. Gradually add boiling water, stirring with a wooden spoon, then knead into a smooth, pliable, soft dough that does not stick.',
        sinhalaText: 'හාල් පිටි වලට ලුණු දමා නටන උණු වතුර ස්වල්පය බැගින් දමමින් ලී හැන්දකින් මිශ්‍ර කර මෘදු පිටි ගුලියක් වනසේ අනා ගන්න.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Press into Mats and Steam',
        sinhalaTitle: 'වංගෙඩියෙන් මිරිකා වාෂ්පයෙන් තැම්බීම',
        text: 'Fill the string hopper mold. Squeeze circular noodle nests onto woven plastic or bamboo wicker mats. Steam in a steamer for 4-5 minutes until cooked.',
        sinhalaText: 'ඉඳිආප්ප වංගෙඩියට පිටි දමා ඉඳිආප්ප තට්ටු මතට රවුමට මිරිකන්න. වාෂ්පයෙන් විනාඩි 4-5ක් තම්බා ගන්න.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Cook Fragrant Kiri Hodi',
        sinhalaTitle: 'සුවඳවත් කිරිහොදි පිසීම',
        text: 'In a clay pot, combine coconut milk with sliced shallots, green chillies, turmeric, curry leaves, fenugreek seeds, and salt. Simmer gently while constantly stirring with a ladle to prevent curdling.',
        sinhalaText: 'මැටි හට්ටියක පොල්කිරි, රතු ළූණු, අමුමිරිස්, කහ, කරපිංචා, උළුහාල් සහ ලුණු දමා කිරි නොමිදෙන සේ හැඳිගාමින් මඳ ගින්නේ නටවා ගන්න.',
        durationMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Finish Kiri Hodi with Lime',
        sinhalaTitle: 'දෙහි යුෂ එක් කිරීම',
        text: 'Turn off the heat. Squeeze fresh lime juice into the Kiri Hodi to give it that trademark tangy, silky richness.',
        sinhalaText: 'ලිප නිවා කිරිහොද්දට දෙහි යුෂ එක්කර හොඳින් කලවම් කරන්න.',
        durationMinutes: 1
      }
    ],
    chefTips: [
      'The water added to the rice flour must be boiling hot to partially cook the starches, giving soft non-brittle noodles.',
      'Never stop stirring Kiri Hodi while on heat, otherwise the coconut milk will split and curdle.'
    ],
    sinhalaChefTips: [
      'පිටි අනන වතුර නටන උණුවතුරම විය යුතුය, එවිට ඉඳිආප්ප කැඩී නොගොස් මෘදුව ලැබේ.',
      'කිරිහොද්ද පිසින විට කිරි කැටි නොගැසීමට නොකඩවා හැඳිගාන්න.'
    ],
    servingSuggestions: 'Serve 10-12 warm string hoppers soaked in Kiri Hodi with a dollop of fresh Pol Sambol.',
    sinhalaServingSuggestions: 'ඉඳිආප්ප මතට උකු කිරිහොදි වත්කර නැවුම් පොල් සම්බෝල සමඟ රසවිඳින්න.',
    isPopular: true
  },
  {
    id: 'konda-kavum',
    name: 'New Year Konda Kavum',
    sinhalaName: 'සාම්ප්‍රදායික කොණ්ඩ කැවුම්',
    tagline: 'The timeless jewel of Sinhala celebrations: sweet rice flour oil-cakes with a signature crown.',
    sinhalaTagline: 'අලුත් අවුරුදු මේසයේ රජු වන, කිතුල් පැණි සහ හාල් පිටියෙන් ගැඹුරු තෙලේ පිසින කොණ්ඩ කැවුම්.',
    category: 'sweets',
    mealTypes: ['tea-time'],
    diet: 'vegetarian',
    difficulty: 'hard',
    prepTime: 30,
    cookTime: 40,
    servings: 8,
    caloriesPerServing: 210,
    proteinPerServing: 3,
    fatPerServing: 7,
    carbsPerServing: 35,
    spiceLevel: 1,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    description: 'Golden-brown deep-fried sweet cakes made from stone-ground rice flour, kithul treacle, cardamom, and fennel seeds, hand-sculpted in sizzling coconut oil using a wooden skewer (ekel) to create the iconic top knot (konda).',
    sinhalaDescription: 'කැකුළු හාල් පිටි, පිරිසිදු කිතුල් පැණි, එනසාල් සහ මාදුරු එක්කොට සාදාගත් දියරය, රත්වූ පොල් තෙලට දමා ඉරට්ටක් ආධාරයෙන් උඩට කොණ්ඩය මතුකර බදින ලද රසවත් කැවුම්.',
    ingredients: [
      { name: 'Finely Sifted Rice Flour', sinhalaName: 'හුළං ගිය කැකුළු හාල් පිටි', amount: 2, unit: 'cups', pantryKey: 'rice_flour' },
      { name: 'All-Purpose Flour', sinhalaName: 'පාන් පිටි', amount: 0.5, unit: 'cup', pantryKey: 'wheat_flour' },
      { name: 'Pure Kithul Treacle / Jaggery', sinhalaName: 'කිතුල් පැණි', amount: 1.5, unit: 'cups', pantryKey: 'kithul_jaggery' },
      { name: 'Crushed Cardamom & Fennel Seeds', sinhalaName: 'එනසාල් සහ මාදුරු', amount: 1, unit: 'tsp', pantryKey: 'cardamom' },
      { name: 'Salt & Warm Water', sinhalaName: 'ලුණු සහ උණු වතුර', amount: 0.5, unit: 'cup', pantryKey: 'rice_flour' },
      { name: 'Pure Coconut Oil for frying', sinhalaName: 'පොල් තෙල්', amount: 3, unit: 'cups', pantryKey: 'coconut_oil' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Warm the Treacle',
        sinhalaTitle: 'කිතුල් පැණි මඳක් රත්කිරීම',
        text: 'Gently warm the kithul treacle in a pan until runny. Stir in crushed cardamom and fennel seeds.',
        sinhalaText: 'කිතුල් පැණි මඳක් රත්කර එනසාල් සහ මාදුරු කුඩු එක්කරන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Prepare the Smooth Batter',
        sinhalaTitle: 'කැවුම් පිටි මිශ්‍රණය සෑදීම',
        text: 'In a wide bowl, combine rice flour, wheat flour, and salt. Pour in the warm treacle gradually, whisking with hands to form a thick, smooth batter with no lumps. Rest for 30 minutes.',
        sinhalaText: 'හාල් පිටි, පාන් පිටි වලට උණුසුම් පැණි ටිකෙන් ටික දමමින් කැටි නොසිටින සේ අතින් හොඳින් ගසා විනාඩි 30ක් තබන්න.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Pour into Hot Coconut Oil',
        sinhalaTitle: 'තෙලට දමා කොණ්ඩය සෑදීම',
        text: 'Heat coconut oil in a deep small frying thachchiya. Pour a ladle of batter directly into the center of the bubbling oil.',
        sinhalaText: 'ගැඹුරු කුඩා තාච්චියක පොල් තෙල් රත්කර මැදට පිටි හැන්දක් වත්කරන්න.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Twist the Konda Crest with Ekel Skewer',
        sinhalaTitle: 'ඉරට්ටෙන් කොණ්ඩය කැරකැවීම',
        text: 'Insert a clean wooden ekel or skewer into the center of the bubbling cake. While spooning hot oil continuously over the top with a spoon, twist the skewer gently to pull up the signature crown (konda). Fry till golden brown.',
        sinhalaText: 'කැවුම මැදට පිරිසිදු ඉරට්ටක් ගසා, උඩින් උණු තෙල් හැන්දෙන් වත්කරමින් ඉරට්ට මෘදුව කරකවා උඩට කොණ්ඩය මතුකර රන්වන් වනතුරු බදින්න.',
        durationMinutes: 5
      }
    ],
    chefTips: [
      'The secret to a fluffy Kavum is aerating the batter by beating it vigorously with your hand for 10-15 minutes.',
      'Use a deep concave bottom thachchiya (කැවුම් තාච්චිය) so the oil concentrates in the center.'
    ],
    sinhalaChefTips: [
      'කැවුම් මෙළෙක් වීමට පිටි මිශ්‍රණය අතින් විනාඩි 10-15ක් හොඳින් ගසා ගත යුතුය.',
      'නියම කොණ්ඩය මතු කර ගැනීමට පතුල ගැඹුරු කුඩා කැවුම් තාච්චියක්ම භාවිතා කරන්න.'
    ],
    servingSuggestions: 'Essential centerpiece for Sinhala & Tamil New Year (Aluth Avurudu) and celebratory tables.',
    sinhalaServingSuggestions: 'අලුත් අවුරුදු මේසයේ කෙසෙල් සහ කොකිස් සමඟ පිළිගන්වන්න.',
    isHeritageFavorite: true
  },
  {
    id: 'kola-kenda',
    name: 'Medicinal Kola Kenda (Herbal Green Porridge)',
    sinhalaName: 'පාරම්පරික ඔසු පිරි කොළ කැඳ',
    tagline: 'Ancient Ayurvedic wellness elixir packed with blended healing greens, red rice, and fresh coconut milk.',
    sinhalaTagline: 'ගොටුකොළ, හාතාවාරිය ආදී ඖෂධීය කොළ යුෂ, නිවුඩු සහල් සහ පොල්කිරි එක්කළ පාරම්පරික උදෑසන පානය.',
    category: 'drinks',
    mealTypes: ['breakfast'],
    diet: 'vegan',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    caloriesPerServing: 160,
    proteinPerServing: 5,
    fatPerServing: 6,
    carbsPerServing: 22,
    spiceLevel: 1,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    description: 'A deeply nourishing morning wellness broth made from cold-extracted juices of traditional therapeutic leaves (Gotukola, Hathavariya, Karapincha), simmered with red raw rice gruel, garlic, and coconut milk, sipped with pure Kithul jaggery.',
    sinhalaDescription: 'ගොටුකොළ හෝ හාතාවාරිය යුෂ, තම්බාගත් රතු කැකුළු බත්, සුදුළූණු සහ නැවුම් මිටිකිරි එක්කර සාදන ලද, කිතුල් හකුරු කැබැල්ලක් සමඟ උදෑසන පානය කරන ගුණදායී කොළ කැඳ.',
    ingredients: [
      { name: 'Traditional Greens (Gotukola/Hathavariya/Mukunuwenna)', sinhalaName: 'ගොටුකොළ හෝ හාතාවාරිය කොළ', amount: 3, unit: 'cups', pantryKey: 'herbal_greens' },
      { name: 'Red Raw Rice (Kekulu)', sinhalaName: 'රතු කැකුළු සහල්', amount: 0.75, unit: 'cup', pantryKey: 'rice' },
      { name: 'Thick Coconut Milk', sinhalaName: 'උකු මිටිකිරි', amount: 1.5, unit: 'cups', pantryKey: 'coconut_milk' },
      { name: 'Garlic Cloves', sinhalaName: 'සුදු ළූණු බික්', amount: 6, unit: 'cloves', pantryKey: 'garlic' },
      { name: 'Fresh Ginger', sinhalaName: 'ඉඟුරු කැබැල්ලක්', amount: 1, unit: 'thumb', pantryKey: 'ginger' },
      { name: 'Pure Kithul Jaggery (to accompany)', sinhalaName: 'කිතුල් හකුරු (කෑම සඳහා)', amount: 1, unit: 'piece', pantryKey: 'kithul_jaggery' },
      { name: 'Salt', sinhalaName: 'ලුණු', amount: 1, unit: 'tsp', pantryKey: 'chilli_powder' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Cook Rice and Garlic till Mushy',
        sinhalaTitle: 'බත් සහ සුදුළූණු තම්බා ගැනීම',
        text: 'Wash red rice and place in a pot with 3 cups water, peeled garlic cloves, and sliced ginger. Cook until the rice is thoroughly broken down and porridge-soft.',
        sinhalaText: 'රතු කැකුළු බත්, සුදුළූණු සහ ඉඟුරු වතුර කෝප්ප 3ක් සමඟ හොඳින් බෙරි වනතුරු තම්බාගන්න.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Extract Leaf Juice',
        sinhalaTitle: 'කොළ යුෂ මිරිකා ගැනීම',
        text: 'Wash the medicinal greens thoroughly. Blend with half a cup of water, then squeeze through a clean strainer to extract dark green chlorophyll juice. Discard pulp.',
        sinhalaText: 'කොළ වර්ග සෝදා වතුර ස්වල්පයක් සමඟ අඹරා පිරිසිදු පෙනේරයකින් තද කොළ පැහැති යුෂ පමණක් මිරිකා ගන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Add Coconut Milk',
        sinhalaTitle: 'පොල්කිරි සහ ලුණු එක්කිරීම',
        text: 'Mash the cooked rice slightly with a spoon. Pour in thick coconut milk and salt. Heat on low until steaming hot.',
        sinhalaText: 'තැම්බුණු බත් හැන්දෙන් පොඩි කර මිටිකිරි සහ ලුණු එක්කර මඳ ගින්නේ රත්කරන්න.',
        durationMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Stir in Leaf Juice (Do Not Boil)',
        sinhalaTitle: 'කොළ යුෂ එක්කර ලිප නිවීම',
        text: 'Pour in the green herbal juice. Stir continuously for 1-2 minutes until heated through. Turn off heat immediately before boiling to preserve vitamins and vibrant emerald color.',
        sinhalaText: 'කොළ යුෂ එකතු කර විනාඩියක් හැඳිගාන්න. නටන්නට පෙර වහාම ලිප නිවන්න; එවිට විටමින් සහ දීප්තිමත් කොළ පැහැය ආරක්ෂා වේ.',
        durationMinutes: 2
      }
    ],
    chefTips: [
      'Never boil Kola Kenda after adding the green juice, otherwise heat destroys the heat-sensitive antioxidants and turns the color dull khaki.',
      'Bite a tiny piece of pure Kithul jaggery with every sip—the sweet jaggery balances the slight herbal astringency perfectly.'
    ],
    sinhalaChefTips: [
      'කොළ යුෂ දැමූ පසු නටවන්නට එපා; නැතහොත් එහි ඇති ගුණ හා දීප්තිමත් කොළ පැහැය විනාශ වේ.',
      'සෑම උගුරක් පාසාම කුඩා කිතුල් හකුරු කැබැල්ලක් සපා රසවිඳින්න.'
    ],
    servingSuggestions: 'Serve warm in a clay mug alongside a fresh wedge of authentic Kithul jaggery.',
    sinhalaServingSuggestions: 'මැටි කෝප්පයක දමා කිතුල් හකුරු කැබැල්ලක් සමඟ හිස්බඩ පානය කරන්න.',
    isHeritageFavorite: true
  },
  {
    id: 'village-chicken-curry',
    name: 'Village Style Sri Lankan Chicken Curry',
    sinhalaName: 'ගමේ ක්‍රමයට සැර කුකුළු මස් වෑංජනය',
    tagline: 'Deeply aromatic chicken simmered in clay pot with roasted spice blend and creamy coconut gravy.',
    sinhalaTagline: 'බැදපු තුනපහ, ගොරකා, අමුමිරිස් සහ උකු පොල්කිරි යොදා මැටි හට්ටියේ පිසින ලද ගැමි කුකුළු මස් වෑංජනය.',
    category: 'rice-curry',
    mealTypes: ['lunch', 'dinner'],
    diet: 'non-vegetarian',
    difficulty: 'medium',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    caloriesPerServing: 420,
    proteinPerServing: 38,
    fatPerServing: 22,
    carbsPerServing: 12,
    spiceLevel: 3,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=80',
    description: 'Bone-in tender chicken cuts marinated in dark roasted curry powder, turmeric, black pepper, and goraka, sautéed with aromatics, then slow-simmered in thick coconut milk for an intensely fragrant reddish gravy.',
    sinhalaDescription: 'කුකුළු මස් කැබලි, බැදපු තුනපහ, ගම්මිරිස්, ගොරකා තලපය, සුදුළූණු සහ රතු ළූණු සමඟ අනා තෙම්පරාදු කර උකු මිටිකිරි දමා පිසගත් අපූරු කුකුළු මස් හොද්ද.',
    ingredients: [
      { name: 'Chicken (curry cut with bone)', sinhalaName: 'කපාගත් කුකුළු මස්', amount: 600, unit: 'g', pantryKey: 'chicken' },
      { name: 'Dark Roasted Sri Lankan Curry Powder', sinhalaName: 'බැදපු තුනපහ කුඩු', amount: 2, unit: 'tbsp', pantryKey: 'curry_powder' },
      { name: 'Chilli Powder & Chilli Flakes', sinhalaName: 'මිරිස් කුඩු සහ කෑලි මිරිස්', amount: 1.5, unit: 'tbsp', pantryKey: 'chilli_powder' },
      { name: 'Thick Coconut Milk', sinhalaName: 'උකු මිටිකිරි', amount: 1.5, unit: 'cups', pantryKey: 'coconut_milk' },
      { name: 'Big Onion (sliced)', sinhalaName: 'ලොකු ළූණු', amount: 1, unit: 'medium', pantryKey: 'big_onion' },
      { name: 'Ginger & Garlic (pounded)', sinhalaName: 'තලාගත් ඉඟුරු සහ සුදුළූණු', amount: 2, unit: 'tbsp', pantryKey: 'garlic' },
      { name: 'Curry Leaves, Rampe & Lemongrass', sinhalaName: 'කරපිංචා සහ රම්පෙ', amount: 2, unit: 'sprigs', pantryKey: 'curry_leaves' },
      { name: 'Goraka piece (or tamarind)', sinhalaName: 'ගොරකා කැබැල්ලක්', amount: 1, unit: 'piece', pantryKey: 'goraka' },
      { name: 'Ceylon Cinnamon & Cardamom', sinhalaName: 'කුරුඳු සහ එනසාල්', amount: 1, unit: 'stick', pantryKey: 'cinnamon' },
      { name: 'Coconut Oil', sinhalaName: 'පොල් තෙල්', amount: 2, unit: 'tbsp', pantryKey: 'coconut_oil' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Marinate the Chicken',
        sinhalaTitle: 'මස් කැබලි පදම් කරගැනීම',
        text: 'Mix chicken with roasted curry powder, chilli powder, turmeric, black pepper, goraka, and salt. Allow flavors to penetrate for 15 minutes.',
        sinhalaText: 'මස් කැබලි වලට බැදපු තුනපහ, මිරිස් කුඩු, කහ, ගම්මිරිස්, ගොරකා සහ ලුණු දමා විනාඩි 15ක් පදම් වන්නට තබන්න.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Sauté Aromatics in Clay Pot',
        sinhalaTitle: 'මැටි හට්ටියේ තෙම්පරාදු කිරීම',
        text: 'Heat coconut oil in a clay pot. Add cinnamon, cardamom, sliced onions, ginger, garlic, pandan, and curry leaves. Sauté until onions are translucent and fragrant.',
        sinhalaText: 'මැටි හට්ටියට තෙල් දමා කුරුඳු, එනසාල්, ළූණු, සුදුළූණු, ඉඟුරු, රම්පෙ සහ කරපිංචා දමා සුවඳ එනතෙක් තෙම්පරාදු කරන්න.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Brown Chicken & Cook in Own Juices',
        sinhalaTitle: 'මස් කැබලි තෙලෙන් බැද තැම්බීම',
        text: 'Add the marinated chicken to the pot. Stir-fry for 5 minutes until sealed. Cover with lid and cook on low heat for 10 minutes, letting the chicken release its natural juices.',
        sinhalaText: 'පදම් වූ මස් කැබලි එකතු කර විනාඩි 5ක් පෙරළමින් බැදෙන්න හරින්න. පියන වසා මස් වලින් වතුර පිටවනතුරු විනාඩි 10ක් මඳ ගින්නේ තබන්න.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Simmer with Thick Coconut Milk',
        sinhalaTitle: 'මිටිකිරි දමා උකු කරගැනීම',
        text: 'Pour in thick coconut milk. Lower heat and gently simmer for 15 minutes until gravy thickens and fragrant reddish oil beads float on top.',
        sinhalaText: 'උකු මිටිකිරි එකතු කර ගින්දර අඩු කර විනාඩි 15ක් හොද්ද උකු වී තෙල් පාදෙන තෙක් පිසගන්න.',
        durationMinutes: 15
      }
    ],
    chefTips: [
      'Cooking the chicken in its own juices before adding coconut milk concentrates the savory umami flavors.',
      'Sri Lankan roasted curry powder (Kalu Kudu) made with dark toasted coriander, cumin, and sweet fennel is the key soul of this dish.'
    ],
    sinhalaChefTips: [
      'පොල්කිරි දැමීමට පෙර මස් වලින් පිටවන යුෂයෙන්ම මඳක් තැම්බෙන්නට හැරීමෙන් මස් කැබලි ඉතා රසවත් වේ.',
      'කළුවරට බැදගත් ලාංකික තුනපහ කුඩු මේ වෑංජනයේ ප්‍රධාන රහසයි.'
    ],
    servingSuggestions: 'Heavenly served with White Rice or Pol Roti and a dollop of Pol Sambol.',
    sinhalaServingSuggestions: 'සුදු බත් හෝ උණු පොල් රොටී සහ පොල් සම්බෝල සමඟ පිළිගන්වන්න.',
    isPopular: true
  },
  {
    id: 'sweet-seeni-sambol',
    name: 'Caramelized Sweet Seeni Sambol',
    sinhalaName: 'පැණි රස කැරමල් සීනි සම්බෝල',
    tagline: 'Slow-caramelized sweet and tangy onion relish with spices, tamarind, and fragrant cardamoms.',
    sinhalaTagline: 'රතු ළූණු තෙලෙන් මළවා, සියඹලා, කුරුඳු සහ සීනි එක්කර කැරමල් වනතුරු සකසන ලද සීනි සම්බෝල.',
    category: 'sambols',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'vegetarian',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    caloriesPerServing: 140,
    proteinPerServing: 2,
    fatPerServing: 6,
    carbsPerServing: 20,
    spiceLevel: 2,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    description: 'Thinly sliced red shallots slow-cooked in coconut oil with cinnamon, cardamom, cloves, and curry leaves, simmered with chilli flakes, tamarind pulp, and sugar until dark mahogany and sticky sweet.',
    sinhalaDescription: 'සිහින්ව ලියාගත් ළූණු, කරාබුනැටි, කුරුඳු, එනසාල් සමඟ පොල් තෙලේ මඳ ගින්නේ බැද, සියඹලා යුෂ, කෑලි මිරිස් සහ සීනි දමා කැරමල් වනතුරු පිසින ලද රසවත් සීනි සම්බෝල.',
    ingredients: [
      { name: 'Red Shallots or Onions (thinly sliced)', sinhalaName: 'සිහින්ව ලියාගත් රතු ළූණු හෝ ලොකු ළූණු', amount: 4, unit: 'cups', pantryKey: 'red_onion' },
      { name: 'Chilli Flakes & Powder', sinhalaName: 'කෑලි මිරිස් සහ මිරිස් කුඩු', amount: 1.5, unit: 'tbsp', pantryKey: 'chilli_powder' },
      { name: 'Sugar / Brown Jaggery', sinhalaName: 'සීනි හෝ හකුරු කුඩු', amount: 2.5, unit: 'tbsp', pantryKey: 'kithul_jaggery' },
      { name: 'Tamarind Pulp / Lime Juice', sinhalaName: 'සියඹලා යුෂ හෝ දෙහි', amount: 1.5, unit: 'tbsp', pantryKey: 'lime' },
      { name: 'Cardamom, Cloves & Cinnamon', sinhalaName: 'එනසාල්, කරාබුනැටි, කුරුඳු', amount: 1, unit: 'tsp', pantryKey: 'cardamom' },
      { name: 'Curry Leaves & Pandan', sinhalaName: 'කරපිංචා සහ රම්පෙ', amount: 2, unit: 'sprigs', pantryKey: 'curry_leaves' },
      { name: 'Coconut Oil', sinhalaName: 'පොල් තෙල්', amount: 3, unit: 'tbsp', pantryKey: 'coconut_oil' },
      { name: 'Maldive Fish (optional)', sinhalaName: 'උම්බලකඩ', amount: 1, unit: 'tbsp', pantryKey: 'maldive_fish', optional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Slow Fry Onions in Oil',
        sinhalaTitle: 'ළූණු මඳ ගින්නේ බැද ගැනීම',
        text: 'Heat coconut oil in a pan. Add sliced onions, whole spices (cinnamon, cloves, cardamom), pandan, and curry leaves. Cook on medium-low for 15 minutes, stirring often, until soft and light brown.',
        sinhalaText: 'පොල් තෙල් රත්කර ලියාගත් ළූණු, කුරුඳු, කරාබුනැටි, එනසාල්, රම්පෙ සහ කරපිංචා දමා මඳ ගින්දරේ විනාඩි 15ක් ළූණු මෙළෙක් වනතුරු බදින්න.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Add Chillies and Tamarind',
        sinhalaTitle: 'මිරිස් සහ සියඹලා එක්කිරීම',
        text: 'Stir in chilli flakes, chilli powder, salt, and tamarind pulp. Cook for 5 minutes until the oil turns red and spices blend with the onions.',
        sinhalaText: 'කෑලි මිරිස්, මිරිස් කුඩු, ලුණු සහ සියඹලා යුෂ දමා තවත් විනාඩි 5ක් තෙලෙන් මළවා ගන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Caramelize with Sugar',
        sinhalaTitle: 'සීනි දමා කැරමල් කරගැනීම',
        text: 'Add sugar or grated jaggery. Stir gently on low heat until the sugar dissolves and turns the mixture dark, glossy, sticky, and caramelized.',
        sinhalaText: 'සීනි හෝ හකුරු කුඩු එකතු කරන්න. සීනි දියවී තද දිලිසෙන දුඹුරු පැහැයක් සහ ඇලෙන සුළු පදමක් එනතෙක් මඳ ගින්නේ හැඳිගාන්න.',
        durationMinutes: 5
      }
    ],
    chefTips: [
      'Low and slow is the golden rule for Seeni Sambol—never rush the onions on high flame or they will burn rather than sweeten.',
      'Stored in a sterilized dry glass jar, Seeni Sambol keeps well for up to a month!'
    ],
    sinhalaChefTips: [
      'ළූණු පිලිස්සී නොයාම සඳහා ගින්දර අඩුවෙන් තබා ඉවසීමෙන් යුතුව මළවා ගන්න.',
      'පිරිසිදු වීදුරු බෝතලයක දමා මාසයකට වැඩි කාලයක් තබාගත හැක.'
    ],
    servingSuggestions: 'Classic match for plain Hoppers, Milk Rice (Kiribath), and Roast Bread.',
    sinhalaServingSuggestions: 'ආප්ප, කිරිබත් හෝ උණුසුම් රෝස් පාන් සමඟ අතිශය ප්‍රණීතයි.',
    isPopular: true
  },
  {
    id: 'ceylon-spiced-ginger-tea',
    name: 'Fragrant Ceylon Spiced Ginger Tea',
    sinhalaName: 'සුවඳැති සිලෝන් ඉඟුරු තේ සහ බෙලිමල්',
    tagline: 'Pure black Ceylon tea simmered with crushed fresh ginger root, green cardamom, and kithul hakuru.',
    sinhalaTagline: 'තැළුණු නැවුම් ඉඟුරු, එනසාල් සහ කළු තේ කොළ උණුසුම්ව පෙරූ, කිතුල් හකුරු සමඟ පානය කරන ප්‍රබෝධමත් තේ.',
    category: 'drinks',
    mealTypes: ['breakfast', 'tea-time'],
    diet: 'vegan',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    caloriesPerServing: 60,
    proteinPerServing: 1,
    fatPerServing: 0,
    carbsPerServing: 14,
    spiceLevel: 1,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80',
    description: 'Fresh root ginger bruised in a pestle and boiled with pure Ceylon BOPF black tea leaves and whole green cardamom pods, served steaming hot in a clay cup with a piece of artisanal Kithul jaggery.',
    sinhalaDescription: 'වංගෙඩියක තලාගත් නැවුම් ඉඟුරු සහ එනසාල් වතුරේ නටවා, උසස් තත්ත්වයේ සිලෝන් තේ කොළ දමා පෙරූ, කිතුල් හකුරු සමඟ බොන ප්‍රණීත ඉඟුරු තේ.',
    ingredients: [
      { name: 'Fresh Ginger Root (bruised)', sinhalaName: 'තලාගත් අලුත් ඉඟුරු', amount: 2, unit: 'inches', pantryKey: 'ginger' },
      { name: 'Pure Ceylon Black Tea Leaves (BOPF)', sinhalaName: 'සිලෝන් කළු තේ කොළ', amount: 2, unit: 'tsp', pantryKey: 'cardamom' },
      { name: 'Cardamom Pods (bruised)', sinhalaName: 'එනසාල් කරල්', amount: 2, unit: 'pods', pantryKey: 'cardamom' },
      { name: 'Water', sinhalaName: 'වතුර', amount: 2.5, unit: 'cups', pantryKey: 'rice' },
      { name: 'Pure Kithul Jaggery (Hakuru)', sinhalaName: 'කිතුල් හකුරු', amount: 2, unit: 'cubes', pantryKey: 'kithul_jaggery' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Bruise and Boil Aromatics',
        sinhalaTitle: 'ඉඟුරු සහ එනසාල් නටවා ගැනීම',
        text: 'Bruise the ginger root and cardamom pods. Place in a saucepan with 2.5 cups of water and bring to an active rolling boil for 5 minutes.',
        sinhalaText: 'ඉඟුරු සහ එනසාල් මඳක් තලා වතුර කෝප්ප 2.5ක් සමඟ විනාඩි 5ක් හොඳින් නටවා ගන්න.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Brew the Tea',
        sinhalaTitle: 'තේ කොළ දමා පදම් කරගැනීම',
        text: 'Add Ceylon black tea leaves. Turn off heat, cover with a saucer, and let it steep for 3-4 minutes to extract color and brisk aroma without bitterness.',
        sinhalaText: 'තේ කොළ එකතු කර වහාම ලිප නිවා පියනකින් වසා විනාඩි 3-4ක් තැම්බෙන්නට හරින්න.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Strain and Serve with Jaggery',
        sinhalaTitle: 'පෙරා හකුරු සමඟ පිළිගැන්වීම',
        text: 'Strain into tea cups. Serve immediately alongside a piece of solid Kithul jaggery to bite with each sip.',
        sinhalaText: 'කෝප්ප වලට පෙරා කිතුල් හකුරු කැබැල්ලක් සමඟ උණුවෙන්ම පිළිගන්වන්න.',
        durationMinutes: 1
      }
    ],
    chefTips: [
      'Do not boil the tea leaves on the flame; boiling tea releases harsh tannins. Steeping in ginger-infused boiled water is the true way to achieve refined briskness.',
      'Sipping the tea while melting a tiny piece of jaggery on your tongue creates a heavenly taste harmony.'
    ],
    sinhalaChefTips: [
      'තේ කොළ දැමූ පසු නටවන්න එපා; ලිප නිවා පියන වසා තැබීමෙන් තේ වල නියම සුවඳ සහ රන්වන් පැහැය ලැබේ.',
      'දිව මත හකුරු කැබැල්ලක් තබාගෙන උණුසුම් තේ පානය කිරීම සැබෑම සතුටකි.'
    ],
    servingSuggestions: 'Perfect companion for afternoon Short Eats or rainy Sri Lankan evenings.',
    sinhalaServingSuggestions: 'හවසට මාළු රෝල්ස්, වඩේ හෝ වැසිබර සන්ධ්‍යාවක රසවිඳින්න.'
  }
];

export const CATEGORIES_METADATA = [
  {
    id: 'rice-curry',
    name: 'Rice & Curry',
    sinhalaName: 'බත් සහ වෑංජන',
    description: 'The heartbeat of Sri Lankan kitchens: aromatic rice with spicy, sour, and coconut curries.',
    sinhalaDescription: 'ශ්‍රී ලංකාවේ ප්‍රධාන ආහාරය වන සුවඳැති බත් සහ විවිධ රසැති වෑංජන.',
    icon: '🍛',
    color: 'from-amber-600 to-orange-700'
  },
  {
    id: 'roti',
    name: 'Roti & Breads',
    sinhalaName: 'රොටී සහ පාන්',
    description: 'From sizzling street Kottu to rustic Pol Roti and wood-fired roast paan.',
    sinhalaDescription: 'චිකන් කොත්තු, ගමේ පොල් රොටී සහ උඳුනේ පිලිස්සූ රෝස් පාන්.',
    icon: '🫓',
    color: 'from-orange-600 to-amber-700'
  },
  {
    id: 'hoppers',
    name: 'Hoppers & String Hoppers',
    sinhalaName: 'ආප්ප සහ ඉඳිආප්ප',
    description: 'Crispy lacy egg hoppers, sweet pani aappa, and delicate steamed string hoppers.',
    sinhalaDescription: 'කරස් ගාන බිත්තර ආප්ප, පැණි ආප්ප සහ මෘදු ඉඳිආප්ප.',
    icon: '🥞',
    color: 'from-yellow-600 to-amber-600'
  },
  {
    id: 'sambols',
    name: 'Sambols & Relishes',
    sinhalaName: 'සම්බෝල සහ අච්චාරු',
    description: 'Fiery Pol Sambol, caramelized Seeni Sambol, and tongue-tingling Lunu Miris.',
    sinhalaDescription: 'මිරිස් ගලේ පොල් සම්බෝල, පැණි සීනි සම්බෝල සහ සැර ලුණු මිරිස්.',
    icon: '🌶️',
    color: 'from-red-600 to-rose-700'
  },
  {
    id: 'short-eats',
    name: 'Short Eats & Snacks',
    sinhalaName: 'කෙටි කෑම සහ බයිට්ස්',
    description: 'Crunchy golden fish rolls, vegetable patties, crisp isso wade, and cutlets.',
    sinhalaDescription: 'ක්‍රිස්පි මාළු රෝල්ස්, පැටිස්, ඉස්සෝ වඩේ සහ කට්ලට්.',
    icon: '🥟',
    color: 'from-amber-700 to-yellow-800'
  },
  {
    id: 'sweets',
    name: 'Traditional Sweets',
    sinhalaName: 'සාම්ප්‍රදායික කැවිලි',
    description: 'Festive treats: Konda Kavum, crisp Kokis, Athirasa, and sweet Aluwa.',
    sinhalaDescription: 'අවුරුදු මේසයේ කොණ්ඩ කැවුම්, කරස් ගාන කොකිස්, අතිරස සහ අළුවා.',
    icon: '🍯',
    color: 'from-amber-800 to-stone-900'
  },
  {
    id: 'desserts',
    name: 'Puddings & Desserts',
    sinhalaName: 'අතුරුපස වර්ග',
    description: 'Decadent spiced Watalappan, curd with kithul treacle, and sago pudding.',
    sinhalaDescription: 'කිතුල් වටලප්පන්, මී කිරි සහ කිතුල් පැණි, රසවත් සව් කැඳ.',
    icon: '🍮',
    color: 'from-orange-700 to-red-800'
  },
  {
    id: 'drinks',
    name: 'Herbal Porridge & Teas',
    sinhalaName: 'ඖෂධීය කැඳ සහ තේ',
    description: 'Healing Kola Kenda, king coconut, belimal, and Ceylon spiced ginger tea.',
    sinhalaDescription: 'ගුණ පිරි කොළ කැඳ, තැඹිලි වතුර, බෙලිමල් සහ සිලෝන් ඉඟුරු තේ.',
    icon: '🍵',
    color: 'from-emerald-700 to-teal-800'
  }
];
