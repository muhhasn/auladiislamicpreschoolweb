import React from 'react';

function Gallery() {
  const images = [
    { id: 1, src: '/images/placeholder1.jpg', alt: 'Kegiatan Belajar' },
    { id: 2, src: '/images/placeholder2.jpg', alt: 'Aktivitas Mengaji' },
    { id: 3, src: '/images/placeholder3.jpg', alt: 'Bermain Bersama' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Galeri Kegiatan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-sky-100">
            <div className="w-full h-48 flex items-center justify-center text-sky-500">
              [Foto Kegiatan]
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;