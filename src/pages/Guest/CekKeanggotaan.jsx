import React, { useState } from "react";
import members from "/react-2tia-ghaswul/fmi-app/src/assets/member.json";
import HeroAbout from "/react-2tia-ghaswul/fmi-app/src/assets/bg-long.jpg";
import { FaCrown, FaUserAlt, FaUserCheck, FaTimesCircle } from "react-icons/fa";

const memberStyles = {
  silver: {
    icon: <FaUserAlt className="text-gray-400" />,
    color: "text-gray-600",
    bg: "bg-gray-100",
  },
  gold: {
    icon: <FaCrown className="text-yellow-500" />,
    color: "text-yellow-700",
    bg: "bg-yellow-100",
  },
  platinum: {
    icon: <FaUserCheck className="text-blue-500" />,
    color: "text-blue-700",
    bg: "bg-blue-100",
  },
};

export default function CekMember() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = () => {
    setError("");
    setResult(null);

    // Validasi
    if (!email) {
      setError("Email tidak boleh kosong.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Format email tidak valid.");
      return;
    }

    // Cek keanggotaan
    const found = members.find(
      (m) => m.email.toLowerCase() === email.toLowerCase()
    );
    setResult(found || false);
  };

  return (
    <div className="py-10 bg-white">
      {/* Hero Section */}
      <div
        className="h-[180px] md:h-[280px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center relative"
        style={{ backgroundImage: `url(${HeroAbout})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-4xl md:text-6xl font-Jost-bold z-10">
          Cek Keanggotaan
        </h1>
        <p className="relative mt-2 text-sm md:text-base font-Jost-regular z-10">
          Home / Cek Member
        </p>
      </div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-Jost-bold mb-4 text-center">
          Cek Keanggotaan
        </h2>
        <input
          type="email"
          placeholder="Masukkan email Anda"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleCheck}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Cek Sekarang
        </button>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 font-Jost-regular mt-3">{error}</p>
        )}

        {/* Result */}
        {result && typeof result === "object" && (
          <div
            className={`mt-5 p-4 rounded-md flex items-center space-x-3 ${
              memberStyles[result.tipe_member].bg
            }`}
          >
            {memberStyles[result.tipe_member].icon}
            <div className={`${memberStyles[result.tipe_member].color}`}>
              <p className="font-Jost-bold">
                🧾 Selamat datang, {result.nama}! Anda adalah member{" "}
                <span className="capitalize font-bold">
                  {result.tipe_member}
                </span>
                .
              </p>
            </div>
          </div>
        )}

        {/* Not Found */}
        {result === false && (
          <div className="mt-5 p-4 bg-red-100 text-red-700 rounded-md flex items-center space-x-3">
            <FaTimesCircle className="text-red-500 font-Jost-regular" />
            <p>❌ Email tidak terdaftar sebagai member.</p>
          </div>
        )}
      </div>
    </div>
  );
}
