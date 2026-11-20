const optionLabels = {
  cards: { id: 'Kartu', en: 'Cards' },
  tags: { id: 'Pill', en: 'Pills' },
  index: { id: 'Indeks', en: 'Index' },
  spotlight: { id: 'Sorotan', en: 'Spotlight' },
  rail: { id: 'Jalur', en: 'Skill Rail' },
  mosaic: { id: 'Mozaik', en: 'Mosaic' },
  columns: { id: 'Kolom', en: 'Columns' },
  editorial: { id: 'Editorial', en: 'Editorial' },
  bands: { id: 'Baris Warna', en: 'Colour Bands' },
  clusters: { id: 'Kelompok', en: 'Clusters' },
  matrix: { id: 'Matriks', en: 'Matrix' },
  tabs: { id: 'Tab', en: 'Tabs' },
  accordion: { id: 'Buka–Tutup', en: 'Accordion' },
  carousel: { id: 'Galeri Geser', en: 'Sliding Gallery' },
  atlas: { id: 'Peta Keahlian', en: 'Skill Map' },
};

type Layout = keyof typeof optionLabels;
const order: Layout[] = ["mosaic", "editorial", "cards", "atlas", "spotlight", "clusters", "columns", "bands", "carousel", "tags", "index", "rail", "tabs", "matrix", "accordion"];
export const skillOptions = order.map((layout, index) => ({
  id: String(index + 1).padStart(2, '0'),
  layout,
  name: optionLabels[layout],
}));
export const skillTheme = 'dkv';
export const skillGroups = [
  {
    "name": {
      "id": "Bahasa visual",
      "en": "Visual language"
    },
    "indexes": [
      0,
      1,
      5,
      6
    ]
  },
  {
    "name": {
      "id": "Sistem desain",
      "en": "Design systems"
    },
    "indexes": [
      2,
      4,
      8
    ]
  },
  {
    "name": {
      "id": "Produksi",
      "en": "Production"
    },
    "indexes": [
      3,
      7,
      9
    ]
  }
];

export const selectedSkillLayout: Layout = 'bands';
