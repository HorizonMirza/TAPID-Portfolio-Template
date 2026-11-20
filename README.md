# TAP.ID Portfolio Template

Enam template Astro untuk paket **NFC + Linktree + Website Portofolio**. Setiap tema mencakup Beranda, Tentang, Proyek, Keahlian, Pengalaman, dan Kontak, dengan Bahasa Indonesia di `/` dan English di `/en/`. Pengunjung dapat memilih mode terang atau gelap dan berpindah bahasa tanpa memuat ulang halaman.

## Tema

| Template | Warna bawaan |
| --- | --- |
| [01 · Teknologi](Portfolio%201%20-%20Teknologi/) | Biru |
| [02 · Asuransi](Portfolio%202%20-%20Asuransi/) | Hijau |
| [03 · Management](Portfolio%203%20-%20Management/) | Kuning |
| [04 · DKV](Portfolio%204%20-%20DKV/) | Merah |
| [05 · General](Portfolio%205%20-%20General/) | Hitam putih |
| [06 · Finance](Portfolio%206%20-%20Finance/) | Ungu elektrik |

## Struktur tiap tema

| Lokasi | Isi |
| --- | --- |
| `Frontend/src/portfolio.json` | Satu file data pelanggan |
| `Frontend/src/portfolio.ts` | Validasi data, terjemahan, dan penyusunan menu |
| `Frontend/src/pages/` | Rute Astro untuk halaman utama dan galeri |
| `Frontend/src/components/layout/` | Bingkai halaman, top bar, dan kontrol |
| `Frontend/src/components/sections/` | Bagian portofolio dari Beranda sampai footer |
| `Frontend/src/demos/` | Galeri dan pilihan tata letak |
| `Frontend/src/styles/` | CSS dasar, tema, dan bagian halaman |
| `Frontend/public/` | Gambar, font, dan logo yang disajikan sebagai aset statis |
| `Documentation/PANDUAN.md` | Penyiapan situs dan deployment |
| `Database/README.md` | Kontrak data |
| `Backend/README.md` | Alur build statis |

## Jalankan dan periksa

Gunakan Node.js 24 LTS. Buka folder `Frontend` dari tema yang dipilih.

```sh
npm ci
npm run dev
npm run check
npm run build
```

Untuk Vercel, pilih preset **Astro** dan gunakan folder `Frontend` tema sebagai **Root Directory**. Tema dapat disalin ke repositori pelanggan dan dibangun secara mandiri.

## Dari Google Form ke portofolio

1. Siapkan Linktree dari tautan yang pelanggan izinkan untuk dipublikasikan. Simpan email koordinasi dan respons asli di akun TAP.ID.
2. Untuk paket website, salin tema pilihan pelanggan. Isi `Frontend/src/portfolio.json` dan setel `settings.demo` ke `false`.
3. Isi `profile` untuk Beranda, `about` untuk bio dan pendidikan opsional, lalu `projects`, `skills`, dan `experience`. Isi pasangan `id` dan `en` untuk teks bilingual. Gunakan daftar kosong jika bagian belum memiliki isi.
4. Masukkan kanal footer pilihan pelanggan, sesuai urutan, ke `contact.links`. Pakai `detail` untuk nomor WhatsApp lengkap atau nama akun. Hapus entri contoh bertanda `sample: true`.
5. Isi `profile.cvUrl` dengan tautan Google Drive untuk Resume CV. Setel `contact.showResume` ke `false` jika pelanggan hanya menginginkan tombol CV di Beranda.
6. Atur `settings.defaultMode` dan, jika diperlukan, warna HEX di `settings.accent.light` dan `settings.accent.dark`.
7. Deploy dan uji tautan website serta kontak publik sebelum menambahkan website ke Linktree pelanggan.

## Galeri desain

Galeri tersedia ketika `settings.demo` aktif. Tambahkan `/en` di depan rute untuk versi Inggris atau `?pilihan=04` untuk membuka desain 04. Galeri footer juga menyimpan pilihan kanal kontak di URL.

| Bagian | Rute | Pilihan per tema |
| --- | --- | ---: |
| Beranda | `/demo-beranda/` | 10 |
| Tentang | `/demo-tentang/` | 10 |
| Proyek | `/demo-proyek/` | 10 |
| Keahlian | `/demo-keahlian/` | 15 |
| Pengalaman | `/demo-pengalaman/` | 15 |
| Footer | `/demo-footer/` | 10 |

[Galeri kontrol top bar](kontrol-topbar.html) memuat 10 variasi tombol. Nama, proyek, pengalaman, dan kontak demo bersifat fiktif. Potret demo dibuat dengan ImageGen.

## Sumber logo footer

Logo disimpan di `Frontend/public/brands`. GitHub dan Instagram memakai versi aset yang sesuai dengan mode terang atau gelap.

- [WhatsApp Brand Resource Center](https://www.meta.com/en-gb/brand/resources/whatsapp/whatsapp-brand/)
- [Instagram Brand Resource Center](https://www.meta.com/en-gb/brand/resources/instagram/instagram-brand/)
- [LinkedIn [in] Logo](https://brand.linkedin.com/in-logo)
- [GitHub Brand Toolkit](https://brand.github.com/foundations/logo)
- [Google Drive product logo](https://developers.google.com/workspace/drive/api/guides/branding#use_google_drive_logo)
- [Linktree](https://linktr.ee/)
