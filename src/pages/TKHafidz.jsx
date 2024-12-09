import React from 'react';

function TKHafidz() {
  const programs = [
    "Privat Al-Quran /Iqro sesuai dengan makhrijul huruf",
    "Dhuha time",
    "Hafal Hadist & doa unggulan harian",
    "Siroh Nabi",
    "Pembentukan Akhlak",
    "Belajar menyenangkan sesuai tema",
    "Penggunaan teknologi sebagai peningkatan pengalaman belajar anak",
    "Tumbuh sehat sesuai perkembangan anak",
    "Program \"aku mandiri dan berani\""
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        TK Hafidz Auladi
      </h1>

      {/* Program Unggulan */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-sky-600 mb-6">
          Program Unggulan
        </h2>
        <ul className="space-y-4">
          {programs.map((program, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-600 mr-3">
                {index + 1}
              </span>
              <span className="text-gray-700">{program}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Schedule */}
      <div className="bg-sky-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold text-sky-600 mb-6">
          Jadwal Belajar
        </h2>
        <div className="space-y-2 text-gray-700">
          <p>Senin - Kamis: 07.30 - 11.30</p>
          <p>Jumat: 07.30 - 10.00</p>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-sky-600 mb-6">
          Biaya Pendidikan
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">Uang Pangkal:</h3>
            <p>Rp. 1.500.000</p>
            <p className="text-sm text-gray-500">
              (bisa dicicil, dapat diskon bila diawal pendaftaran)
            </p>
          </div>
          <div>
            <h3 className="font-semibold">SPP Bulanan:</h3>
            <p>Rp. 120.000</p>
          </div>
          <div>
            <h3 className="font-semibold">Menu Catering:</h3>
            <p>Rp. 80.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TKHafidz;