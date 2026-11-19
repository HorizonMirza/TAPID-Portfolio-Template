export const aboutTheme = "dkv";

export const aboutDemos = [
  {
    "id": "01",
    "layout": "split",
    "name": "Studio Statement",
    "caption": {
      "id": "Ringkasan tampil di bidang beraksen dengan detail di samping.",
      "en": "An accent-colored summary panel sits beside the academic facts."
    }
  },
  {
    "id": "02",
    "layout": "spread",
    "name": "Editorial Grid",
    "caption": {
      "id": "Judul dan ringkasan berdampingan dengan empat kartu di bawahnya.",
      "en": "The heading and summary share a row above four academic cards."
    }
  },
  {
    "id": "03",
    "layout": "rail",
    "name": "Print Margins",
    "caption": {
      "id": "Detail akademik memakai garis vertikal dan latar bernuansa tema.",
      "en": "Academic details use vertical rules against a theme-tinted surface."
    }
  },
  {
    "id": "04",
    "layout": "matrix",
    "name": "Color Blocks",
    "caption": {
      "id": "Ringkasan di kiri dan empat kartu akademik di kanan.",
      "en": "A left-hand summary with four academic cards on the right."
    }
  },
  {
    "id": "05",
    "layout": "feature",
    "name": "School Feature",
    "caption": {
      "id": "Universitas diberi bidang paling lebar di antara data akademik.",
      "en": "The university gets the widest panel among the academic details."
    }
  },
  {
    "id": "06",
    "layout": "center",
    "name": "Gallery Label",
    "caption": {
      "id": "Ringkasan di tengah dan dua kolom kartu di bawahnya.",
      "en": "A centered introduction above two columns of cards."
    }
  },
  {
    "id": "07",
    "layout": "strip",
    "name": "Type Strip",
    "caption": {
      "id": "Ringkasan lebar di atas satu baris informasi akademik.",
      "en": "A wide summary above a single row of academic details."
    }
  },
  {
    "id": "08",
    "layout": "gpa",
    "name": "Grade Poster",
    "caption": {
      "id": "GPA mendapat satu panel besar di samping tiga informasi lain.",
      "en": "One large GPA panel sits beside the other three details."
    }
  },
  {
    "id": "09",
    "layout": "sidebar",
    "name": "Studio Sidebar",
    "caption": {
      "id": "Informasi akademik mengisi bilah kiri di samping ringkasan.",
      "en": "A compact academic sidebar beside the summary."
    }
  },
  {
    "id": "10",
    "layout": "ledger",
    "name": "Catalogue Index",
    "caption": {
      "id": "Informasi akademik disusun sebagai empat baris berlabel.",
      "en": "Academic information appears in four labeled rows."
    }
  }
];

export const selectedAbout = aboutDemos.find((choice) => choice.id === "10") ?? aboutDemos[0];
