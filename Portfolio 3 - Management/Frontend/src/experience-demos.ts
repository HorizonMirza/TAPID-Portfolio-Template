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
const order: Layout[] = ["timeline", "ledger", "compare", "bands", "resume", "compact", "feature", "dossier", "spread", "margin", "accordion", "organization", "tabs", "folio", "pager"];
export const experienceOptions = order.map((layout, index) => ({
  id: String(index + 1).padStart(2, '0'),
  name: layoutLabels[layout],
  layout,
}));

export const experienceExamples = [
  {
    "title": {
      "id": "Asisten Operasional",
      "en": "Operations Assistant"
    },
    "organization": "Ruang Kerja Arus",
    "period": "2022–2023",
    "description": {
      "id": "Memperbarui papan tugas, mencatat ketergantungan yang belum selesai, dan menyiapkan ringkasan untuk rapat mingguan.",
      "en": "Updated the task board, recorded outstanding dependencies, and prepared summaries for weekly meetings."
    }
  },
  {
    "title": {
      "id": "Koordinator Logistik Acara",
      "en": "Event Logistics Coordinator"
    },
    "organization": "Kolektif Agenda Kampus",
    "period": "2021–2022",
    "description": {
      "id": "Menyusun jadwal persiapan acara, membagi tugas relawan, dan mencatat kebutuhan perlengkapan per sesi.",
      "en": "Planned event setup, allocated volunteer tasks, and recorded equipment requirements for each session."
    }
  }
];
