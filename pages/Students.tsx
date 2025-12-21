import React from 'react';
import StudentCard from '../components/StudentCard';
import { STUDENTS } from '../constants'; 

const Students: React.FC<{ openLightbox: (img: string, name: string) => void }> = ({ openLightbox }) => {
  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-white mb-4">Mengenal Siswa Kami</h2>
        <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-12"></div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {STUDENTS.map((student) => (
            <StudentCard key={student.id} student={student} onImageClick={() => openLightbox(student.photo, student.name)} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Students;

