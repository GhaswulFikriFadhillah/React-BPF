import React from "react";
import { FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2B2D42] text-[#F1F1F1] py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand + Description */}
        <div>
          <div className="flex items-center mb-4 space-x-2">
            <h1 className="text-5xl font-Jost-bold">
              <span className="text-white">Se</span>
              <span className="text-green-500">dap</span>
              <span className="text-white">.</span>
            </h1>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-4 font-Jost-regular">
            Sedap menghadirkan pengalaman kuliner terbaik dengan bahan segar dan
            resep autentik. Nikmati rasa khas nusantara setiap saat.
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#3E4555] flex items-center justify-center hover:bg-green-500 transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#3E4555] flex items-center justify-center hover:bg-green-500 transition"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#3E4555] flex items-center justify-center hover:bg-green-500 transition"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#3E4555] flex items-center justify-center hover:bg-green-500 transition"
            >
              <FaGooglePlusG size={14} />
            </a>
          </div>
        </div>

        {/* Layanan Kami */}
        <div>
          <h4 className="text-white font-Jost-regular text-lg mb-4">
            Layanan Kami
          </h4>
          <ul className="space-y-2 text-sm text-gray-300 font-Jost-regular">
            <li>Makanan Tradisional Lezat</li>
            <li>Layanan Antar Gratis</li>
            <li>Pesan Online Mudah</li>
            <li>Pilihan Menu Sehat</li>
            <li>Promo Spesial Mingguan</li>
          </ul>
        </div>

        {/* Tautan Penting */}
        <div>
          <h4 className="text-white font-Jost-regular text-lg mb-4">
            Tautan Penting
          </h4>
          <ul className="space-y-2 text-sm text-gray-300 font-Jost-regular">
            <li>Tentang Kami</li>
            <li>Menu Favorit</li>
            <li>Testimoni Pelanggan</li>
            <li>Layanan Kami</li>
            <li>Paket Hemat</li>
          </ul>
        </div>

        {/* Kontak Kami */}
        <div>
          <h4 className="text-white font-Jost-regular text-lg mb-4">
            Kontak Kami
          </h4>
          <ul className="space-y-4 text-sm text-gray-300 font-Jost-regular">
            <li className="flex items-start space-x-2">
              <FiMapPin className="mt-1" />
              <span>Jl. Kenanga No. 12, Yogyakarta, Indonesia</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone />
              <span>+62 812 3456 7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiSend />
              <span>sedap-id@mail.id</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 font-Jost-regular">
        Copyright © 2025 Sedap. All rights reserved.
      </div>
    </footer>
  );
}
