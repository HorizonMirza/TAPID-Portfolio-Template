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

export const experienceExamples = [
  {
    "title": {
      "id": "Magang Perencanaan Anggaran",
      "en": "Budget Planning Intern"
    },
    "organization": "Ruang Rencana Analitik",
    "period": "2023",
    "description": {
      "id": "Memeriksa asumsi pada model anggaran dan menyiapkan perbandingan realisasi dengan rencana per kategori biaya.",
      "en": "Checked budget assumptions and prepared actual-versus-plan comparisons by cost category."
    }
  },
  {
    "title": {
      "id": "Asisten Administrasi Keuangan",
      "en": "Finance Administration Assistant"
    },
    "organization": "Kolektif Pencatatan Usaha",
    "period": "2022",
    "description": {
      "id": "Mencocokkan faktur dengan catatan pembayaran dan merangkum transaksi yang masih memerlukan konfirmasi.",
      "en": "Matched invoices to payment records and summarised transactions that still needed confirmation."
    }
  }
];
