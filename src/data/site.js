export const navLinks = [
  { href: "/", label: "Home", roman: "I" },
  { href: "/menu", label: "Menu", roman: "II" },
  { href: "/events", label: "Events", roman: "III" },
  { href: "/gallery", label: "Gallery", roman: "IV" },
];

export const experiences = [
  {
    index: "01",
    title: "The Dining Room",
    copy: "Candlelight, oxblood leather, and a menu written like a Roman feast.",
    image: "/media/dining.jpg",
  },
  {
    index: "02",
    title: "From the pass",
    copy: "Heat, steel, and the quiet theatre of the kitchen.",
    image: "/media/kitchen.jpg",
  },
  {
    index: "03",
    title: "Entrées",
    copy: "Caviar blinis, lobster bisque, tartare — the first gold of the evening.",
    image: "/media/tartare.jpg",
  },
  {
    index: "04",
    title: "Wagyu tenderloin",
    copy: "Fine-seared wagyu with truffle jus and roasted vegetables.",
    image: "/media/steak.jpg",
  },
  {
    index: "05",
    title: "The Aviary Lounge",
    copy: "Smoked glass, vinyl, and a pour that takes its time.",
    image: "/media/cocktail.jpg",
  },
  {
    index: "06",
    title: "The Banquet Court",
    copy: "Long tables, gold service, nights staged like imperial gatherings.",
    image: "/media/banquet.jpg",
  },
  {
    index: "07",
    title: "The Terrace",
    copy: "Open air, late light, and a city that behaves like a fresco.",
    image: "/media/terrace.jpg",
  },
  {
    index: "08",
    title: "The cellar",
    copy: "Wine flights from 41°N latitudes, opened at the table.",
    image: "/media/wine.jpg",
  },
];

export const menu = {
  entrees: [
    {
      name: "Caviar Blinis",
      price: "38",
      copy: "Mini pancakes topped with sturgeon caviar and crème fraîche.",
      image: "/media/oysters.jpg",
    },
    {
      name: "Lobster Bisque",
      price: "32",
      copy: "Creamy bisque with a touch of cognac.",
      image: "/media/bisque.jpg",
    },
    {
      name: "Foie Gras Terrine",
      price: "36",
      copy: "Rich duck liver served with fig compote and brioche.",
      image: "/media/plating.jpg",
    },
    {
      name: "Truffle Arancini",
      price: "28",
      copy: "Crispy risotto balls with parmesan and black truffle.",
      image: "/media/arancini.jpg",
    },
    {
      name: "Salmon Tartare",
      price: "22",
      copy: "Smoked salmon, capers, shallot, and lemon-dill dressing.",
      image: "/media/tartare.jpg",
    },
  ],
  mains: [
    {
      name: "Wagyu Tenderloin",
      price: "128",
      copy: "Fine-seared wagyu with truffle jus and roasted vegetables.",
      image: "/media/steak.jpg",
    },
    {
      name: "Chilean Sea Bass",
      price: "84",
      copy: "Slow-roasted fillet with saffron butter sauce.",
      image: "/media/seabass.jpg",
    },
    {
      name: "Duck à l'Orange",
      price: "58",
      copy: "Glazed duck breast with sweet orange reduction.",
      image: "/media/duck.jpg",
    },
    {
      name: "Blackened Halibut",
      price: "55",
      copy: "Blackened fillet topped with citrus gremolata.",
      image: "/media/food.jpg",
    },
    {
      name: "Truffle Risotto",
      price: "49",
      copy: "Creamy risotto with wild mushrooms and truffle oil.",
      image: "/media/risotto.jpg",
    },
  ],
};

export const values = [
  {
    title: "Fire first",
    copy: "Heat is the first ceremony. If it does not meet the flame, it does not meet the cloth.",
  },
  {
    title: "No shortcuts",
    copy: "Bisque takes hours. Wagyu takes nerve. The card is short because the kitchen is not.",
  },
  {
    title: "Season like Rome",
    copy: "Salt, citrus, gold oil. A plate should taste like a city that has eaten for two thousand years.",
  },
  {
    title: "Table as theatre",
    copy: "Arrivals, toasts, farewells. Service is a plot, not a task.",
  },
];

export const events = [
  {
    id: "saturnalia",
    status: "upcoming",
    date: "14 Nov 2026",
    time: "19:30",
    title: "Saturnalia Supper",
    place: "The Banquet Court",
    copy: "A seven-course gold-leaf dinner with live strings and a midnight toast.",
    image: "/media/table.jpg",
  },
  {
    id: "aviary-nights",
    status: "upcoming",
    date: "28 Nov 2026",
    time: "21:00",
    title: "Aviary After Dark",
    place: "The Aviary Lounge",
    copy: "House DJs, smoked old fashioneds, chrome bird in the lights.",
    image: "/media/cocktail.jpg",
  },
  {
    id: "lotus-brunch",
    status: "upcoming",
    date: "06 Dec 2026",
    time: "11:00",
    title: "Lotus Brunch",
    place: "The Terrace",
    copy: "Bottomless sparkling, live jazz, pastry as still life.",
    image: "/media/brunch.jpg",
  },
  {
    id: "harvest",
    status: "upcoming",
    date: "20 Dec 2026",
    time: "18:00",
    title: "Harvest Symposium",
    place: "The Dining Room",
    copy: "Chefs in conversation and wine from 41°N latitudes.",
    image: "/media/food.jpg",
  },
  {
    id: "equinox",
    status: "past",
    date: "22 Sep 2026",
    time: "20:00",
    title: "Equinox Ball",
    place: "The Banquet Court",
    copy: "Masked gold, brass, a midnight feast.",
    image: "/media/event.jpg",
  },
  {
    id: "solstice",
    status: "past",
    date: "21 Jun 2026",
    time: "18:30",
    title: "Solstice Garden",
    place: "The Terrace",
    copy: "Long-table dining under the longest light.",
    image: "/media/terrace.jpg",
  },
  {
    id: "founders",
    status: "past",
    date: "04 Apr 2026",
    time: "19:00",
    title: "Founders' Table",
    place: "The Dining Room",
    copy: "An intimate seating for those who opened the house.",
    image: "/media/dining.jpg",
  },
  {
    id: "carnival",
    status: "past",
    date: "14 Feb 2026",
    time: "21:30",
    title: "Velvet Carnival",
    place: "The Aviary Lounge",
    copy: "Fans, candles, champagne towers.",
    image: "/media/night.jpg",
  },
];

export const shopReels = [
  {
    id: 1,
    title: "ERA House Oil",
    price: "₹899",
    compare: "₹999",
    product: "Cold-pressed finishing oil",
    image: "/media/oil.jpg",
  },
  {
    id: 2,
    title: "Gold Candle Trio",
    price: "₹1,450",
    compare: "₹1,690",
    product: "Bust-gold candlesticks, beeswax",
    image: "/media/candles-photo.jpg",
  },
  {
    id: 3,
    title: "Aviary Nuts & Seeds",
    price: "Starts at ₹65",
    compare: "",
    product: "Night-table tasting tin",
    image: "/media/nuts.jpg",
  },
  {
    id: 4,
    title: "Lotus Chutney",
    price: "₹190",
    compare: "₹240",
    product: "House flavour fusion",
    image: "/media/food.jpg",
  },
  {
    id: 5,
    title: "41°N Cocktail Kit",
    price: "₹2,200",
    compare: "₹2,600",
    product: "Three signatures, gold jigger",
    image: "/media/cocktail.jpg",
  },
];

export const gallery = [
  { id: "g1", tag: "Dining", title: "Wagyu tenderloin", image: "/media/steak.jpg" },
  { id: "g2", tag: "Dining", title: "Chilean sea bass", image: "/media/seabass.jpg" },
  { id: "g3", tag: "Dining", title: "Truffle risotto", image: "/media/risotto.jpg" },
  { id: "g4", tag: "Dining", title: "Salmon tartare", image: "/media/tartare.jpg" },
  { id: "g5", tag: "Dining", title: "Pastry still life", image: "/media/dessert.jpg" },
  { id: "g6", tag: "Dining", title: "From the pass", image: "/media/kitchen.jpg" },
  { id: "g7", tag: "Dining", title: "Plating", image: "/media/plating.jpg" },
  { id: "g8", tag: "Nights", title: "Chrome pour", image: "/media/cocktail.jpg" },
  { id: "g9", tag: "Nights", title: "Cellar gold", image: "/media/wine.jpg" },
  { id: "g10", tag: "Interiors", title: "The dining room", image: "/media/dining.jpg" },
  { id: "g11", tag: "Interiors", title: "Service", image: "/media/service.jpg" },
  { id: "g12", tag: "Events", title: "Long table", image: "/media/table.jpg" },
  { id: "g13", tag: "Events", title: "Banquet", image: "/media/banquet.jpg" },
  { id: "g14", tag: "Dining", title: "Duck à l'orange", image: "/media/duck.jpg" },
  { id: "g15", tag: "Dining", title: "First oysters", image: "/media/oysters.jpg" },
];
