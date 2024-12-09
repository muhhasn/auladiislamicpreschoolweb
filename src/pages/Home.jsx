import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gradient-to-b from-sky-100 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Auladi Islamic Preschool membuka pendaftaran untuk:
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/tk-hafidz')}
              className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-600 transition-colors"
            >
              TK Hafidz Auladi
            </button>
            <button
              onClick={() => navigate('/day-care')}
              className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-600 transition-colors"
            >
              Day Care
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;