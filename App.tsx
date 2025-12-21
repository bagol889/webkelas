import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import { CLASS_DATA, TEACHER, STUDENTS, STATS, ORGANIZATION } from './constants'; 
import { Quote, Sparkles, Instagram, X } from 'lucide-react'; 

const App: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const openLightbox = (img: string, name: string) => {
    setSelectedImg(img);
    setSelectedName(name);
  };

  // Komponen Card (Sesuai Request Sebelumnya)
  const OrgCard = ({ name, role, motto }: { name: string, role: string, motto?: string }) => (
    <div className="bg-[#111827]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-5 md:p-6 flex flex-col items-center text-center h-full transition-all hover:bg-[#111827]/80 group">
      <span className="text-red-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3">{role}</span>
      <h3 className="text-white font-bold text-sm md:text-lg mb-3 leading-tight group-hover:text-red-500 transition-colors">{name}</h3>
      <p className="text-slate-400 text-[10px] md:text-xs italic leading-relaxed">
        "{motto || "Tulisan Bagus Tapi Jarang Nulis"}"
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-red-500/30">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative w-full aspect-video flex items-center justify-center overflow-hidden mt-16 md:mt-20 scroll-mt-24 cursor-pointer"
        style={{ backgroundImage: `url("${CLASS_DATA.classPhoto}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        onClick={() => openLightbox(CLASS_DATA.classPhoto, "Foto Bersama")}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#020617] to-transparent"></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-2 drop-shadow-2xl">{CLASS_DATA.name}</h1>
          <p className="text-lg md:text-2xl text-slate-200 font-medium uppercase tracking-[0.3em]">{CLASS_DATA.schoolName}</p>
        </div>
      </section>

      {/* Filosofi & Stats */}
      <section className="py-10 bg-[#020617] text-center px-6">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-red-500/10 text-red-400 border border-red-500/20 mb-8 uppercase">
          <Sparkles className="w-4 h-4 mr-2" /> {CLASS_DATA.generation}
        </span>
        <div className="max-w-4xl mx-auto bg-[#0f172a]/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl mb-12">
            <h2 className="text-red-500 font-bold uppercase tracking-widest text-lg mb-4">Filosofi KONFFIDEN</h2>
            <p className="text-slate-200 italic font-serif text-xl md:text-2xl mb-6 leading-relaxed">"Kings Of Network Focus for Future Intelligent Digital Era Networking"</p>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">{CLASS_DATA.description}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-4 gap-2 md:gap-6 px-4">
          {STATS.map((stat, index) => (
            <div key={index} className="flex-1 bg-[#0f172a]/50 backdrop-blur-md rounded-2xl md:rounded-3xl p-2 md:p-8 border border-white/5 text-center flex flex-col justify-center min-h-[90px] md:min-h-[160px]">
              <h4 className="text-lg md:text-5xl font-bold text-red-600 mb-1">{stat.value}</h4>
              <p className="text-[7px] md:text-sm text-slate-300 font-bold uppercase tracking-widest leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wali Kelas Section */}
      <section id="teacher" className="py-8 bg-[#020617] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-950/30 to-red-950/30 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 border border-white/5 flex flex-col md:flex-row items-center gap-10">
            <div className="w-36 md:w-48 shrink-0 cursor-pointer" onClick={() => openLightbox(TEACHER.photo, TEACHER.name)}>
              <img src={TEACHER.photo} className="rounded-2xl w-full aspect-[3/4] object-cover border-4 border-white/10" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Wali Kelas Kami</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">{TEACHER.name}</h2>
              <p className="text-slate-300 italic text-sm md:text-lg leading-relaxed">"{TEACHER.motto}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* STRUKTUR ORGANISASI */}
      <section id="organization" className="py-20 bg-[#020617] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-white mb-4">Struktur Organisasi</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-16"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <OrgCard name={ORGANIZATION.ketua.name} role={ORGANIZATION.ketua.role} motto={ORGANIZATION.ketua.motto} />
            <OrgCard name={ORGANIZATION.wakil.name} role={ORGANIZATION.wakil.role} motto={ORGANIZATION.wakil.motto} />
            
            {ORGANIZATION.sekretaris.map((s, i) => (
              <OrgCard key={`sek-${i}`} name={s.name} role="Sekretaris" motto={s.motto} />
            ))}
            
            {ORGANIZATION.bendahara.map((b, i) => (
              <OrgCard key={`ben-${i}`} name={b.name} role="Bendahara" motto={b.motto} />
            ))}
            
            {ORGANIZATION.seksi.map((seksi) => 
              seksi.names.map((name, idx) => (
                <OrgCard 
                  key={`${seksi.label}-${idx}`} 
                  name={name} 
                  role={seksi.label} 
                  motto={seksi.mottos ? seksi.mottos[idx] : undefined} 
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* MURID SECTION */}
      <section id="students" className="py-16 bg-[#020617] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">Mengenal Siswa Kami</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-12"></div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {STUDENTS.map((student) => (
              <StudentCard key={student.id} student={student} onImageClick={() => openLightbox(student.photo, student.name)} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

      {/* Lightbox Overlay */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white"><X className="w-8 h-8" /></button>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-6 text-center">
              <h3 className="text-xl md:text-3xl font-serif font-bold text-white tracking-wide">{selectedName}</h3>
              <div className="w-12 h-1 bg-red-600 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
