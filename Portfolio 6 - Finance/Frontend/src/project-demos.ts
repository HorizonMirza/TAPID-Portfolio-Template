const layouts = {
  gallery: { id: 'Galeri Kartu', en: 'Card Gallery' },
  feature: { id: 'Proyek Unggulan', en: 'Featured Project' },
  cases: { id: 'Studi Kasus', en: 'Case Studies' },
  index: { id: 'Indeks Proyek', en: 'Project Index' },
  mosaic: { id: 'Mozaik', en: 'Mosaic' },
  accordion: { id: 'Panel Buka-Tutup', en: 'Accordion' },
  rail: { id: 'Galeri Geser', en: 'Sliding Gallery' },
  tabs: { id: 'Tab Proyek', en: 'Project Tabs' },
  timeline: { id: 'Linimasa', en: 'Timeline' },
  spread: { id: 'Halaman Editorial', en: 'Editorial Spread' },
};

type Layout = keyof typeof layouts;

export const projectTheme = 'finance';
const order: Layout[] = ['tabs', 'index', 'feature', 'gallery', 'cases', 'timeline', 'accordion', 'mosaic', 'spread', 'rail'];

export const projectLayouts = order.map((layout, index) => ({
  id: String(index + 1).padStart(2, '0'),
  layout,
  name: layouts[layout],
}));
