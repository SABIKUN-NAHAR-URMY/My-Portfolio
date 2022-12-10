import React from 'react';
import project1 from '../../images/project1.png';

const Projects = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>My Projects</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className='overflow-scroll hover:scroll-auto'>
                    <img src={project1} alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;