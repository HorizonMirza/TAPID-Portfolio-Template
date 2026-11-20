export const contactKinds = ['whatsapp', 'email', 'linkedin', 'github', 'instagram', 'linktree', 'website'] as const;
type ContactKind = typeof contactKinds[number];

interface ContactLink {
  label: string;
  href: string;
  kind?: ContactKind;
  detail?: string;
  sample?: boolean;
}

export interface FooterChannel {
  kind: ContactKind | 'resume';
  label: string;
  detail?: string;
  href: string;
  enabled?: boolean;
}

const platformLabels = {
  whatsapp: 'WhatsApp',
  email: 'Email',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  instagram: 'Instagram',
  linktree: 'Linktree',
};

const platformDomains = {
  'wa.me': 'whatsapp',
  'whatsapp.com': 'whatsapp',
  'linkedin.com': 'linkedin',
  'github.com': 'github',
  'instagram.com': 'instagram',
  'linktr.ee': 'linktree',
} as const;

export function footerChannels(
  links: ContactLink[], cvUrl: string | null | undefined, showResume: boolean, demo: boolean,
): FooterChannel[] {
  const channels = links.filter((link) => demo || !link.sample).map((link): FooterChannel => {
    const address = new URL(link.href);
    const hostname = address.hostname.toLowerCase();
    const platform = Object.entries(platformDomains).find(([name]) => hostname === name || hostname.endsWith('.' + name));
    const detected = address.protocol === 'mailto:' ? 'email' : platform?.[1];
    const kind = link.kind ?? detected ?? 'website';
    const label = kind === 'website' ? link.label : platformLabels[kind];
    const phone = kind === 'whatsapp' && platform?.[1] === 'whatsapp'
      ? address.searchParams.get('phone') ?? (hostname === 'wa.me' ? address.pathname.split('/')[1] : undefined)
      : undefined;
    const formattedPhone = phone && /^\+?[1-9]\d{6,14}$/.test(phone) ? '+' + phone.replace(/^\+/, '') : undefined;
    const detail = link.detail ?? (address.protocol === 'mailto:'
      ? address.pathname
      : formattedPhone ?? (label !== link.label ? link.label : undefined));

    return { kind, label, detail, href: link.href };
  });
  const resumeUrl = cvUrl ?? (demo ? 'https://drive.google.com/' : undefined);
  if (showResume && resumeUrl) {
    channels.push({ kind: 'resume', label: 'Resume CV', detail: 'Google Drive', href: resumeUrl });
  }
  return channels;
}
