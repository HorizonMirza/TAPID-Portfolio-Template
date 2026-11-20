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

export const footerChannelIcons = {
  whatsapp: 'M4.8 17.7 4 21l3.6-.9A8.4 8.4 0 1 0 4.8 17.7Z M9 8.5c.1-.6.5-1 1-1 .3 0 .4.3.6.6l.8 1.5c.1.3-.1.7-.6 1.1.5 1.2 1.4 2 2.6 2.5.4-.5.7-.8 1-.7l1.7.8c.3.2.4.5.2.9-.3 1-1.3 1.3-2.4 1-2.3-.5-4.9-3.2-5-5.7Z',
  email: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M3 7l9 6 9-6',
  linkedin: 'M5 10v9 M5 5h.01 M10 19v-9 M10 14a4 4 0 0 1 8 0v5',
  github: 'M9 19c-4 1-4-2-6-2.5 M16 21v-3.6c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.7 4.7 0 0 0-1.2-3.2 4.5 4.5 0 0 0-.1-3.1s-1-.3-3.3 1.2a13 13 0 0 0-6.1 0C8 2.8 7 3.1 7 3.1a4.5 4.5 0 0 0-.1 3.1 4.7 4.7 0 0 0-1.2 3.2c0 4.5 2.7 5.6 5.5 6-.6.6-.8 1.1-.8 2V21',
  instagram: 'M7.5 3.5h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Z M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z M17 7h.01',
  resume: 'M9 4h6l6.5 11-3 5h-13l-3-5L9 4Z M9 4l6.5 11 M21.5 15h-13 M5.5 20l6.5-11',
  linktree: 'M12 2v12 M6 5l12 8 M18 5 6 13 M12 17v5',
};

export type FooterChannel = {
  kind: keyof typeof footerChannelIcons;
  label: string;
  detail: string;
  href: string;
  enabled: boolean;
};
