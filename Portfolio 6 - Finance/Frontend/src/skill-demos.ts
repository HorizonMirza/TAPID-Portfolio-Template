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
const order: Layout[] = ["index", "matrix", "columns", "cards", "atlas", "clusters", "spotlight", "tabs", "bands", "rail", "accordion", "carousel", "mosaic", "tags", "editorial"];
export const skillOptions = order.map((layout, index) => ({
  id: String(index + 1).padStart(2, '0'),
  layout,
  name: optionLabels[layout],
}));
export const skillTheme = 'finance';
export const skillGroups = [
  {
    "name": {
      "id": "Perencanaan",
      "en": "Planning"
    },
    "indexes": [
      0,
      4,
      5,
      7
    ]
  },
  {
    "name": {
      "id": "Analisis kinerja",
      "en": "Performance analysis"
    },
    "indexes": [
      1,
      6,
      9
    ]
  },
  {
    "name": {
      "id": "Pelaporan dan data",
      "en": "Reporting and data"
    },
    "indexes": [
      2,
      3,
      8
    ]
  }
];
