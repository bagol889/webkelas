import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import { CLASS_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // LOGIKA SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      // PERBAIKAN: 'border-b' dan 'border-white/10' DIHAPUS agar tidak ada garis putih
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-[#020617]/80 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* BAGIAN KIRI: LOGO & TEKS BERUBAH */}
          <div className="flex items-center gap-3">
            
            {/* 1. LOGO (Grid Stack) */}
            <div className="relative w-10 h-10 grid grid-cols-1 grid-rows-1">
              {/* Logo Sekolah (Default) */}
              <img 
                src={CLASS_DATA.schoolLogo} 
                alt="School Logo" 
                className={`col-start-1 row-start-1 w-full h-full object-contain transition-all duration-500 ease-in-out ${
                  isScrolled ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                }`}
              />
              {/* Logo Kelas (Saat Scroll) - Bulat */}
              <img 
                src={CLASS_DATA.logo} 
                alt="Class Logo" 
                className={`col-start-1 row-start-1 w-full h-full object-contain rounded-full transition-all duration-500 ease-in-out ${
                  isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              />
            </div>

            {/* 2. TEKS (Grid Stack & Font Sans-Serif) */}
            <div className="grid grid-cols-1 grid-rows-1 items-center ml-1">
              
              {/* STATE 1: NAMA SEKOLAH & EST (Muncul saat di atas) */}
              <div className={`col-start-1 row-start-1 flex flex-col transition-all duration-500 ease-in-out ${
                  isScrolled ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}>
                <span className="font-bold text-lg tracking-wider text-white leading-tight">
                  {CLASS_DATA.schoolName}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-slate-400 font-medium uppercase">
                  EST. 2013
                </span>
              </div>
              
              {/* STATE 2: NAMA KELAS & ANGKATAN (Muncul saat scroll) */}
              <div className={`col-start-1 row-start-1 flex flex-col transition-all duration-500 ease-in-out ${
                  isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                <span className="font-bold text-lg tracking-wider text-white leading-tight">
                  {CLASS_DATA.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-red-400 font-medium uppercase">
                  {CLASS_DATA.generation}
                </span>
              </div>

            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#hero" className="hover:text-red-400 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-200">Beranda</a>
              <a href="#teacher" className="hover:text-red-400 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-200">Wali Kelas</a>
              <a href="#students" className="hover:text-red-400 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-200">Siswa</a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#020617] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Beranda</a>
            <a href="#teacher" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wali Kelas</a>
            <a href="#students" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Siswa</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
