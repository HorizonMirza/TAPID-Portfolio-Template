# TAP.ID Portfolio Template

Lima template Astro untuk paket **NFC + Linktree + Website Portofolio** TAP.ID. Setiap demo menampilkan foto profil di Beranda, tiga contoh proyek, serta bagian Tentang, Keahlian, Pengalaman, dan Kontak. Pilihan bahasa tersedia di `/` (Bahasa Indonesia) dan `/en/` (English). Mode terang dan gelap dapat diganti lewat tombol di navigasi.

| Template | Warna bawaan | Desain |
| --- | --- | --- |
| [Portfolio 1 - Teknologi](Portfolio%201%20-%20Teknologi/) | Biru | Space Grotesk, potret ruang kerja bernuansa biru, kartu proyek, dan riwayat vertikal |
| [Portfolio 2 - Asuransi](Portfolio%202%20-%20Asuransi/) | Hijau | DM Sans, foto editorial, daftar proyek, dan kartu pengalaman |
| [Portfolio 3 - Management](Portfolio%203%20-%20Management/) | Kuning | Manrope, foto profesional berbingkai, papan proyek, dan tabel riwayat |
| [Portfolio 4 - DKV](Portfolio%204%20-%20DKV/) | Merah | Bricolage Grotesque, masthead ekspresif, potret studio cetak, dan galeri poster |
| [Portfolio 5 - General](Portfolio%205%20-%20General/) | Hitam putih | Playfair Display, potret monokrom, dan tata letak editorial |

## Jalankan satu template

Install Node.js 24 LTS. Buka `Frontend` dalam folder tema dan jalankan:

```sh
npm ci
npm run dev
```

Gunakan `npm run check` untuk pengecekan TypeScript dan `npm run build` untuk membuat situs statis. Untuk Vercel, pilih preset **Astro** dan atur **Root Directory** ke folder `Frontend` dalam tema yang dipilih.

## Dari Google Form ke website

1. Untuk kedua paket, siapkan Linktree menggunakan tautan yang pelanggan izinkan tampil. Simpan email koordinasi untuk komunikasi pesanan.
2. Untuk paket website, gunakan pilihan tema di bagian **Data Website Portofolio**. Salin tema ke repo khusus pelanggan dan isi `Frontend/src/portfolio.json` dengan konten publiknya. Ubah `settings.demo` menjadi `false`.
3. Gunakan `profile` untuk data Beranda, `about` untuk Tentang, `projects` untuk Proyek, `skills` untuk Keahlian, `experience` untuk Pengalaman, dan `contact.links` untuk kontak publik website. Isi pasangan `id` dan `en`; konfirmasikan terjemahan ke pelanggan bila form hanya diisi dalam satu bahasa.
4. Untuk permintaan seperti **Teknologi dengan aksen ungu**, isi `settings.accent.light` dengan `#6D28D9` dan `settings.accent.dark` dengan `#C4B5FD`. Pilihan mode awal ada di `settings.defaultMode`.
5. Deploy repo pelanggan di Vercel dan tambahkan URL ke Linktree. Serahkan akses ke repo tersebut agar pelanggan bisa mengedit satu file data dan menyimpan perubahannya untuk deployment berikutnya.

Setiap tema menyertakan panduan pada `Documentation/PANDUAN.md`, dokumentasi backend pada `Backend/README.md`, dan kontrak data pada `Database/README.md`. Nama, pengalaman, dan proyek demo bersifat fiktif. Repo ini berisi template publik. Jawaban Google Form dan kontak pribadi dikelola dalam akun TAP.ID.
