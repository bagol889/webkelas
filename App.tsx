import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import Journey from './pages/Journey';
import Guestbook from './pages/Guestbook';
import Gallery from './pages/Gallery';
import { CLASS_DATA } from './constants'; 
import { X } from 'lucide-react'; 

const App: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const openLightbox = (img: string, name: string) => {
    setSelectedImg(img);
    setSelectedName(name);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#020617] text-white selection:bg-red-500/30 font-sans flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openLightbox={openLightbox} />} />
            <Route path="/students" element={<Students openLightbox={openLightbox} />} />
            <Route path="/gallery" element={<Gallery openLightbox={openLightbox} />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/guestbook" element={<Guestbook />} />
          </Routes>
        </div>

        <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-white/5 text-white py-12 mt-auto">
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
    </Router>
  );
};
export default App;

