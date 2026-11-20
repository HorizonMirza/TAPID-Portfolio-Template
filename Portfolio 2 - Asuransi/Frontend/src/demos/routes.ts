export const demoSlugs = {
  home: 'demo-beranda',
  about: 'demo-tentang',
  projects: 'demo-proyek',
  skills: 'demo-keahlian',
  experience: 'demo-pengalaman',
  footer: 'demo-footer',
} as const;

export type DemoSection = keyof typeof demoSlugs;
