export const demoTheme = "general";

export const homeDemos = [
  {
    "id": "01",
    "name": "Classic Editorial",
    "art": "frame",
    "caption": {
      "id": "Potret monokrom berbingkai dengan teks bergaya editorial.",
      "en": "A framed monochrome portrait beside an editorial introduction."
    }
  },
  {
    "id": "02",
    "name": "Column Story",
    "art": "ruled",
    "caption": {
      "id": "Masthead lebar dengan teks dan foto seperti kolom majalah.",
      "en": "A wide masthead above magazine-style columns."
    }
  },
  {
    "id": "03",
    "name": "Quiet Center",
    "art": "center",
    "caption": {
      "id": "Komposisi tengah dengan potret kecil berbentuk oval.",
      "en": "A centered, restrained composition with a small oval portrait."
    }
  },
  {
    "id": "04",
    "name": "Masthead",
    "art": "ruled",
    "caption": {
      "id": "Nama melintang di atas tiga kolom informasi.",
      "en": "A full-width name over three compact editorial columns."
    }
  },
  {
    "id": "05",
    "name": "Margins",
    "art": "split",
    "caption": {
      "id": "Catatan di margin kiri, teks utama di tengah, dan potret tegak.",
      "en": "Margin notes on the left, central type and a vertical portrait."
    }
  },
  {
    "id": "06",
    "name": "Magazine Cover",
    "art": "spotlight",
    "caption": {
      "id": "Foto hitam putih selebar layar dengan huruf serif di atasnya.",
      "en": "A full-stage black-and-white portrait with a serif title."
    }
  },
  {
    "id": "07",
    "name": "Open Letter",
    "art": "ruled",
    "caption": {
      "id": "Foto kecil, nama di kanan, dan pengantar dengan ruang baca lebar.",
      "en": "A small portrait and a right-hand title above a wide reading area."
    }
  },
  {
    "id": "08",
    "name": "Document Portrait",
    "art": "frame",
    "caption": {
      "id": "Foto berbingkai turun ke kanan, seperti potret dalam dokumen.",
      "en": "A framed portrait sits low on the right like a profile document."
    }
  },
  {
    "id": "09",
    "name": "Gallery Caption",
    "art": "bleed",
    "caption": {
      "id": "Panorama monokrom di atas judul dan keterangan yang lapang.",
      "en": "A monochrome panorama above a spacious title and caption row."
    }
  },
  {
    "id": "10",
    "name": "Profile Card",
    "art": "cards",
    "caption": {
      "id": "Nama dan pengantar diberi ruang lebih besar di samping kartu potret.",
      "en": "The name and introduction get more space beside a portrait card."
    }
  }
];

export const selectedHome = homeDemos.find((demo) => demo.id === "01") ?? homeDemos[0];
