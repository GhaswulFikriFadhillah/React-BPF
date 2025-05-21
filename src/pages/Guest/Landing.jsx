import React from "react";
import Makanan from "/react-2tia-ghaswul/fmi-app/src/assets/Makanan.jpg";

export default function Landing() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-[#f3fbfd]">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-Jost-bold text-[#2b2c34] leading-tight">
          Rasakan Sekali, <br /> Ingat Selamanya
        </h1>
        <p className="mt-4 text-[#6b7280] max-w-md font-Jost-regular">
          Kami menyajikan berbagai variasi makanan lezat yang menggugah selera,
          dibuat dari bahan segar dan berkualitas tinggi. Rasakan pengalaman
          kuliner terbaik bersama kami.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-Jost-bold rounded hover:bg-green-600 transition-all duration-300">
          Pesan Sekarang
        </button>
      </div>
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <div className="rounded-t-full overflow-hidden shadow-xl">
          <img
            src={Makanan}
            alt="Makanan Hero"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
