# Portfolio Data Reference

Edit `Frontend/src/portfolio.json`. Astro checks it against the [data schema](../Frontend/src/portfolio.ts) at build time. Bilingual fields use an object such as `{ "id": "...", "en": "..." }`.

| Field | Contents |
| --- | --- |
| `profile` | Name, location, role, headline, introduction, optional portrait, and optional Resume CV link |
| `about` | Bio and optional education, including university, major, specialization, and GPA |
| `projects` | Title, category, description, optional image, and optional HTTPS link |
| `skills` | Bilingual list of skills |
| `experience` | Role, organization, dates, and description |
| `contact` | Public links and whether Resume CV appears in the footer |
| `settings` | Demo mode, initial appearance, and optional accent colors |

For `about.education.gpa`, provide both `value` and `scale`. The value must not exceed the scale. Projects, skills, and experience can be empty arrays.

## Public contacts

The footer follows the order of `contact.links`. Each item needs `label` and `href`. Supported destinations use HTTPS, `mailto:`, or `tel:`. The URL normally determines the icon. The optional `kind` field accepts `whatsapp`, `email`, `linkedin`, `github`, `instagram`, `linktree`, or `website`.

Use `detail` for an account name or formatted number. For WhatsApp, include the country code. This example shows a fictional number and links to WhatsApp’s public site.

```json
{
  "kind": "whatsapp",
  "label": "WhatsApp",
  "href": "https://www.whatsapp.com/",
  "detail": "+62 812 0000 0000",
  "sample": true
}
```

Links marked `sample: true` appear only in demo mode. For client sites, use the approved contact details and their matching destinations.

## Resume CV and appearance

Set `profile.cvUrl` to an accessible HTTPS link on Google Drive or Google Docs. Set `contact.showResume` to `false` to keep the CV button on Home only.

`settings.defaultMode` defaults to `light`. Set it to `system` to follow the device’s color scheme or `dark` to start in dark mode. To customize the palette, enter six-digit HEX colors in `settings.accent.light` and `settings.accent.dark`. Set `settings.demo` to `false` for client sites.

[Client setup guide](../Documentation/PANDUAN.md) · [Theme README](../README.md)
