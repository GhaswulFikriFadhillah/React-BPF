import React from 'react';

export default function NotFound401() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-9xl font-extrabold text-red-700">404</h1>
        <p className="mt-4 text-xl text-gray-700">Unauthorized</p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

