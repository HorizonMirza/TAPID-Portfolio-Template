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
const order: Layout[] = ["editorial", "index", "columns", "bands", "cards", "tags", "clusters", "matrix", "rail", "accordion", "spotlight", "tabs", "atlas", "mosaic", "carousel"];
export const skillOptions = order.map((layout, index) => ({
  id: String(index + 1).padStart(2, '0'),
  layout,
  name: optionLabels[layout],
}));
export const skillTheme = 'general';
export const skillGroups = [
  {
    "name": {
      "id": "Riset",
      "en": "Research"
    },
    "indexes": [
      0,
      1,
      9
    ]
  },
  {
    "name": {
      "id": "Komunikasi",
      "en": "Communication"
    },
    "indexes": [
      2,
      5,
      6
    ]
  },
  {
    "name": {
      "id": "Program komunitas",
      "en": "Community programmes"
    },
    "indexes": [
      3,
      4,
      7,
      8
    ]
  }
];

export const selectedSkillLayout: Layout = 'index';
