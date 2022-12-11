import React from 'react';
import img1 from '../../images/project2.png';
import img2 from '../../images/project2addreviews.png';
import img3 from '../../images/project2alldata.png';
import img4 from '../../images/project2allreviews.png';
import '../WatchBD/WatchBD.css';

const LensQueen = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={img1} alt="" />
                    </div>
                    <img src={img2} className='w-96' alt="" />
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={img3} alt="" />
                    </div>
                    <img src={img4} className='w-96' alt="" />
                </div>
                <div className='pl-7'>
                    <h1 className="text-5xl font-bold">WatchBD!</h1>
                    <ul className="py-6" style={{ listStyle: 'disc' }}>
                        <li>Wedding photography-related login, signup, and google signup system have been implemented on this
website. Here Dynamic page title based on the Route system has been implemented.</li>
                        <li>Those who are logged in can review the service. Again, the user can edit and delete his review if he wants.
Here environment variables are used that are available through a global process.env Object.</li>
                        <li>The data of services on this website of MERN Stack technology is the stored in MongoDB database.</li>
                        <li>Service Review-Related Website implemented.</li>
                        <li>Technologies: React.js, Firebase Authentication, react-router-dom, TailwindCSS framework daisyUi, reacticons, react-photo-view, react-toastify, Node.js, Express.js, Cors, dotenv, MongoDB, JWT.
                        </li>
                    </ul>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10'>
                        <a target={'_blank'} href="https://lens-queen-3afeb.firebaseapp.com/"><button className="btn">Live Link</button></a>
                        <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/lens-queen-client"><button className="btn">GitHub Client Link</button></a>
                        <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/lens-queen-server"><button className="btn">GitHub Server Link</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LensQueen;