import React from 'react';
import { Person } from '../types';

interface StudentCardProps {
  student: Person;
  onImageClick: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onImageClick }) => {
  return (
    <div 
      className="group cursor-pointer flex flex-col items-center"
      onClick={onImageClick}
    >
      {/* UKURAN & WARNA KEMBALI SEPERTI AWAL */}
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-white/5 shadow-lg mb-2">
        <img 
          src={student.photo} 
          alt={student.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h4 className="text-[10px] md:text-xs font-bold text-slate-300 group-hover:text-white transition-colors text-center line-clamp-1">
        {student.name}
      </h4>
    </div>
  );
};

export default StudentCard;
