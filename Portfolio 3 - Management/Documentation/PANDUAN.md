# Penyiapan pelanggan

1. Salin folder tema ini ke repositori khusus pelanggan.
2. Isi `Frontend/src/portfolio.json` dari jawaban Google Form. Isi teks `id` dan `en`. Gunakan array kosong untuk proyek, keahlian, pengalaman, atau kontak yang belum tersedia.
3. Unggah gambar yang disetujui ke `Frontend/public/media/` dan pakai path seperti `/media/foto.webp`. Isi deskripsi gambar dalam kedua bahasa. URL HTTPS untuk aset eksternal juga didukung.
4. Pakai `settings.accent.light` dan `settings.accent.dark` untuk mengganti warna aksen, misalnya `#6D28D9` dan `#C4B5FD`. Uji ulang keterbacaan pada kedua mode. Nilai `settings.defaultMode` dapat berupa `light`, `dark`, atau `system`.
5. Jalankan `npm ci`, `npm run check`, dan `npm run build` di `Frontend`.

## Deployment Vercel

Impor repositori ke Vercel. Pilih preset **Astro** dan atur **Root Directory** ke `Frontend` bila repositori berisi satu salinan folder tema. Untuk mengimpor langsung dari repo lima tema, pilih `Portfolio …/Frontend` sesuai tema. Gunakan Node.js yang memenuhi batas di `package.json`, misalnya Node.js 24. Gunakan perintah build `npm run build` dan direktori output `dist`.

Periksa `/` (Bahasa Indonesia), `/en/` (English), tombol mode terang/gelap, tampilan ponsel, dan tautan kontak. Tambahkan URL website ke akun Linktree pelanggan sesuai persetujuannya.

## Cara pelanggan mengedit

1. Buka `Frontend/src/portfolio.json` di **repositori milik pelanggan** dan klik ikon pensil.
2. Ganti nilai teks di dalam tanda kutip. Untuk email, ubah teks tampilan dan nilai `href` yang diawali `mailto:`. Ubah kedua versi bahasa untuk konten berbahasa.
3. Simpan dengan **Commit changes**. Jika repositori memakai pull request, merge perubahan ke branch produksi. Vercel akan membangun ulang proyek yang terhubung.
4. Periksa website setelah deployment sukses. Perbarui tautan secara terpisah di akun Linktree jika ingin perubahan yang sama tampil di sana.

Dokumentasi resmi [Astro di Vercel](https://docs.astro.build/en/guides/deploy/vercel/) dan [Edit file di GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).
