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
const order: Layout[] = ["resume", "timeline", "ledger", "tabs", "dossier", "margin", "compact", "spread", "organization", "compare", "feature", "bands", "accordion", "pager", "folio"];
export const experienceOptions = order.map((layout, index) => ({
  id: String(index + 1).padStart(2, '0'),
  name: layoutLabels[layout],
  layout,
}));

export const experienceExamples = [
  {
    "title": {
      "id": "Asisten Lab Web",
      "en": "Web Lab Assistant"
    },
    "organization": "Ruang Praktik Kode",
    "period": "2023",
    "description": {
      "id": "Mendampingi praktikum HTML dan CSS serta merangkum kesalahan yang paling sering muncul pada tugas responsif.",
      "en": "Supported HTML and CSS lab sessions and documented recurring issues in responsive-layout assignments."
    }
  },
  {
    "title": {
      "id": "Pengembang Situs Relawan",
      "en": "Volunteer Web Developer"
    },
    "organization": "Komunitas Peta Belajar",
    "period": "2022",
    "description": {
      "id": "Membuat halaman jadwal kegiatan dan menyiapkan pola konten yang bisa diperbarui oleh pengelola komunitas.",
      "en": "Built an event schedule page and set up a content structure that community organisers could maintain."
    }
  }
];
