import React from 'react';
import home from '../../images/project1.png';
import blog from '../../images/project1blog.png';
import login from '../../images/project1login.png';
import allsellers from '../../images/project1allsellers.png';
import './WatchBD.css';

const WatchBD = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={home} alt="" />
                    </div>
                    <img src={login} className='w-96' alt="" />
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={blog} alt="" />
                    </div>
                    <img src={allsellers} className='w-96' alt="" />
                </div>
                <div className='pl-7'>
                    <h1 className="text-5xl font-bold">WatchBD!</h1>
                    <ul className="py-6" style={{ listStyle: 'disc' }}>
                        <li>The main work on the website is Dashboard related. Buyer, Seller, and Admin roles are here. Buyers can
book any product and pay for it. This payment method is implemented using Stripe.</li>
                        <li>Admin can delete all sellers and buyers. And any seller can be verified if he wants. If a buyer reports that
product, the admin can delete it.</li>
                        <li>Here environment variables are used that are available through a global
process.env Object.</li>
                        <li>Here seller can advertise any product which can be seen on the home page.</li>
                        <li>Technologies: React.js, Firebase Authentication, react-router-dom, react-hook-form, Axios, react-hot-toast,
TailwindCSS framework daisyUi, Node.js, Express.js, Cors, dotenv, MongoDB, Stripe.
</li>
                    </ul>
                   <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10'>
                   <a target={'_blank'} href="https://watchbd-b4c22.firebaseapp.com/"><button className="btn">Live Link</button></a>
                            <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/watchbd-client"><button className="btn">GitHub Client Link</button></a>
                            <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/watchbd-server"><button className="btn">GitHub Server Link</button></a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default WatchBD;