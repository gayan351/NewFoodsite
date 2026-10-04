export interface SpiceItem {
  id: string;
  name: string;
  sinhalaName: string;
  botanicalName?: string;
  image?: string;
  role: string;
  sinhalaRole: string;
  flavorProfile: string;
  sinhalaFlavorProfile: string;
  kitchenSecret: string;
  sinhalaKitchenSecret: string;
}

export const SPICE_HERITAGE: SpiceItem[] = [
  {
    id: 'ceylon-cinnamon',
    name: 'Pure Ceylon Cinnamon (True Cinnamon)',
    sinhalaName: 'ලංකා කුරුඳු (සැබෑ කුරුඳු)',
    botanicalName: 'Cinnamomum verum',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
    role: 'Aromatic backbone of meat and coconut curries',
    sinhalaRole: 'මස් සහ කිරි හොදි වල ප්‍රධාන සුවඳකාරකය',
    flavorProfile: 'Delicate, sweet, floral with zero woody harshness unlike Cassia.',
    sinhalaFlavorProfile: 'සියුම්, පැණිරස සහ මෘදු සුවඳක් සහිතයි.',
    kitchenSecret: 'Add whole quill fragments into the oil when tempering to release essential cinnamaldehyde.',
    sinhalaKitchenSecret: 'තෙම්පරාදුව රත්වන අවස්ථාවේදීම කුරුඳු පොත්ත එක් කිරීමෙන් සුවඳ මුළු හොද්දටම පැතිරේ.'
  },
  {
    id: 'goraka',
    name: 'Goraka (Garcinia Cambogia / Gambooge)',
    sinhalaName: 'ගොරකා',
    botanicalName: 'Garcinia gummi-gutta',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    role: 'Natural souring agent, preservative & meat tenderizer',
    sinhalaRole: 'ස්වභාවික ඇඹුල් රසකාරකය, කල්තබාගන්නා සහ මස් මාළු මෙළෙක් කරනය',
    flavorProfile: 'Intense fruity smokiness and tart acidity with deep dark color.',
    sinhalaFlavorProfile: 'ප්‍රබල ඇඹුල් සහ දුම්මල රසයක් සහිතයි.',
    kitchenSecret: 'Boil or soak with hot water, then grind into a silky black paste for authentic Ambul Thiyal and Polos.',
    sinhalaKitchenSecret: 'උණුවතුරේ තම්බා සිහින් තලපයක් වනසේ අඹරා ගැනීමෙන් ඇඹුල් තියල් වලට නියම කළු පැහැය ලැබේ.'
  },
  {
    id: 'curry-leaves-rampe',
    name: 'Karapincha (Curry Leaves) & Rampe (Pandan)',
    sinhalaName: 'කරපිංචා සහ රම්පෙ',
    botanicalName: 'Murraya koenigii & Pandanus amaryllifolius',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    role: 'The sacred aromatic duo of every Sri Lankan pot',
    sinhalaRole: 'සෑම ශ්‍රී ලාංකික වෑංජනයකම පාහේ නොවරදින සුවඳ යුවළ',
    flavorProfile: 'Warm herbal citrus notes from Karapincha; sweet grassy vanilla warmth from bruised Rampe.',
    sinhalaFlavorProfile: 'කරපිංචා වලින් ප්‍රබල ඖෂධීය සුවඳක්ද, රම්පෙ වලින් වැනිලා බඳු මිහිරි සුවඳක්ද එක්වේ.',
    kitchenSecret: 'Knot the pandan leaf and bruise the stem of curry leaves before dropping them into hot coconut oil.',
    sinhalaKitchenSecret: 'රම්පෙ ගැටගසා, කරපිංචා අතින් මිරිකා තෙලට දැමීමෙන් රස තෙල් වඩාත් හොඳින් මුදාහැරේ.'
  },
  {
    id: 'roasted-curry-powder',
    name: 'Sri Lankan Roasted Curry Powder (Kalu Kudu)',
    sinhalaName: 'කළුවරට බැදපු තුනපහ (කළු කුඩු)',
    role: 'Soul of meat, fish, and dark vegetable curries',
    sinhalaRole: 'මස්, මාළු සහ පොලොස් වැනි තද වෑංජන වල ආත්මය',
    flavorProfile: 'Smoky, deep, nutty, robust, roasted over low flame with coriander, cumin, and fennel.',
    sinhalaFlavorProfile: 'දුම් සුවඳ මුසු වූ, මඳ ගින්නේ බැදගත් කොත්තමල්ලි, සූදුරු සහ මාදුරු වල ගැඹුරු රසය.',
    kitchenSecret: 'Roast ingredients individually in a clay pan until they crackle and reach an espresso-dark roast.',
    sinhalaKitchenSecret: 'මැටි වළඳක එක් එක් කුළුබඩු වෙන වෙනම දුඹුරු-කළු වනතෙක් මඳ ගින්නේ බැදගන්න.'
  },
  {
    id: 'clay-pot-cooking',
    name: 'Clay Pot Heritage (මැටි වළං)',
    sinhalaName: 'මැටි වළඳේ රහස',
    role: 'Porous earthen heat retention and alkaline neutralization',
    sinhalaRole: 'ස්වභාවික තාප පාලනය සහ රස සංරක්ෂණය',
    flavorProfile: 'Subtle earthy minerals, gentle caramelization, never scorches the delicate coconut cream.',
    sinhalaFlavorProfile: 'ස්වභාවික මැටි සුවඳ සහ මෘදු තාපයෙන් පොල්කිරි නොකැඩී පිසීමේ හැකියාව.',
    kitchenSecret: 'A well-seasoned, soot-darkened clay pot cooks faster, keeps curries fresh without refrigeration, and yields richer sauce.',
    sinhalaKitchenSecret: 'ලිපේ දැලි වැදුණු පදම් වූ මැටි වළඳක් ආහාර නරක් නොවී දිගු වේලාවක් නැවුම්ව තබා ගනී.'
  }
];
