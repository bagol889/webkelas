import React from 'react';
import { MOMENTS } from '../constants'; 
import { Calendar, Tag } from 'lucide-react';

const Gallery: React.FC<{ openLightbox: (img: string, name: string) => void }> = ({ openLightbox }) => {
  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-white mb-4">Galeri Keseruan</h2>
        <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-12"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {MOMENTS.map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#111827]/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-900/10 cursor-pointer"
              onClick={() => openLightbox(item.image, item.title)}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-red-600/90 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

