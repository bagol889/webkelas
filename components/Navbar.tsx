import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import { Link, useLocation } from 'react-router-dom'; 
import { CLASS_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavClass = (path: string, isMobile: boolean = false) => {
    const isActive = location.pathname === path;
    
    const baseStyle = isMobile 
      ? "block w-full px-6 py-3 rounded-xl text-base font-bold transition-all duration-300 text-left" 
      : "px-5 py-2 rounded-full text-sm font-bold transition-all duration-500 whitespace-nowrap";

    const activeStyle = isActive 
      ? "bg-red-600 text-white shadow-lg shadow-red-900/40" 
      : "text-slate-300 hover:text-white hover:bg-white/10";

    return `${baseStyle} ${activeStyle}`;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#020617]/95 backdrop-blur-xl py-3 shadow-lg' : 'bg-[#020617]/50 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="relative w-10 h-10 grid grid-cols-1 grid-rows-1">
              <img src={CLASS_DATA.schoolLogo} className={`col-start-1 row-start-1 w-full h-full object-contain transition-all duration-500 ${isScrolled ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} />
              <img src={CLASS_DATA.logo} className={`col-start-1 row-start-1 w-full h-full object-contain rounded-full transition-all duration-500 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
            </div>
            <div className="relative h-10 flex flex-col justify-center overflow-hidden">
              <div className={`transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
                <span className="font-bold text-lg text-white leading-tight block">{CLASS_DATA.schoolName}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">EST. 2013</span>
              </div>
              <div className={`absolute inset-0 transition-all duration-500 flex flex-col justify-center ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
                <span className="font-bold text-lg text-white leading-tight block">{CLASS_DATA.name}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">{CLASS_DATA.schoolName}</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={getNavClass('/')}>Beranda</Link>
            <Link to="/students" className={getNavClass('/students')}>Murid</Link>
            <Link to="/gallery" className={getNavClass('/gallery')}>Galeri</Link>
            <Link to="/journey" className={getNavClass('/journey')}>The Journey</Link>
            <Link to="/guestbook" className={getNavClass('/guestbook')}>Guestbook</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-200 hover:bg-white/10 rounded-lg transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#020617] border-t border-white/5 p-4 space-y-2 shadow-2xl">
          <Link to="/" onClick={() => setIsOpen(false)} className={getNavClass('/', true)}>Beranda</Link>
          <Link to="/students" onClick={() => setIsOpen(false)} className={getNavClass('/students', true)}>Murid</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className={getNavClass('/gallery', true)}>Galeri</Link>
          <Link to="/journey" onClick={() => setIsOpen(false)} className={getNavClass('/journey', true)}>The Journey</Link>
          <Link to="/guestbook" onClick={() => setIsOpen(false)} className={getNavClass('/guestbook', true)}>Guestbook</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

