# TAP.ID Portfolio Template

Enam template Astro untuk paket **NFC + Linktree + Website Portofolio** TAP.ID. Setiap demo menampilkan foto profil di Beranda, enam contoh proyek, serta bagian Tentang, Keahlian, Pengalaman, dan Kontak. Setiap template memakai palet warnanya sendiri dengan top bar yang tetap terlihat saat halaman digulir. Pilihan bahasa tersedia di `/` (Bahasa Indonesia) dan `/en/` (English). Mode terang dan gelap dapat diganti lewat tombol di navigasi.

Keenam top bar menampilkan nama profil, menu di tengah pada desktop, dan tombol bahasa serta mode dengan desain yang sama. Unduh dan buka [kontrol-topbar.html](kontrol-topbar.html) di browser untuk mencoba 10 pilihan desain dan animasi tombol.

Setiap portofolio demo punya 10 rancangan Beranda bernomor 01–10. Buka `/demo-beranda/` pada tema yang sedang dijalankan atau `/en/demo-beranda/` untuk versi Inggris. Pilihan dapat dibuka kembali lewat URL seperti `/demo-beranda/?pilihan=04`.

Setiap tema juga punya 10 rancangan Tentang di `/demo-tentang/` dan `/en/demo-tentang/`. Ringkasan diambil dari `about.description`. Data akademik opsional ada di `about.education` dan mencakup `university`, `major`, `specialization`, serta `gpa` dengan `value` dan `scale`. Demo menggunakan nama Universitas Bina Nusantara dengan contoh jurusan, spesialisasi, dan GPA yang fiktif.

Untuk mencoba 10 rancangan Proyek, buka `/demo-proyek/` atau `/en/demo-proyek/`. Pilihan dapat dibagikan lewat URL seperti `/demo-proyek/?pilihan=04`. Isi proyek mengikuti `projects` di file data tema.

Setiap tema menampilkan 10 contoh keahlian. Buka `/demo-keahlian/` atau `/en/demo-keahlian/` untuk membandingkan 15 rancangan. Tautan seperti `/demo-keahlian/?pilihan=07` langsung membuka rancangan yang dipilih.

Buka `/demo-pengalaman/` atau `/en/demo-pengalaman/` untuk mencoba 15 rancangan dengan empat contoh pengalaman per tema. Galeri memakai riwayat dari `experience` di file data tema dan dua entri tambahan khusus demo. Tambahkan `?pilihan=07` untuk membuka langsung rancangan bernomor 07.

| Template | Warna bawaan | Beranda utama | Tentang utama | Proyek utama | Keahlian utama | Top bar |
| --- | --- | --- | --- | --- | --- | --- |
| [Portfolio 1 - Teknologi](Portfolio%201%20-%20Teknologi/) | Biru | 04 · Blue Spotlight | 06 · Developer Panel | 05 · Studi Kasus | 01 · Kartu | 01 · Command Rail |
| [Portfolio 2 - Asuransi](Portfolio%202%20-%20Asuransi/) | Hijau | 04 · Green Frame | 09 · Academic Highlight | 05 · Galeri Kartu | 14 · Jalur | 05 · Advisor Capsule |
| [Portfolio 3 - Management](Portfolio%203%20-%20Management/) | Kuning | 03 · Team Lead | 06 · Yellow Statement | 01 · Linimasa | 09 · Mozaik | 02 · Ops Inline |
| [Portfolio 4 - DKV](Portfolio%204%20-%20DKV/) | Merah | 01 · Poster Cover | 10 · Catalogue Index | 08 · Tab Proyek | 08 · Baris Warna | 09 · Letterpress |
| [Portfolio 5 - General](Portfolio%205%20-%20General/) | Hitam putih | 01 · Classic Editorial | 10 · Academic Record | 05 · Linimasa | 02 · Indeks | 04 · Soft Capsule |
| [Portfolio 6 - Finance](Portfolio%206%20-%20Finance/) | Ungu elektrik | 03 · Analyst at Desk | 10 · Editorial Center | 04 · Galeri Kartu | 10 · Jalur | 09 · Review Note |

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
4. Untuk mengganti **aksen tema menjadi ungu**, isi `settings.accent.light` dengan `#6D28D9` dan `settings.accent.dark` dengan `#C4B5FD`. Pilihan mode awal ada di `settings.defaultMode`.
5. Untuk menampilkan tombol **Resume CV**, isi `profile.cvUrl` dengan tautan HTTPS file CV dari Google Drive yang dapat dibuka oleh pengunjung. Gunakan `null` jika tautan belum tersedia. Tombol muncul sebagai pratinjau nonaktif pada profil demo.
6. Deploy repo pelanggan di Vercel dan tambahkan URL ke Linktree. Serahkan akses ke repo tersebut agar pelanggan bisa mengedit satu file data dan menyimpan perubahannya untuk deployment berikutnya.

Setiap tema menyertakan panduan pada `Documentation/PANDUAN.md`, dokumentasi backend pada `Backend/README.md`, dan kontrak data pada `Database/README.md`. Nama, pengalaman, dan proyek demo bersifat fiktif. Repo ini berisi template publik. Jawaban Google Form dan kontak pribadi dikelola dalam akun TAP.ID.
