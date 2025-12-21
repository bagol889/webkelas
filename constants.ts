import { Person, ClassInfo } from './types';

export const CLASS_DATA: ClassInfo = {
  name: "XII TJKT 1",
  description: "Sebuah komunitas belajar yang berdedikasi tinggi, menjunjung tinggi kebersamaan, dan bertekad mengukir prestasi gemilang demi masa depan yang cerah.",
  schoolName: "SMK Tiara Nusa",
  schoolLogo: "https://i.ibb.co.com/QFbGJM1V/IMG-20251219-WA0020.jpg/200/200",
  logo: "https://i.ibb.co.com/DH3KJ0mQ/IMG-20251219-WA0021.jpg",
  generation: "Angkatan 2026",
  classPhoto: "https://i.ibb.co.com/LD0mvzXy/1766249886753.jpg"
};

export const STATS = [
  { label: "Warga Kelas", value: "29" },
  { label: "Pasangan Cinlok", value: "3" },
  { label: "Laporan BK", value: "6" },
  { label: "Solidaritas", value: "100%" },
];

export const TEACHER: Person = {
  id: "t1",
  name: "Pedro Jose Antonio, S.Kom",
  role: "Wali Kelas",
  photo: "https://i.ibb.co.com/qLSLHh5B/474124685-1826170598230526-7965165961095894941-n-heic.jpg/600/800",
  motto: "Pendidikan adalah tiket ke masa depan, hari esok dimiliki oleh orang-orang yang mempersiapkannya hari ini.",
};

export const ORGANIZATION = {
  ketua: { name: "Muhammad Alviansyah", role: "Ketua Kelas", motto: "Siap memimpin dengan hati" },
  wakil: { name: "Destriawan Althaf Rabbani", role: "Wakil Ketua Kelas", motto: "Bersama kita kuat" },
  sekretaris: [
    { name: "Chelsea Kayla Manik", role: "Sekretaris 1", motto: "Tulisan Bagus Tapi Jarang Nulis" },
    { name: "Muhammad Aditya Pratama", role: "Sekretaris 2", motto: "Catat semua kenangan" }
  ],
  bendahara: [
    { name: "Delia Anggraini Setiawan", role: "Bendahara", motto: "Si Paling Galak Kalau Belum Bayar" }
  ],
  seksi: [
    { label: "Seksi Kebersihan", names: ["Mudita Desca Ardya Pramesti"], mottos: ["Kebersihan sebagian dari iman"] },
    { label: "Seksi Agama", names: ["Awan Dzahran Arifin", "Mardiansyah Bactiar Affatt", "Nasywa Athaya Yasmine R.", "Jhon Hendrico Purba"], mottos: ["Berdoa dan berusaha", "Iman kuat mental baja", "Selalu bersyukur", "Jaga toleransi"] },
    { label: "Seksi Keamanan", names: ["Akhdaan Allif Arsalan"], mottos: ["Aman terkendali"] }
  ]
};

export const STUDENTS: Person[] = [
  { id: "s1", name: "Satrio Tri Bagaskoro", role: "Ketua Kelas", photo: "https://i.ibb.co.com/67BW9gkk/Satrio-Tri-Bagaskoro.jpg/400/400" },
  { id: "s2", name: "Muhamad Giras Perdana", role: "Sekretaris", photo: "https://i.ibb.co.com/chh8t4Jb/Muhamad-Giras-Perdana.jpg/400/400" },
  { id: "s3", name: "Nur Ahmad Yuliarman", role: "Bendahara", photo: "https://i.ibb.co.com/7xL55Qf0/Nur-Ahmad-Yuliarman.jpg/400/400" },
  { id: "s4", name: "Dinda Novita Saputri", role: "Siswa", photo: "https://i.ibb.co.com/4nkNhv94/Dinda-Novita-Saputri.jpg/400/400" },
  { id: "s5", name: "Destriawan Althaf Rabbani", role: "Siswa", photo: "https://i.ibb.co.com/Tx2fSsB7/Destriawan-Althaf-Rabbani.jpg/400/400" },
  { id: "s6", name: "Marchel Hidayatullah", role: "Siswa", photo: "https://i.ibb.co.com/G1kzpgh/Marchel-Hidayatullah.jpg/400/400" },
  { id: "s7", name: "Jhon Hendrico Purba", role: "Siswa", photo: "https://i.ibb.co.com/8gdnb44r/1766070943124.jpg/400/400" },
  { id: "s8", name: "Muhammad Aditya Pratama", role: "Siswa", photo: "https://i.ibb.co.com/v636qqn6/Muhammad-Aditya-Pratama.jpg/400/400" },
  { id: "s9", name: "Aditya Maulana", role: "Siswa", photo: "https://i.ibb.co.com/Fb2Xf6ct/Aditya-Maulana.jpg/400/400" },
  { id: "s10", name: "Mardiansyah Bactiar Affatt", role: "Siswa", photo: "https://i.ibb.co.com/5W6M3cTb/Mardiansyah-Bactiar-Affatt.jpg/400/400" },
  { id: "s11", name: "Dzakwan Ahmad Syahbani", role: "Siswa", photo: "https://i.ibb.co.com/pj228Fgd/Dzakwan-Ahmad-Syahbani.jpg/400/400" },
  { id: "s12", name: "Chelsea Kayla Manik", role: "Siswa", photo: "https://i.ibb.co.com/wvY01fs/Chelsea-Kayla-Manik.jpg/400/400" },
  { id: "s13", name: "Muhammad Roby", role: "Siswa", photo: "https://i.ibb.co.com/FkyLY1JD/Muhammad-Roby.jpg/400/400" },
  { id: "s14", name: "Abdillah Fakhri Sajid", role: "Siswa", photo: "https://i.ibb.co.com/4BcK4M2/Abdillah-Fakhri-Sajid.jpg/400/400" },
  { id: "s15", name: "Delia Anggraini Setiawan", role: "Siswa", photo: "https://i.ibb.co.com/xSBbYztz/Delia-Anggraini-Setiawan.jpg/400/400" },
  { id: "s16", name: "Nasywa Athaya Yasmine Riyanto", role: "Siswa", photo: "https://i.ibb.co.com/L3HjDYG/Nasywa-Athaya-Yasmine-Riyanto.jpg/400/400" },
  { id: "s17", name: "Holiana Safitri", role: "Siswa", photo: "https://i.ibb.co.com/PZXhM49S/Holiana-Safitri.jpg/400/400" },
  { id: "s18", name: "Muhammad Alviansyah", role: "Siswa", photo: "https://i.ibb.co.com/8DmDCtvt/Muhammad-Alviansyah.jpg/400/400" },
  { id: "s19", name: "Akhdaan Allif Arsalan", role: "Siswa", photo: "https://i.ibb.co.com/zhwFS6zC/Akhdaan-Allif-Arsalan.jpg/400/400" },
  { id: "s20", name: "Rizki Zulkarnain", role: "Siswa", photo: "https://i.ibb.co.com/kswYcv1p/Rizki-Zulkarnain.jpg/400/400" },
  { id: "s21", name: "Amirul Zohar", role: "Siswa", photo: "https://i.ibb.co.com/jPYNStXB/Amirul-Zohar.jpg/400/400" },
  { id: "s22", name: "Muhammad Rizzky Fadillah", role: "Siswa", photo: "https://i.ibb.co.com/3ykNxtMF/Muhammad-Rizzky-Fadillah.jpg/400/400" },
  { id: "s23", name: "Della Nayshila Sastra", role: "Siswa", photo: "https://i.ibb.co.com/s9BtBh3d/Della-Nayshila-Sastra.jpg/400/400" },
  { id: "s24", name: "Muhammad Ridho Alfiandri", role: "Siswa", photo: "https://i.ibb.co.com/Xr5p0jnt/Muhammad-Ridho-Alfiandri.jpg/400/400" },
  { id: "s25", name: "Eki Yulianto", role: "Siswa", photo: "https://i.ibb.co.com/pvGGQ5X3/Eki-Yulianto.jpg/400/400" },
  { id: "s26", name: "Raga Pahleva Satia", role: "Siswa", photo: "https://i.ibb.co.com/YF3QPq7R/Raga-Pahleva-Satia.jpg/400/400" },
  { id: "s27", name: "Awan Dzahran Arifin", role: "Siswa", photo: "https://i.ibb.co.com/Z6zJMjt3/Awan-Dzahran-Arifin.jpg/400/400" },
  { id: "s28", name: "Kayla Sira Sabila", role: "Siswa", photo: "https://i.ibb.co.com/99P5WtXN/Kayla-Sira-Sabila.jpg/400/400" },
  { id: "s29", name: "Mudita Desca Ardya Pramesti", role: "Siswa", photo: "https://i.ibb.co.com/Y7XSrpnL/Mudita-Desca-Ardya-Pramesti.jpg/400/400" },
];

// --- TAMBAHAN PENTING (MOMENTS) ---
export const MOMENTS = [
  {
    id: 1,
    title: "Juara 1 Futsal Classmeet",
    category: "Lomba",
    date: "15 Des 2023",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop",
    description: "Pertandingan sengit lawan kelas sebelah, akhirnya menang dramatis lewat adu penalti."
  },
  {
    id: 2,
    title: "Bukber Angkatan",
    category: "Acara",
    date: "20 Mar 2024",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
    description: "Makan-makan bareng di rumah ketua kelas. Kenyang enggak, ketawanya iya."
  },
  {
    id: 3,
    title: "Study Tour Bali",
    category: "Trip",
    date: "5 Feb 2024",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop",
    description: "Foto wajib di Tanah Lot rame-rame satu kelas. Panas tapi seru banget!"
  },
  {
    id: 4,
    title: "Praktek Kimia",
    category: "Sekolah",
    date: "10 Jan 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
    description: "Niatnya bikin sabun, malah jadi busa satu laboratorium. Momen panik tapi lucu."
  },
];
