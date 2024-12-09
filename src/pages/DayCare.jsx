import React from 'react';

function DayCare() {
  const features = [
    "Pengasuhan yang penuh kasih sayang",
    "Aktivitas edukatif sesuai usia",
    "Pemantauan tumbuh kembang",
    "Menu makanan sehat",
    "Lingkungan yang aman dan nyaman",
    "Laporan harian untuk orang tua"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Day Care Auladi
      </h1>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-sky-600 mb-6">
          Layanan Kami
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 bg-sky-50 p-4 rounded-lg">
              <span className="flex-shrink-0 w-6 h-6 bg-sky-500 text-white rounded-full flex items-center justify-center">
                ✓
              </span>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule */}
      <div className="bg-sky-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold text-sky-600 mb-6">
          Jadwal Layanan
        </h2>
        <div className="space-y-2 text-gray-700">
          <p>Senin - Jumat: 07.00 - 17.00</p>
          <p>Sabtu: 07.00 - 15.00</p>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-sky-600 mb-6">
          Biaya Layanan
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">Biaya Pendaftaran:</h3>
            <p>Rp. 500.000 (one-time)</p>
          </div>
          <div>
            <h3 className="font-semibold">Biaya Bulanan:</h3>
            <p>Full Day: Rp. 1.500.000</p>
            <p>Half Day: Rp. 1.000.000</p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * Biaya sudah termasuk makan dan snack
          </p>
        </div>
      </div>
    </div>
  );
}

export default DayCare;