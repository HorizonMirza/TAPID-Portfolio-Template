# Client Setup Guide

Use this guide to turn approved Google Form responses into a portfolio and hand the site over to the client.

## 1. Prepare the content

Copy the chosen theme to the client’s repository. Edit `Frontend/src/portfolio.json` and set `settings.demo` to `false` to hide the demo galleries and sample contact links. Replace the sample profile, projects, skills, experience, and images with material cleared for publication.

| Google Form section | Portfolio fields |
| --- | --- |
| Home and profile photo | `profile.name`, `profile.role`, `profile.location`, `profile.headline`, `profile.introduction`, `profile.portrait` |
| About and education | `about.description` and `about.education` |
| Projects, skills, and experience | `projects`, `skills`, and `experience` |
| Resume CV | `profile.cvUrl` |
| Public footer channels | `contact.links` and `contact.showResume` |
| Accent colors and initial appearance | `settings.accent` and `settings.defaultMode` |

Provide `id` and `en` for bilingual text. Use empty arrays for sections without content. Keep the private coordination email, raw form responses, and other private contacts in TAP.ID’s account.

Store approved images in `Frontend/public/media/` and use paths such as `/media/photo.webp`. HTTPS image URLs are also supported. Supply alternative text in both languages.

List each approved footer channel in display order. Set `detail` for a formatted WhatsApp number or account name when needed. To show Resume CV only on Home, set `contact.showResume` to `false`. [Data reference and examples](../Database/README.md)

## 2. Validate and deploy

Use Node.js 24 LTS and run these commands from `Frontend`.

```sh
npm ci
npm run check
npm run build
```

In Vercel, use the **Astro** preset, the build command `npm run build`, and the output directory `dist`.

| Repository contents | Vercel root directory |
| --- | --- |
| One theme copied to the root | `Frontend` |
| All six themes | The selected theme’s `Frontend` folder |

Open `/` and `/en/` after deployment. Check the portraits, responsive layout, light and dark modes, and the destination of each public link. Add the verified site URL to the client’s Linktree. [Astro on Vercel](https://docs.astro.build/en/guides/deploy/vercel/)

## 3. Hand over the site

1. Give the client access to their site repository and point them to `Frontend/src/portfolio.json`.
2. Update both the contact label and its destination when addresses or numbers change. For email links, update the `mailto:` address as well.
3. Commit the edits. If your team works through pull requests, merge the changes into the production branch to trigger the Vercel deployment.
4. Check the deployed site. Update the client’s Linktree separately when a link appears in both places.

[Theme README](../README.md) · [Editing files on GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
