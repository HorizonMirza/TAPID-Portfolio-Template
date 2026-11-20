# Data portofolio

Isi website berasal dari satu file, `Frontend/src/portfolio.json`. Contoh di file itu berisi profil fiktif. Nama, aset, keterampilan, dan tautan publik dipakai bersama di kedua bahasa. Teks terjemahan disimpan dalam pasangan `id` dan `en`.

| Kelompok data | Isi |
| --- | --- |
| `profile` | Nama, profesi, ringkasan, lokasi, foto opsional, dan `cvUrl` untuk tautan CV |
| `about` | Ringkasan diri dan data akademik opsional di `education` |
| `projects` | Nama, kategori, deskripsi, serta gambar dan tautan opsional |
| `skills` | Daftar kemampuan dalam Bahasa Indonesia dan Inggris |
| `experience` | Peran, organisasi, periode, serta deskripsi |
| `contact` | Kanal footer di `links` serta pilihan `showResume` |
| `settings` | Mode awal dan aksen warna tema opsional |

Footer mengikuti urutan `contact.links`. Setiap entri memerlukan `href` dan `label`. `detail` bisa diisi nama akun, alamat email, atau nomor tampilan. Jenis logo dideteksi dari URL. Gunakan `kind` opsional untuk menentukan jenisnya secara manual. Nilai yang didukung adalah `whatsapp`, `email`, `linkedin`, `github`, `instagram`, `linktree`, dan `website`. Entri contoh bertanda `sample: true` hanya tampil selama `settings.demo` aktif. Hapus entri contoh, lalu masukkan tautan publik yang dipilih pelanggan.

Untuk menampilkan kartu Resume CV, isi `profile.cvUrl` dengan tautan Google Drive. Setel `contact.showResume` menjadi `false` jika pelanggan hanya ingin tombol CV di Beranda.

Simpan jawaban mentah Google Form dan kontak koordinasi di akun TAP.ID. Email admin, data pemesanan, dan kontak privat berada di luar file publik.
