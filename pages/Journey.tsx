import React from 'react';

const Journey = () => {
  const journeys = [
    { year: '2023: Masih Polos', desc: 'Masa-masa MPLS online. Kenalan lewat layar HP, profil masih pake foto anime semua.' },
    { year: '2024: Era Kabel', desc: 'Pertama kali pegang alat crimping. Banyak yang luka tapi tetap ketawa demi nilai praktek.' },
    { year: '2025: Puncak Kompak', desc: 'Study tour yang gak terlupakan. Satu bus nyanyi bareng sampe serak, momen paling solid.' },
    { year: '2026: Sayonara', desc: 'Hari perpisahan. Air mata tumpah tapi doa sukses terucap buat semua rekan pejuang.' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-2">The Journey</h2>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-12"></div>

      <div className="relative max-w-3xl w-full">
        {/* Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {journeys.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className="absolute left-[16px] md:left-1/2 top-0 w-2.5 h-2.5 bg-red-500 rounded-full md:-translate-x-1/2 md:translate-y-6 shadow-[0_0_10px_rgba(239,68,68,0.5)] z-10"></div>

              <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                <div className="bg-[#111827]/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-red-500/30 transition-all">
                  <h3 className="text-white font-bold text-lg mb-2">{item.year}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Journey;

