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
const order: Layout[] = ["bands", "cards", "index", "clusters", "matrix", "tags", "accordion", "atlas", "columns", "spotlight", "tabs", "carousel", "editorial", "rail", "mosaic"];
export const skillOptions = order.map((layout, index) => ({
  id: String(index + 1).padStart(2, '0'),
  layout,
  name: optionLabels[layout],
}));
export const skillTheme = 'asuransi';
export const skillGroups = [
  {
    "name": {
      "id": "Penilaian risiko",
      "en": "Risk assessment"
    },
    "indexes": [
      0,
      4,
      7
    ]
  },
  {
    "name": {
      "id": "Polis",
      "en": "Policies"
    },
    "indexes": [
      1,
      6,
      8
    ]
  },
  {
    "name": {
      "id": "Klaim dan dokumentasi",
      "en": "Claims and documentation"
    },
    "indexes": [
      2,
      3,
      5,
      9
    ]
  }
];

export const selectedSkillLayout: Layout = 'rail';
