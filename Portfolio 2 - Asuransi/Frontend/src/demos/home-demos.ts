export const demoTheme = "asuransi";

export const homeDemos = [
  {
    "id": "01",
    "name": "Office Portrait",
    "art": "split",
    "caption": {
      "id": "Potret di kiri, pengantar di kanan, dan detail konsultasi di bawah foto.",
      "en": "A welcoming left portrait with the introduction and advisory details alongside."
    }
  },
  {
    "id": "02",
    "name": "Policy Brief",
    "art": "cards",
    "caption": {
      "id": "Judul lebar di atas panel layanan, ringkasan, dan foto panorama.",
      "en": "A wide headline above service details, introductory copy and a panorama."
    }
  },
  {
    "id": "03",
    "name": "Quiet Advisor",
    "art": "center",
    "caption": {
      "id": "Nama, potret bundar, dan pengantar tersusun di tengah.",
      "en": "A centered name, rounded portrait and concise introduction."
    }
  },
  {
    "id": "04",
    "name": "Green Frame",
    "art": "frame",
    "caption": {
      "id": "Blok hijau muda dengan potret besar berbingkai ganda.",
      "en": "A pale green field and a double-framed portrait."
    }
  },
  {
    "id": "05",
    "name": "Client Guide",
    "art": "cards",
    "caption": {
      "id": "Nama, layanan, dan foto membentuk tiga kolom panduan.",
      "en": "The name, advisory details and portrait form a three-column guide."
    }
  },
  {
    "id": "06",
    "name": "Editorial Cover",
    "art": "ruled",
    "caption": {
      "id": "Nama melintang seperti sampul dengan potret besar di kiri bawah.",
      "en": "A cover-style masthead above a large left portrait."
    }
  },
  {
    "id": "07",
    "name": "Coverage Desk",
    "art": "split",
    "caption": {
      "id": "Panel layanan muncul lebih dulu di sebelah potret vertikal.",
      "en": "Advisory details lead the text column next to a tall portrait."
    }
  },
  {
    "id": "08",
    "name": "Advisor Card",
    "art": "cards",
    "caption": {
      "id": "Potret berbingkai dan kartu layanan ringkas membentuk profil.",
      "en": "A framed headshot and a compact advisory card form the profile."
    }
  },
  {
    "id": "09",
    "name": "Team Introduction",
    "art": "bleed",
    "caption": {
      "id": "Satu foto panorama membuka perkenalan dua kolom yang lapang.",
      "en": "A panoramic portrait opens a spacious two-column introduction."
    }
  },
  {
    "id": "10",
    "name": "Open Statement",
    "art": "ruled",
    "caption": {
      "id": "Judul dan potret sejajar, ditemani kolom informasi di kanan.",
      "en": "Name and portrait align beside an advisory column on the right."
    }
  }
];

export const selectedHome = homeDemos.find((demo) => demo.id === "04") ?? homeDemos[0];
