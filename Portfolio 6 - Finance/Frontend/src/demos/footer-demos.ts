export const footerLayouts = [
  { layout: 'cards', id: 'Kartu Kontak', en: 'Contact Cards' },
  { layout: 'resume', id: 'Panel Resume', en: 'Résumé Panel' },
  { layout: 'directory', id: 'Direktori', en: 'Directory' },
  { layout: 'split', id: 'Dua Kolom', en: 'Two Columns' },
  { layout: 'rail', id: 'Deret Ikon', en: 'Icon Rail' },
  { layout: 'lead', id: 'Kontak Utama', en: 'Lead Contact' },
  { layout: 'pills', id: 'Tautan Ringkas', en: 'Compact Links' },
  { layout: 'panel', id: 'Panel Berpetak', en: 'Tiled Panel' },
  { layout: 'centered', id: 'Kartu Tengah', en: 'Centered Cards' },
  { layout: 'letter', id: 'Kop Surat', en: 'Letterhead' },
].map((option, index) => ({ ...option, number: String(index + 1).padStart(2, '0') }));

export const selectedFooterLayout = 'cards';
