import React from 'react';
import './Courses.css';

const Courses = () => {
    return (
        <div className='text-center courses' data-aos="fade-up">
            <h1 className='text-4xl font-bold underline decoration-dashed'>Courses</h1>
            <div className="card lg:w-[1000px] bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Complete Web Development Course</h2>
                    <p> Jun 2022 - Present</p>
                    <p> Personalized, fun, and interactive learning process. Enjoy the most effective and enjoyable journey with interactive lessons and guided support to become a web developer.</p>
                </div>
            </div>
        </div>
    );
};

export default Courses;