# Kontrak data portofolio

Edit `Frontend/src/portfolio.json`. Astro memvalidasi file terhadap [skema data](../Frontend/src/portfolio.ts) saat build. Teks bilingual berbentuk objek `{ "id": "...", "en": "..." }`.

| Blok | Isi |
| --- | --- |
| `profile` | Nama, lokasi, peran, tagline, perkenalan, foto opsional, dan tautan Resume CV opsional |
| `about` | Bio dan pendidikan opsional berupa universitas, jurusan, spesialisasi, serta IPK |
| `projects` | Judul, kategori, deskripsi, gambar opsional, dan tautan HTTPS opsional |
| `skills` | Daftar keahlian bilingual |
| `experience` | Jabatan, organisasi, periode, serta deskripsi |
| `contact` | Daftar tautan publik di `links` dan opsi kartu CV di `showResume` |
| `settings` | Mode awal, warna aksen opsional, dan mode demo |

Isi `about.education.gpa` dengan `value` serta `scale` jika pelanggan mengizinkan publikasi IPK. Nilai IPK tidak melebihi skalanya. Bagian proyek, keahlian, dan pengalaman boleh berupa array kosong.

## Kontak dan Resume CV

Footer mengikuti urutan `contact.links`. Setiap entri perlu `label` dan `href`. Tujuan dapat berupa URL HTTPS, `mailto:`, atau `tel:`. Logo dideteksi dari URL. Gunakan `kind` opsional untuk memilih `whatsapp`, `email`, `linkedin`, `github`, `instagram`, `linktree`, atau `website`.

Gunakan `detail` untuk menentukan nomor tampilan atau nama akun. Untuk WhatsApp, sertakan nomor lengkap dengan kode negara. Contoh entri untuk template demo:

```json
{
  "kind": "whatsapp",
  "label": "WhatsApp",
  "href": "https://www.whatsapp.com/",
  "detail": "+62 812 0000 0000",
  "sample": true
}
```

Entri `sample: true` hanya tampil dalam mode demo. Untuk situs pelanggan, gunakan tautan WhatsApp yang sesuai dengan nomor pelanggan dan masukkan hanya kontak yang sudah disetujui.

Isi `profile.cvUrl` dengan tautan HTTPS dari Google Drive atau Google Docs yang dapat dibuka pengunjung. Pakai `contact.showResume: false` untuk menyembunyikan kartu footer sambil tetap menampilkan tombol CV di Beranda.

## Mode tampilan dan warna

`settings.defaultMode` menerima `system`, `light`, atau `dark`. Isi `settings.accent.light` dan `settings.accent.dark` dengan warna HEX enam digit jika pelanggan memilih palet khusus. Gunakan `settings.demo: false` pada situs pelanggan.

[Panduan penyiapan pelanggan](../Documentation/PANDUAN.md) · [Kembali ke README tema](../README.md)
