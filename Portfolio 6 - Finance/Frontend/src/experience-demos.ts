const layoutLabels = {
  timeline: { id: 'Linimasa', en: 'Timeline' },
  resume: { id: 'Format CV', en: 'Résumé' },
  spread: { id: 'Dua Kolom', en: 'Two Columns' },
  organization: { id: 'Organisasi Utama', en: 'Organisation First' },
  feature: { id: 'Sorotan', en: 'Spotlight' },
  ledger: { id: 'Register', en: 'Register' },
  margin: { id: 'Judul Samping', en: 'Side Heading' },
  bands: { id: 'Lajur Warna', en: 'Colour Bands' },
  folio: { id: 'Halaman Editorial', en: 'Editorial Spread' },
  dossier: { id: 'Berkas Jabatan', en: 'Role Dossier' },
  compact: { id: 'Daftar Ringkas', en: 'Compact List' },
  compare: { id: 'Banding Peran', en: 'Compare Roles' },
  tabs: { id: 'Tab Jabatan', en: 'Role Tabs' },
  accordion: { id: 'Akordeon', en: 'Accordion' },
  pager: { id: 'Galeri Jabatan', en: 'Role Gallery' },
};

type Layout = keyof typeof layoutLabels;
const order: Layout[] = ["compare", "resume", "dossier", "ledger", "organization", "timeline", "tabs", "spread", "feature", "margin", "accordion", "compact", "bands", "folio", "pager"];
export const experienceOptions = order.map((layout, index) => ({
  id: String(index + 1).padStart(2, '0'),
  name: layoutLabels[layout],
  layout,
}));

export const selectedExperienceLayout: Layout = 'compare';
