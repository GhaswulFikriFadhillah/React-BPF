import React from "react";
import HeroAbout from "/react-2tia-ghaswul/fmi-app/src/assets/bg-long.jpg"; 
import testimonials from "/react-2tia-ghaswul/fmi-app/src/assets/testimoniData.json"; 

export default function Testimoni() {
  return (
    <div className="py-10 bg-white">
      {/* Hero Section */}
      <div
        className="h-[180px] md:h-[280px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center relative"
        style={{ backgroundImage: `url(${HeroAbout})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-4xl md:text-6xl font-Jost-bold z-10">Ulasan Pengguna</h1>
        <p className="relative mt-2 text-sm md:text-base font-Jost-regular z-10">
          Home / Testimoni
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-10">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-gray-100 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center space-x-4 mb-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h4 className="text-lg font-Jost-bold">{t.name}</h4>
            </div>
            <p className="text-sm font-Jost-regular text-gray-700">{t.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
