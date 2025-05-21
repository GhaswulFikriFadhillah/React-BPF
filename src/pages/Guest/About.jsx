import React from "react";
import HeroAbout from "/react-2tia-ghaswul/fmi-app/src/assets/bg-long.jpg"; // Ganti dengan gambar background atas
import TentangImage from "/react-2tia-ghaswul/fmi-app/src/assets/Makanan.jpg"; // Ganti dengan gambar konten bawah

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[180px] md:h-[280px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center relative"
        style={{
          backgroundImage: `url(${HeroAbout})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-6xl font-Jost-bold z-10">About Us</h1>
        <p className="relative mt-2 text-base font-Jost-regular z-10">
          Home / About
        </p>
      </div>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={TentangImage}
            alt="Tentang Kami"
            className="rounded-xl shadow-xl w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <p className="text-sm uppercase tracking-wider text-green-500 font-Jost-regular mb-2">
            Penawaran Eksklusif
          </p>
          <h2 className="text-3xl md:text-4xl font-Jost-bold text-[#2b2c34] mb-4">
            Nikmati Pengalaman Kuliner Terbaik <br /> Di Tempat Kami
          </h2>
          <p className="text-[#6b7280] font-Jost-regular mb-4 ">
            Kami hadir untuk merayakan kekayaan kuliner Nusantara yang begitu
            beragam dan sarat makna. Dari Sabang hingga Merauke, setiap daerah
            memiliki cita rasa unik yang tercermin dalam resep turun-temurun—dan
            itulah yang kami bawa ke meja Anda. Dengan semangat melestarikan
            warisan kuliner Indonesia, kami menyajikan berbagai hidangan khas
            daerah seperti rendang dari Sumatera Barat, gudeg dari Yogyakarta,
            coto Makassar, hingga papeda dari Papua. Semua dibuat dengan bahan
            pilihan dan rempah-rempah asli yang menjadi jantung dari masakan
            Indonesia. Kami percaya bahwa makanan tidak hanya soal rasa, tapi
            juga tentang cerita dan budaya. Karena itu, suasana restoran kami
            dirancang agar menciptakan pengalaman makan yang hangat, akrab, dan
            penuh nostalgia. Setiap kunjungan bukan sekadar menyantap makanan,
            tetapi juga menjelajahi kekayaan rasa Indonesia dalam suasana yang
            nyaman dan bersahaja. Datang dan rasakan sensasi kuliner Nusantara
            yang otentik. Kami siap menyambut Anda dengan rasa yang menggugah
            dan pengalaman yang membuat Anda ingin kembali lagi.
          </p>
        </div>
      </section>
    </div>
  );
}
