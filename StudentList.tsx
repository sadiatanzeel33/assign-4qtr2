'use client'
import React from 'react';
import StudentCard from './StudentCard';


const students = [
    { name: 'Sadia Tanzeel', age: 35, rollNO: 2244, studentClass: 'GIAIC Quarter2' },
    { name: 'Saima Mumtaz', age: 32, rollNO: 6212, studentClass: 'GIAIC Quarter2' },
    { name: 'Sumaira Ali', age: 35, rollNO: 8236, studentClass: 'GIAIC Quarter2' },
];

const StudentList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-auto max-w-7xl">
            {students.map((student, index) => (
                <StudentCard
                    key={index}
                    name={student.name}
                    age={student.age}
                    rollno={student.rollNO}
                    studentclass={student.studentClass}
                />
            ))}
        </div>
    );
}

export default StudentList;