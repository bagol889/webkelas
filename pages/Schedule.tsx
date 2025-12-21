import React, { useState, useEffect } from 'react';
import { SCHEDULE } from '../constants';
import { BookOpen, UserCheck, Clock, CheckCircle2, Sparkles } from 'lucide-react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("Senin");

  useEffect(() => {
    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
    const availableDays = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    
    if (availableDays.includes(today)) {
      setActiveDay(today);
    } else {
      setActiveDay("Senin");
    }
  }, []);

  const currentSchedule = SCHEDULE.find(s => s.day === activeDay);
  const isWeekend = activeDay === "Sabtu" || activeDay === "Minggu";

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-white mb-4">Jadwal & Piket</h2>
        <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-8"></div>

        {/* TAB NAVIGASI */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SCHEDULE.map((item) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeDay === item.day
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-900/40 scale-105 transform'
                  : 'bg-[#111827] text-slate-400 border border-white/5 hover:bg-[#1f2937] hover:text-white'
              }`}
            >
              {item.day}
            </button>
          ))}
        </div>

        {/* KONTEN */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          
          {/* KARTU KIRI (Mapel / To-Do List) */}
          <div className={`bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all ${isWeekend ? 'hover:border-purple-500/30' : ''}`}>
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 ${isWeekend ? 'bg-purple-500/10' : 'bg-blue-500/10'}`}></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${isWeekend ? 'bg-purple-500/20 text-purple-400 shadow-purple-900/20' : 'bg-blue-500/20 text-blue-400 shadow-blue-900/20'}`}>
                {isWeekend ? <CheckCircle2 className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{isWeekend ? "To-Do List" : "Mata Pelajaran"}</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider">{isWeekend ? "Weekend Vibes" : activeDay}</p>
              </div>
            </div>
            
            <div className="space-y-3 relative z-10">
              {currentSchedule?.subjects.map((sub, idx) => (
                <div key={idx} className={`flex items-start gap-4 p-3 rounded-xl bg-[#020617]/40 border border-white/5 transition-all group-hover:translate-x-1 ${isWeekend ? 'hover:bg-purple-500/10 hover:border-purple-500/20' : 'hover:bg-blue-500/10 hover:border-blue-500/20'}`}>
                  <span className={`flex shrink-0 items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${isWeekend ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>{idx + 1}</span>
                  {/* Gunakan whitespace-normal agar teks panjang turun ke bawah */}
                  <span className="text-slate-200 font-medium text-sm md:text-base whitespace-normal leading-relaxed">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* KARTU KANAN (Piket / Vibe Check) */}
          <div className={`bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group transition-all ${isWeekend ? 'hover:border-green-500/30' : 'hover:border-red-500/30'}`}>
             <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 ${isWeekend ? 'bg-green-500/10' : 'bg-red-500/10'}`}></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${isWeekend ? 'bg-green-500/20 text-green-400 shadow-green-900/20' : 'bg-red-500/20 text-red-400 shadow-red-900/20'}`}>
                {isWeekend ? <Sparkles className="w-6 h-6" /> : <UserCheck className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{isWeekend ? "Vibe Check" : "Petugas Piket"}</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider">{isWeekend ? "Status Terkini" : "Tim Kebersihan"}</p>
              </div>
            </div>

            {/* PERUBAHAN PENTING DI SINI:
                - Jika Weekend: Pakai 1 kolom (grid-cols-1) agar lebar.
                - Jika Biasa: Pakai 2 kolom (grid-cols-2) untuk nama piket. 
            */}
            <div className={`grid ${isWeekend ? 'grid-cols-1' : 'grid-cols-2'} gap-3 relative z-10`}>
              {currentSchedule?.picket.map((name, idx) => (
                <div key={idx} className={`flex items-center gap-3 p-3 rounded-xl bg-[#020617]/40 border border-white/5 transition-all ${isWeekend ? 'hover:bg-green-500/10 hover:border-green-500/20' : 'hover:bg-red-500/10 hover:border-red-500/20'}`}>
                  <div className={`w-2 h-2 rounded-full shrink-0 shadow-[0_0_8px] ${isWeekend ? 'bg-green-500 shadow-green-500' : 'bg-red-500 shadow-red-500'}`}></div>
                  {/* Hapus 'truncate' dan ganti 'whitespace-normal' agar teks tidak dipotong */}
                  <span className="text-slate-200 text-sm font-medium whitespace-normal leading-tight">{name}</span>
                </div>
              ))}
            </div>
            
            {/* Note (Hanya Muncul Senin-Jumat) */}
            {!isWeekend && (
              <div className="mt-8 p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl flex gap-3 items-start">
                <Clock className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-yellow-500 font-bold block mb-1">Pengingat:</span>
                  Datang 15 menit lebih awal untuk membersihkan kelas.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Schedule;

