import React from 'react';

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Hubungi Kami
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-sky-600 mb-4">Informasi Kontak</h2>
            <div className="space-y-3 text-gray-700">
              <p>📍 Jl. Contoh No. 123, Kota</p>
              <p>📱 +62 812-3456-7890</p>
              <p>✉️ info@auladipreschool.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-sky-600 mb-4">Jam Operasional</h2>
            <div className="space-y-2 text-gray-700">
              <p>Senin - Kamis: 07.30 - 11.30</p>
              <p>Jumat: 07.30 - 10.00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-sky-600 mb-6">Kirim Pesan</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Nama</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Pesan</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-sky-500 focus:border-sky-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;