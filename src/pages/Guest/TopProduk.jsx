import React from "react";
import { FaStar } from 'react-icons/fa';
import HeroAbout from "/react-2tia-ghaswul/fmi-app/src/assets/bg-long.jpg";
import Rendang from "/react-2tia-ghaswul/fmi-app/src/assets/rendang.jpg";
import Gudeg from "/react-2tia-ghaswul/fmi-app/src/assets/gudeg.jpg";
import Pempek from "/react-2tia-ghaswul/fmi-app/src/assets/pempek.jpg";
import SateLilit from "/react-2tia-ghaswul/fmi-app/src/assets/satelilit.jpg";
import Rawon from "/react-2tia-ghaswul/fmi-app/src/assets/rawon.jpg";
import SotoBetawi from "/react-2tia-ghaswul/fmi-app/src/assets/sotobetawi.jpg";
import Papeda from "/react-2tia-ghaswul/fmi-app/src/assets/papeda.jpg";
import Tinutuan from "/react-2tia-ghaswul/fmi-app/src/assets/tinutuan.jpg";

export default function About() {
  const makananData = [
    {
      nama: "Rendang",
      asal: "Sumatera Barat",
      img: Rendang,
      rating: 4.8,
      harga: "Rp 35.000",
    },
    {
      nama: "Gudeg",
      asal: "Yogyakarta",
      img: Gudeg,
      rating: 4.6,
      harga: "Rp 25.000",
    },
    {
      nama: "Pempek",
      asal: "Palembang",
      img: Pempek,
      rating: 4.7,
      harga: "Rp 20.000",
    },
    {
      nama: "Sate Lilit",
      asal: "Bali",
      img: SateLilit,
      rating: 4.5,
      harga: "Rp 30.000",
    },
    {
      nama: "Rawon",
      asal: "Jawa Timur",
      img: Rawon,
      rating: 4.6,
      harga: "Rp 28.000",
    },
    {
      nama: "Soto Betawi",
      asal: "Jakarta",
      img: SotoBetawi,
      rating: 4.4,
      harga: "Rp 27.000",
    },
    {
      nama: "Papeda",
      asal: "Papua",
      img: Papeda,
      rating: 4.2,
      harga: "Rp 22.000",
    },
    {
      nama: "Tinutuan",
      asal: "Manado",
      img: Tinutuan,
      rating: 4.3,
      harga: "Rp 23.000",
    }
  ];

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
        <h1 className="relative text-6xl font-Jost-bold z-10">Top Produk</h1>
        <p className="relative mt-2 text-base font-Jost-regular z-10">
          Home / Top Produk
        </p>
      </div>

      {/* Product Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-Jost-bold text-center mb-12">
          Makanan Tradisional Terpopuler
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {makananData.map((makanan, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105"
            >
              <img
                src={makanan.img}
                alt={makanan.nama}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-green-600 font-Jost-regular">
                  {makanan.asal}
                </p>
                <h3 className="text-lg font-Jost-bold mt-1">{makanan.nama}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                  <span>{makanan.harga}</span>
                  <span className="text-yellow-500 font-Jost-regular">
                    <FaStar/> {makanan.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
