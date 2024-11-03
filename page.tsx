"use client";

import React from 'react'; 
import StudentList from './components/StudentList';



const HomePage: React.FC = () => {
    return (
        <div className='min-h-screen bg-white flex items-center justify-center'>
            <StudentList />
        </div>
    );
}

export default HomePage;

