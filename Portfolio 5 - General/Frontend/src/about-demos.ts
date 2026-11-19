export const aboutTheme = "general";

export const aboutDemos = [
  {
    "id": "01",
    "layout": "center",
    "name": "Classic Center",
    "caption": {
      "id": "Ringkasan di tengah dan dua kolom kartu di bawahnya.",
      "en": "A centered introduction above two columns of cards."
    }
  },
  {
    "id": "02",
    "layout": "rail",
    "name": "Reading Margins",
    "caption": {
      "id": "Detail akademik memakai garis vertikal dan latar bernuansa tema.",
      "en": "Academic details use vertical rules against a theme-tinted surface."
    }
  },
  {
    "id": "03",
    "layout": "ledger",
    "name": "Profile Index",
    "caption": {
      "id": "Informasi akademik disusun sebagai empat baris berlabel.",
      "en": "Academic information appears in four labeled rows."
    }
  },
  {
    "id": "04",
    "layout": "spread",
    "name": "Editorial Spread",
    "caption": {
      "id": "Judul dan ringkasan berdampingan dengan empat kartu di bawahnya.",
      "en": "The heading and summary share a row above four academic cards."
    }
  },
  {
    "id": "05",
    "layout": "sidebar",
    "name": "Quiet Sidebar",
    "caption": {
      "id": "Informasi akademik mengisi bilah kiri di samping ringkasan.",
      "en": "A compact academic sidebar beside the summary."
    }
  },
  {
    "id": "06",
    "layout": "matrix",
    "name": "Monochrome Cards",
    "caption": {
      "id": "Ringkasan di kiri dan empat kartu akademik di kanan.",
      "en": "A left-hand summary with four academic cards on the right."
    }
  },
  {
    "id": "07",
    "layout": "strip",
    "name": "Reading Strip",
    "caption": {
      "id": "Ringkasan lebar di atas satu baris informasi akademik.",
      "en": "A wide summary above a single row of academic details."
    }
  },
  {
    "id": "08",
    "layout": "feature",
    "name": "University Column",
    "caption": {
      "id": "Universitas diberi bidang paling lebar di antara data akademik.",
      "en": "The university gets the widest panel among the academic details."
    }
  },
  {
    "id": "09",
    "layout": "split",
    "name": "Ink Statement",
    "caption": {
      "id": "Ringkasan tampil di bidang beraksen dengan detail di samping.",
      "en": "An accent-colored summary panel sits beside the academic facts."
    }
  },
  {
    "id": "10",
    "layout": "gpa",
    "name": "Academic Record",
    "caption": {
      "id": "GPA mendapat satu panel besar di samping tiga informasi lain.",
      "en": "One large GPA panel sits beside the other three details."
    }
  }
];

export const selectedAbout = aboutDemos.find((choice) => choice.id === "10") ?? aboutDemos[0];
