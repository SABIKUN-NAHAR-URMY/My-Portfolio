import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-6'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-28'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={project1} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl">WatchBD</h2>
                        <p>The main work on the website is Dashboard related. Buyer, Seller, and Admin roles are here. Buyers can
                            book any product and pay for it. This payment method is implemented using Stripe.</p>
                        <div className="card-actions">
                            <a target={'_blank'} href="https://watchbd-b4c22.firebaseapp.com/"><button className="btn">Live Link</button></a>
                            <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/watchbd-client"><button className="btn">GitHub Client Link</button></a>
                            <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/watchbd-server"><button className="btn">GitHub Server Link</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={project2} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl">Lens-Queen</h2>
                        <p>Wedding photography-related login, signup, and google signup systems have been implemented on this
                            website. Here Dynamic page title based on the Route system has been implemented.</p>
                        <div className="card-actions">
                            <a target={'_blank'} href="https://lens-queen-3afeb.firebaseapp.com/"><button className="btn">Live Link</button></a>
                            <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/lens-queen-client"><button className="btn">GitHub Client Link</button></a>
                            <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/lens-queen-server"><button className="btn">GitHub Server Link</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={project3} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl">Tech-Edu</h2>
                        <p>On this website, a protected route is provided where the user cannot purchase any system if not logged in
                            and the user will be taken to the login page.</p>
                        <div className="card-actions">
                            <a target={'_blank'} href="https://tech-edu-43caa.firebaseapp.com/"><button className="btn">Live Link</button></a>
                            <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/tech-edu-clientt"><button className="btn">GitHub Client Link</button></a>
                            <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/tect-edu-server"><button className="btn">GitHub Server Link</button></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Link className='btn mt-4'><button>See More</button></Link> */}

        </div>
    );
};

export default Projects;