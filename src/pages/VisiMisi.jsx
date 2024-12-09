import React from 'react';

function VisiMisi() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Visi & Misi
      </h1>
      
      <div className="space-y-12">
        {/* Visi Section */}
        <div>
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">Visi</h2>
          <p className="text-gray-700">
            Menjadi lembaga pendidikan Islam terpadu yang unggul dalam membentuk generasi Qurani 
            yang berakhlak mulia, cerdas, kreatif, dan mandiri.
          </p>
        </div>

        {/* Misi Section */}
        <div>
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">Misi</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-600 mr-3">1</span>
              <span>Menyelenggarakan pendidikan yang mengintegrasikan nilai-nilai Islam dalam pembelajaran</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-600 mr-3">2</span>
              <span>Membangun karakter Islami dan akhlak mulia sejak dini</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-600 mr-3">3</span>
              <span>Mengembangkan potensi anak melalui metode pembelajaran yang kreatif dan inovatif</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-600 mr-3">4</span>
              <span>Memfasilitasi tumbuh kembang anak sesuai dengan tahapan perkembangannya</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;