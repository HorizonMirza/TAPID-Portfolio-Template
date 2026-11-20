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
const order: Layout[] = ["folio", "feature", "spread", "bands", "organization", "dossier", "margin", "ledger", "compare", "timeline", "resume", "tabs", "compact", "pager", "accordion"];
export const experienceOptions = order.map((layout, index) => ({
  id: String(index + 1).padStart(2, '0'),
  name: layoutLabels[layout],
  layout,
}));

export const experienceExamples = [
  {
    "title": {
      "id": "Desainer Publikasi",
      "en": "Publication Designer"
    },
    "organization": "Kolektif Halaman",
    "period": "2023",
    "description": {
      "id": "Menyusun grid editorial dan menguji skala tipografi pada sampul serta halaman isi zine edisi percobaan.",
      "en": "Designed an editorial grid and tested type sizes across the cover and inside pages of a trial zine."
    }
  },
  {
    "title": {
      "id": "Asisten Identitas Acara",
      "en": "Event Identity Assistant"
    },
    "organization": "Ruang Reka Pamer",
    "period": "2022",
    "description": {
      "id": "Mengadaptasi elemen visual acara ke kartu peserta, papan arah, dan template unggahan dengan ukuran berbeda.",
      "en": "Adapted an event identity for participant cards, wayfinding signs, and social templates in different sizes."
    }
  }
];
