import React from 'react';

const ProfessionalSkills = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>PROFESSIONAL SKILLS</h1>
            <div className='text-2xl font-semibold grid grid-cols-1 lg:grid-cols-2 mx-96 mt-20'>
                <div>
                    <h1>HTML</h1>
                    <progress className="progress w-56" value="100" max="100"></progress>
                </div>
                <div>
                    <h1>CSS</h1>
                    <progress className="progress w-56" value="100" max="100"></progress>
                </div>
                <div>
                    <h1>Tailwind CSS</h1>
                    <progress className="progress w-56" value="100" max="100"></progress>
                </div>
                <div>
                    <h1>Bootstrap</h1>
                    <progress className="progress w-56" value="100" max="100"></progress>
                </div>
                <div>
                    <h1>ReactJS</h1>
                    <progress className="progress w-56" value="90" max="100"></progress>
                </div>
                <div>
                    <h1>JavaScript</h1>
                    <progress className="progress w-56" value="90" max="100"></progress>
                </div>
                <div>
                    <h1>Node.js</h1>
                    <progress className="progress w-56" value="70" max="100"></progress>
                </div>
                <div>
                    <h1>Express.js</h1>
                    <progress className="progress w-56" value="60" max="100"></progress>
                </div>
                <div>
                    <h1>MongoDB</h1>
                    <progress className="progress w-56" value="60" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalSkills;