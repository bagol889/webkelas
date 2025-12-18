
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import { CLASS_DATA, TEACHER, STUDENTS } from './constants';
import { getDailyMotivation } from './services/gemini';
import { Users, BookOpen, Quote, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [motivation, setMotivation] = useState<string>("Memuat inspirasi hari ini...");

  useEffect(() => {
    const fetchMotivation = async () => {
      const msg = await getDailyMotivation(CLASS_DATA.name);
      setMotivation(msg);
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
      {/* Background Clash Elements */}
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
          <p className="max-w-xl mx-auto text-sm md:text-base text-slate-300 leading-relaxed font-medium mb-8">
            {CLASS_DATA.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button 
              onClick={scrollToStudents}
              className="px-6 py-3 bg-red-600 text-white text-xs font-bold rounded-lg shadow-lg shadow-red-600/20 hover:bg-red-500 transition-all active:scale-95"
            >
              Daftar Siswa ({STUDENTS.length})
            </button>
            <div className="flex items-center px-4 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-sm">
              <Quote className="w-3.5 h-3.5 text-blue-400 mr-2.5 shrink-0" />
              <p className="text-[11px] font-medium text-slate-200 italic leading-snug max-w-[200px] text-left">
                {motivation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wali Kelas Section - Dark/Red Theme */}
      <section id="teacher" className="py-12 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-950/40 to-red-950/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/5 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-32 md:w-40 shrink-0">
               <img 
                src={TEACHER.photo} 
                alt={TEACHER.name} 
                className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl border-4 border-white/10"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Wali Kelas Kami</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">{TEACHER.name}</h2>
              <p className="text-slate-300 italic text-sm md:text-base leading-relaxed">
                "{TEACHER.motto}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Students Section - Dark Grid */}
      <section id="students" className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Mengenal Siswa Kami</h2>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
              Total {STUDENTS.length} Siswa Berprestasi
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-3 md:gap-4">
            {STUDENTS.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Solid Dark Blue */}
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
