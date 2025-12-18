
import React from 'react';
import { Person } from '../types';

interface StudentCardProps {
  student: Person;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-xl bg-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Student Photo */}
      <img 
        src={student.photo} 
        alt={student.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Dark Gradient Overlay for Name Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Text Inside Photo (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
        <h3 className="text-[11px] sm:text-xs font-bold text-white leading-tight truncate">
          {student.name}
        </h3>
        {/* Role text removed as requested */}
      </div>
    </div>
  );
};

export default StudentCard;
