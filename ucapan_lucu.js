// Daftar ucapan lucu setelah sidang
const ucapanSetelahSidang = [
  "Senyumin dosennya... akhirnya lulus juga! 😁",
  "Sidang selesai, saatnya jalan menuju wisuda! 🎓",
  "Tadi kamu jawabnya keren banget, dosennya juga pura-pura makin kagum. 🤭",
  "Sidang bukan perang, tapi kamu tetap menang! 💪",
  "Pas bingung tadi, senyum kamu menyelamatkan semuanya. 😉",
  "Skripsi kamu emang drama Korea... banyak tegangnya, tapi ending-nya bahagia! 🥲"
];

// Ambil elemen tempat ucapan akan muncul
const ucapanEl = document.getElementById("ucapan");

// Pilih ucapan acak
function gantiUcapan() {
  const randomIndex = Math.floor(Math.random() * ucapanSetelahSidang.length);
  ucapanEl.textContent = ucapanSetelahSidang[randomIndex];

  // Tambahkan efek warna biru pastel cantik
  ucapanEl.style.color = "#2563eb"; // biru pastel tegas
  ucapanEl.style.backgroundColor = "#e0f2fe"; // biru pastel lembut
  ucapanEl.style.padding = "1rem";
  ucapanEl.style.borderRadius = "12px";
  ucapanEl.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  ucapanEl.style.transition = "all 0.4s ease";
}

// Fungsi memutar suara
function playSound() {
  const sound = document.getElementById("sound");
  sound.play();
}

// Tampilkan ucapan pertama secara otomatis saat halaman dibuka
window.onload = () => {
  gantiUcapan();
};
