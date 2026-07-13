import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

import story1 from "../assets/images/story1.jpg";
import story2 from "../assets/images/story2.jpg";
import story3 from "../assets/images/story3.jpg";

const invitationData = {
  couple: {
    groom: "Reno",
    bride: "Vina",
  },

  event: {
    day: "Minggu",
    date: "12 Desember 2027",
    time: "08.00 WIB",
    location: "Gedung Pernikahan",
    countdown: "December 12, 2027 08:00:00",
  },

  gallery: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],

  gift: {
    bank: {
      name: "BCA",
      number: "1234567890",
      owner: "Reno",
    },

    ewallet: {
      name: "Dana",
      number: "081234567890",
      owner: "Reno",
    },
  },

  whatsapp: {
    number: "628123456789",
    message: "",
  },
  story: [
    {
      year: "2021",
      title: "First Meet",

      description: "Pertemuan sederhana yang menjadi awal cerita panjang kami.",

      image: story1,
    },

    {
      year: "2023",
      title: "Together",

      description: "Hari demi hari kami lalui dengan penuh kebahagiaan.",

      image: story2,
    },

    {
      year: "2026",
      title: "The Proposal",

      description: "Sebuah langkah kecil menuju perjalanan baru.",

      image: story3,
    },
  ],
};

export default invitationData;
