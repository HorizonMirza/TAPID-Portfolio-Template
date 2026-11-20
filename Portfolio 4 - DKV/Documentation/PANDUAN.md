# Panduan penyiapan situs pelanggan

Panduan ini dipakai tim TAP.ID saat memindahkan jawaban Google Form ke website dan saat menyerahkan pengelolaan website kepada pelanggan.

## 1. Siapkan data

Salin satu folder tema ke repositori pelanggan. Edit `Frontend/src/portfolio.json` dan setel `settings.demo` ke `false` agar galeri dan kontak contoh disembunyikan. Gunakan jawaban yang pelanggan izinkan untuk dipublikasikan. Bersihkan profil, proyek, keahlian, pengalaman, dan aset contoh dari salinan pelanggan.

| Bagian Google Form | Data website |
| --- | --- |
| Beranda dan tautan foto profil | `profile.name`, `profile.role`, `profile.location`, `profile.headline`, `profile.introduction`, `profile.portrait` |
| Tentang dan pendidikan | `about.description` dan `about.education` |
| Proyek, keahlian, dan pengalaman | `projects`, `skills`, `experience` |
| Tautan Resume CV | `profile.cvUrl` |
| Pilihan kanal dan tautan footer | `contact.links` dan `contact.showResume` |
| Warna aksen dan mode awal | `settings.accent` dan `settings.defaultMode` |

Isi varian `id` dan `en` untuk setiap teks bilingual. Gunakan daftar kosong untuk bagian yang belum berisi data. Simpan email koordinasi, respons asli, dan kontak privat di akun TAP.ID.

Simpan foto dan gambar proyek yang disetujui di `Frontend/public/media/`. Di JSON, gunakan jalur seperti `/media/foto.webp` atau URL HTTPS. Sertakan teks alternatif dalam kedua bahasa.

Susun `contact.links` sesuai urutan kanal yang dipilih pelanggan. Isi `detail` dengan nomor WhatsApp lengkap atau nama akun bila diperlukan. Jika pelanggan ingin menampilkan CV di Beranda saja, gunakan `contact.showResume: false`. [Contoh dan aturan data](../Database/README.md)

## 2. Cek dan deploy

Jalankan perintah ini dari `Frontend` menggunakan Node.js 24 LTS.

```sh
npm ci
npm run check
npm run build
```

Impor repositori di Vercel. Pilih preset **Astro**, build command `npm run build`, dan output directory `dist`.

| Isi repositori yang diimpor | Root Directory di Vercel |
| --- | --- |
| Isi satu folder tema di root repositori | `Frontend` |
| Keenam folder tema TAP.ID | `Portfolio N - Nama Tema/Frontend` sesuai tema |

Buka `/` dan `/en/` setelah deployment. Periksa foto, mode terang dan gelap, tampilan ponsel, serta tujuan tautan WhatsApp, email, Resume CV, dan Linktree. Tambahkan alamat website yang sudah dicek ke Linktree pelanggan. [Panduan Astro di Vercel](https://docs.astro.build/en/guides/deploy/vercel/)

## 3. Serahkan pengelolaan

1. Beri pelanggan akses ke repositori situsnya dan tunjukkan lokasi `Frontend/src/portfolio.json`.
2. Saat mengedit profil atau kontak, perbarui tampilan dan tujuan tautannya. Untuk email, ubah juga alamat pada `mailto:`.
3. Simpan dengan **Commit changes**. Jika tim memakai pull request, gabungkan perubahan ke branch produksi agar Vercel membangun ulang situs.
4. Buka website setelah deployment dan cek perubahan. Jika tautan yang sama juga ditampilkan di Linktree, perbarui di akun Linktree.

[Kembali ke README tema](../README.md) · [Cara mengedit file di GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
