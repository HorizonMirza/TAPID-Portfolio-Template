# Build statis

Astro membaca data portofolio dan menghasilkan halaman HTML siap disajikan oleh Vercel. Respons Google Form dipindahkan ke file data oleh tim TAP.ID sebelum build.

```text
Google Form → portfolio.json → validasi Astro → dist/ → Vercel
```

Jalankan perintah ini dari `Frontend` dengan Node.js 24 LTS.

```sh
npm ci
npm run check
npm run build
```

Hasil build tersedia di `Frontend/dist/`. Jalankan `npm run preview` dari `Frontend` untuk memeriksa hasil build melalui browser.

- [Skema dan contoh data](../Database/README.md)
- [Konfigurasi Vercel dan pemeriksaan sebelum serah terima](../Documentation/PANDUAN.md)
