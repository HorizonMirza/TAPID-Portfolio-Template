export const demoTheme = "dkv";

export const homeDemos = [
  {
    "id": "01",
    "name": "Poster Cover",
    "art": "spotlight",
    "caption": {
      "id": "Teks besar di atas potret penuh dengan gradasi merah tua.",
      "en": "Large type over a full-stage portrait and deep red gradient."
    }
  },
  {
    "id": "02",
    "name": "Swiss Grid",
    "art": "ruled",
    "caption": {
      "id": "Masthead besar dan tiga kolom dengan susunan seperti poster Swiss.",
      "en": "A large masthead and three columns inspired by Swiss poster grids."
    }
  },
  {
    "id": "03",
    "name": "Studio Diptych",
    "art": "split",
    "caption": {
      "id": "Dua panel tegas memisahkan potret studio dan teks.",
      "en": "Two strong panels separate the studio portrait from the introduction."
    }
  },
  {
    "id": "04",
    "name": "Title as Type",
    "art": "ruled",
    "caption": {
      "id": "Nama menjadi elemen utama, memenuhi hampir seluruh lebar.",
      "en": "The name becomes the main graphic element across the stage."
    }
  },
  {
    "id": "05",
    "name": "Contact Sheet",
    "art": "frame",
    "caption": {
      "id": "Potret dan catatan proyek tersusun seperti lembar kontak fotografi.",
      "en": "Portrait and project notes are arranged like a photographic contact sheet."
    }
  },
  {
    "id": "06",
    "name": "Red Cutout",
    "art": "split",
    "caption": {
      "id": "Panel merah pekat dan potret melengkung seperti potongan kertas.",
      "en": "A saturated red panel with a cut-paper portrait shape."
    }
  },
  {
    "id": "07",
    "name": "Gallery Wall",
    "art": "bleed",
    "caption": {
      "id": "Potret panorama diapit judul dan catatan seperti dinding galeri.",
      "en": "A panoramic portrait sits between a title strip and gallery-style notes."
    }
  },
  {
    "id": "08",
    "name": "Art Director Card",
    "art": "cards",
    "caption": {
      "id": "Foto, nama, proyek, dan pengantar membentuk empat panel terpisah.",
      "en": "Separate panels showcase the portrait, name, project and introduction."
    }
  },
  {
    "id": "09",
    "name": "Print Layout",
    "art": "ruled",
    "caption": {
      "id": "Kolom keterangan ramping mengimbangi judul besar dan foto tegak.",
      "en": "A slim caption column balances bold typography and a tall portrait."
    }
  },
  {
    "id": "10",
    "name": "Studio Spread",
    "art": "frame",
    "caption": {
      "id": "Nama besar bertumpuk di kiri dan potret tinggi di kanan.",
      "en": "A stacked name on the left and a tall studio portrait on the right."
    }
  }
];

export const selectedHome = homeDemos.find((demo) => demo.id === "01") ?? homeDemos[0];
