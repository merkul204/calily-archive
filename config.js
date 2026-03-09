// ============================================================
// CALILY VIDEO ARCHIVE — CONFIG FILE
// ============================================================
// Edit this file to add new models, products, settings etc.
// After saving, upload to GitHub and the app updates instantly.
// No coding knowledge needed — just follow the format below.
// ============================================================

window.CALILY_CONFIG = {

  // ── MODELS / WHO ──────────────────────────────────────────
  // Add new model names here (UPPERCASE)
  // The app will detect these from filenames automatically
  who: [
    'LILLIE',
    'KAROLINA',
    'STEFANIA',
    'EMMA',
    'GEMMA',
    'MARGO',
    'EMILIA',
    'BRIDE',
    // ↓ ADD NEW MODELS BELOW THIS LINE
    // 'SOFIA',
    // 'ISABELLA',
  ],

  // ── PRODUCTS ──────────────────────────────────────────────
  // Add new product names here (UPPERCASE)
  // Must match exactly how the VA writes them in filenames
  products: [
    // Veils
    'OPHELIA','JULIETTE','DAPHNE','SERA','CELESTINE',
    'MIA','TESSA','AUDREY','MARINA','TALIA',
    'EDEN','LUCINE','ATHENA','ROSALIA','FLORA',
    'ALESSIA','JESSE','AVA','ARIA','BLAIR',
    'SIENA','FREYA','CLEO','VIVIENNE','AURORA',
    'LUNA','CAMELLIA','ARABELLA','MARGAUX','ESTELLE',
    // Earrings & Accessories
    'CLASSIC PEARL DROP','PEARL HOOP DROP','CRYSTAL TEARDROP',
    'THREE PEARL DROP','LARGE PEARL HOOP','PEARL CHAIN',
    // Hair Accessories
    'BEATRICE HAIRPIN','GISELLE HAIRPIN','LINNEA',
    'JASMINE HAIRPIN','MIRABELLA HAIRPIN',
    // Necklaces
    'ROSALIA CHOKER','FLORENCE CHOKER',
    // ↓ ADD NEW PRODUCTS BELOW THIS LINE
    // 'CELESTE',
    // 'MAGNOLIA',
  ],

  // ── SETTINGS ──────────────────────────────────────────────
  // Locations/environments where videos are filmed
  // Keywords in filenames that map to each setting
  settings: {
    'STUDIO':     ['studio','indoor','minimalist','seamless'],
    'BEACH':      ['beach','ocean','sand','coastal','shore'],
    'FACTORY':    ['factory','china','cmm','manufacturing','workshop'],
    'WAREHOUSE':  ['warehouse','storehouse','storage'],
    'BRIDALSHOP': ['bridal shop','bridalshop','boutique'],
    'WEDDING':    ['wedding','ceremony','reception','chapel'],
    'EXHIBITION': ['exhibition','expo','trade show','fair'],
    'CAR':        ['car','airport','taxi','vehicle','driving'],
    'HOME':       ['home','house','apartment','bedroom','kitchen'],
    // ↓ ADD NEW SETTINGS BELOW THIS LINE
    // 'GARDEN':  ['garden','outdoor','park','grass'],
    // 'ROOFTOP': ['rooftop','roof','terrace'],
  },

  // ── FORMATS ───────────────────────────────────────────────
  // Content format types
  formats: ['BROLL','AROLL','UGC','TESTIMONIAL','STREETINTERVIEW','MONTAGE'],

  // ── ACTIONS ───────────────────────────────────────────────
  // What's happening in the video
  // Keywords in filenames that map to each action
  actions: {
    'MODELLING':     ['modelling','modeling','wearing','posing'],
    'STYLING':       ['styling','adjusting','putting on','fitting'],
    'TALKING':       ['talking','describing','speaking','explaining'],
    'SHOOTING':      ['shooting','filming','bts','behind the scenes'],
    'SEWING':        ['sewing','stitching','needlework'],
    'CUTTING':       ['cutting','trimming','scissors'],
    'SHOWING':       ['showing','showcasing','walking','entering','demonstrating'],
    'UNBOXING':      ['unboxing','unpack','opening'],
    'COMPARING':     ['comparing','comparison','versus','side by side'],
    // ↓ ADD NEW ACTIONS BELOW THIS LINE
    // 'IRONING':    ['ironing','steaming','pressing'],
  },

  // ── SHOTS ─────────────────────────────────────────────────
  shots: ['CLOSEUP','PANOVER'],

  // ── MOODS ─────────────────────────────────────────────────
  // Only relevant once Gemini indexing is complete
  moods: ['elegant','joyful','intimate','celebratory','romantic','peaceful','energetic'],

  // ── SEARCH SUGGESTIONS ────────────────────────────────────
  // The quick-search buttons shown on the homepage
  // Edit these to match your most common searches
  suggestions: [
    'Lillie veil studio',
    'Emilia modeling',
    'Freya veil',
    'Karolina',
    'closeup',
    'Bali shoot',
    'China factory',
  ],

  // ── PASSWORD ──────────────────────────────────────────────
  // Change this to update the team password
  password: 'calily2026!88',

};
