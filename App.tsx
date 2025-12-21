import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import { CLASS_DATA, TEACHER, STUDENTS } from './constants';
import { getDailyMotivation } from './services/gemini';
import { Quote, Sparkles, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [motivation, setMotivation] = useState<string>("Memuat inspirasi hari ini...");
  const INSTAGRAM_URL = "https://www.instagram.com/12tjktvibes"; 

  useEffect(() => {
    const fetchMotivation = async () => {
      try {
        const msg = await getDailyMotivation(CLASS_DATA.name);
        setMotivation(msg);
      } catch (error) {
        setMotivation("Kebersamaan adalah kunci kesuksesan kita.");
      }
    };
    fetchMotivation();
  }, []);

  const scrollToStudents = () => {
    const element = document.getElementById('students');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-red-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-blue-900/40 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-red-900/40 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(15,23,42,0)_0%,rgba(2,6,23,1)_100%)]"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-red-500/10 text-red-400 border border-red-500/20 mb-4 uppercase">
            <Sparkles className="w-3 h-3 mr-1.5" />
            {CLASS_DATA.generation}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            {CLASS_DATA.name}
          </h1>

          {/* Foto Bersama */}
          <div className="max-w-4xl mx-auto my-8 px-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src={CLASS_DATA.classPhoto} 
                alt="Foto Bersama" 
                className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover aspect-video md:aspect-auto"
              />
            </div>
          </div>

          <p className="max-w-xl mx-auto text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-8">
            {CLASS_DATA.description}
          </p>
          
          {/* Tombol-tombol */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={scrollToStudents} className="px-6 py-3 bg-red-600 text-white text-xs font-bold rounded-lg shadow-lg shadow-red-600/20 hover:bg-red-500 transition-all active:scale-95 w-full sm:w-auto">
              Daftar Siswa ({STUDENTS.length})
            </button>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:border-pink-500/30 backdrop-blur-md rounded-lg shadow-sm transition-all active:scale-95 w-full sm:w-auto">
              <Instagram className="w-4 h-4 text-slate-300 group-hover:text-pink-400 mr-2 transition-colors" />
              <span className="text-xs font-bold tracking-widest text-white uppercase">Instagram</span>
            </a>
            <div className="flex items-center px-4 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-sm w-full sm:w-auto justify-center sm:justify-start">
              <Quote className="w-3.5 h-3.5 text-blue-400 mr-2.5 shrink-0" />
              <p className="text-[11px] font-medium text-slate-200 italic leading-snug max-w-[200px] text-left">{motivation}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="teacher" className="py-12 bg-transparent text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <img src={TEACHER.photo} alt={TEACHER.name} className="w-40 h-52 object-cover rounded-2xl mb-4 border-4 border-white/10" />
          <h2 className="text-2xl font-bold">{TEACHER.name}</h2>
          <p className="text-slate-400 italic">"{TEACHER.motto}"</p>
        </div>
      </section>

      <section id="students" className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Mengenal Siswa Kami</h2>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Total {STUDENTS.length} Siswa Berprestasi</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-3 md:gap-4">
            {STUDENTS.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-white/5 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
            &copy; {new Date().getFullYear()} {CLASS_DATA.name} &bull; {CLASS_DATA.schoolName}
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="w-1 h-1 bg-red-600 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-1 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
