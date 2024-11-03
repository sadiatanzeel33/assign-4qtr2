import React from 'react';
import StudentList from './StudentList';

interface StudentCardProps {
    name: string;
    age: number;
    rollno: number;
    studentclass: string;
}

const StudentCard: React.FC<StudentCardProps> = ({
    name, age, rollno, studentclass
}) => {
    return (
        <div className='bg-blue-300 shadow-lg rounded-lg p-6 w-80 mx-auto transition duration-300 ease-in-out hover:shadow-xl'>
            <h3 className='text-2xl font-bold mb-2 text-gray-800 text-center'>Student Id Card</h3>
            <p className="text-xl mb-2 font-bold text-gray-800">Name: {name}</p>
            <p className="font-bold text-gray-600">Age: {age}</p>
            <p className="font-bold text-gray-600">Roll NO: {rollno}</p>
            <p className="font-bold text-gray-600">Class: {studentclass}</p>
        </div>
    );
}

export default StudentCard;