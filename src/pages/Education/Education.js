import React from 'react';

const Education = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>EDUCATION</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 m-20 text-center'>
                <div className="card w-96 bg-base-100 shadow-xl mb-6">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Bachelor of Science (B.Sc), Computer Science & Engineering</h2>
                        <p>Dhaka University Of Engineering And Technology, Gazipur</p>
                        <p>2017 - 2022</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-6">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Diploma In Engineering</h2>
                        <p>Narsingdi Polytechnic Institute</p>
                        <p>2012 - 2016</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-6">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Secondary School Certificate</h2>
                        <p>Shibpur Pilot Girls' High School</p>
                        <p>2010 - 2012</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;