import { z } from 'astro/zod';
import source from './portfolio.json';
import { contactKinds, footerChannels } from './footer-channels';
import { demoContactLinks, demoCvUrl } from './demo-contact';

const text = z.string().trim().min(1);
const localized = z.object({ id: text, en: text });
const hex = z.string().regex(/^#[0-9a-f]{6}$/i, 'Gunakan warna HEX enam digit, misalnya #6D28D9');
const webURL = z.url({ protocol: /^https$/ });
const cvURL = z.url({ protocol: /^https$/, hostname: /^(drive|docs)\.google\.com$/ });
const image = z.object({
  src: z.union([webURL, z.string().regex(/^\/(?!\/)[a-zA-Z0-9_./%\-]+$/)]),
  alt: localized,
});
const contactURL = z.url({ protocol: /^(https|mailto|tel)$/ });

export const portfolio = z.object({
  profile: z.object({
    name: text,
    location: text,
    role: localized,
    headline: localized,
    introduction: localized,
    portrait: image.optional(),
    cvUrl: cvURL.nullish(),
  }),
  about: z.object({
    description: localized,
    education: z.object({
      university: text.optional(),
      major: localized.optional(),
      specialization: localized.optional(),
      gpa: z.object({ value: z.number().nonnegative(), scale: z.number().positive() })
        .refine(({ value, scale }) => value <= scale, 'GPA melebihi skala').optional(),
    }).optional(),
  }),
  projects: z.array(z.object({
    title: text,
    category: localized,
    description: localized,
    image: image.optional(),
    href: webURL.optional(),
  })),
  skills: z.array(localized),
  experience: z.array(z.object({
    title: localized,
    organization: text,
    period: localized,
    description: localized,
  })),
  contact: z.object({
    showResume: z.boolean().default(true),
    links: z.array(z.object({
      label: text,
      href: contactURL,
      kind: z.enum(contactKinds).optional(),
      detail: text.optional(),
      sample: z.boolean().optional(),
    })),
  }),
  settings: z.object({
    demo: z.boolean().default(false),
    defaultMode: z.enum(['light', 'dark', 'system']).default('system'),
    accent: z.object({ light: hex.optional(), dark: hex.optional() }).optional(),
  }),
}).parse(source);

export type Language = 'id' | 'en';

const labels = {
  id: {
    home: 'Beranda', about: 'Tentang', projects: 'Proyek', skills: 'Keahlian',
    experience: 'Pengalaman', contact: 'Kontak', skip: 'Lewati ke isi',
    navigation: 'Navigasi utama', preferences: 'Preferensi tampilan',
    dark: 'Mode gelap', lightToDark: 'Pilih mode gelap',
    darkToLight: 'Pilih mode terang', menu: 'Menu',
    viewProject: 'Buka proyek', viewContact: 'Hubungi saya',
  },
  en: {
    home: 'Home', about: 'About', projects: 'Projects', skills: 'Skills',
    experience: 'Experience', contact: 'Contact', skip: 'Skip to content',
    navigation: 'Main navigation', preferences: 'Display preferences',
    dark: 'Dark mode', lightToDark: 'Switch to dark mode',
    darkToLight: 'Switch to light mode', menu: 'Menu',
    viewProject: 'Open project', viewContact: 'Get in touch',
  },
};

export function localize(language: Language) {
  const copy = labels[language];
  const pr = portfolio.profile;
  const p = {
    name: pr.name,
    location: pr.location,
    role: pr.role[language],
    headline: pr.headline[language],
    intro: pr.introduction[language],
    portrait: getImage(pr.portrait),
    cvUrl: pr.cvUrl ?? (portfolio.settings.demo ? demoCvUrl : undefined),
  };
  const about = {
    description: portfolio.about.description[language],
    education: portfolio.about.education,
  };
  const projects = portfolio.projects.map((project) => ({
    title: project.title,
    category: project.category[language],
    description: project.description[language],
    image: getImage(project.image),
    href: project.href,
  }));
  const skills = portfolio.skills.map((skill) => skill[language]);
  const experience = portfolio.experience.map((item) => ({
    title: item.title[language],
    organization: item.organization,
    period: item.period[language],
    description: item.description[language],
  }));
  const links = portfolio.settings.demo
    ? [...demoContactLinks, ...portfolio.contact.links.filter((link) => !link.sample)]
    : portfolio.contact.links;
  const contact = {
    links,
    channels: footerChannels(links, p.cvUrl, portfolio.contact.showResume, portfolio.settings.demo),
  };
  const nav = [
    ['home', copy.home, true],
    ['about', copy.about, true],
    ['projects', copy.projects, projects.length > 0],
    ['skills', copy.skills, skills.length > 0],
    ['experience', copy.experience, experience.length > 0],
    ['contact', copy.contact, contact.channels.length > 0],
  ].filter(([, , enabled]) => enabled).map(([id, name]) => ({ href: `#${id}`, name: String(name) }));

  return { copy, p, about, projects, skills, experience, contact, nav, demo: portfolio.settings.demo };

  function getImage(entry: z.infer<typeof image> | undefined) {
    return entry && { src: entry.src, alt: entry.alt[language] };
  }
}
