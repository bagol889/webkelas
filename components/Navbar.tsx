
import React from 'react';
import { CLASS_DATA } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <img 
              src={CLASS_DATA.schoolLogo} 
              alt="Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-inner border-2 border-white/20"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase leading-none">
                {CLASS_DATA.schoolName}
              </h1>
              <p className="text-[10px] sm:text-xs font-medium text-slate-400 tracking-widest mt-0.5">EST. 2013</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-semibold text-slate-300 hover:text-red-400 transition-colors uppercase tracking-widest">Beranda</a>
            <a href="#teacher" className="text-sm font-semibold text-slate-300 hover:text-red-400 transition-colors uppercase tracking-widest">Wali Kelas</a>
            <a href="#students" className="text-sm font-semibold text-slate-300 hover:text-red-400 transition-colors uppercase tracking-widest">Anggota</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
