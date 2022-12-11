import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import './Projects.css';

const Projects = () => {
    return (
        <div className='mb-9'>
            <h1 className='text-4xl font-bold text-center mb-8'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-28'>
                <div className="card w-96 bg-base-100 shadow-xl projects mb-8">
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={project1} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl">WatchBD</h2>
                        <p>The main work on the website is Dashboard related. Buyer, Seller, and Admin roles are here. Buyers can
                            book any product and pay for it. This payment method is implemented using Stripe.</p>
                        <div className="card-actions mx-auto">
                            <Link><button className='btn'>Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl projects mb-8">
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={project2} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl">Lens-Queen</h2>
                        <p>Wedding photography-related login, signup, and google signup systems have been implemented on this
                            website. Here Dynamic page title based on the Route system has been implemented.</p>
                            <div className="card-actions mx-auto">
                            <Link><button className='btn'>Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl projects mb-8">
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={project3} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl">Tech-Edu</h2>
                        <p>On this website, a protected route is provided where the user cannot purchase any system if not logged in
                            and the user will be taken to the login page.</p>
                        <div className="card-actions mx-auto">
                            <Link><button className='btn'>Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Link className='btn mt-4'><button>See More</button></Link> */}

        </div>
    );
};

export default Projects;