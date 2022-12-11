import React from 'react';
import img1 from '../../images/project3.png';
import img2 from '../../images/project3blog.png';
import img3 from '../../images/project3details.png';
import img4 from '../../images/project3details1.png';
import img5 from '../../images/project3faq.png';;

const TechEdu = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={img4} alt="" />
                    </div>
                    <img src={img2} className='w-96' alt="" />
                    <div className="project-wrap relative overflow-y-scroll ">

                        <img src={img3} alt="" />
                    </div>
                    <img src={img1} className='w-96' alt="" />
                </div>
                <div className='pl-7'>
                    <h1 className="text-5xl font-bold">WatchBD!</h1>
                    <ul className="py-6" style={{ listStyle: 'disc' }}>
                        <li>On this website, a protected route is provided where the user cannot purchase any system if not logged in
and the user will be taken to the login page.
</li>
                        <li>I have created the website with React.js and made it responsive for mobile and desktop devices.</li>
                        <li>The website has the facility to download files in pdf format. </li>
                        <li>Here environment variables are used that are
available through a global process.env Object.</li>
                        <li>Technologies: React.js, Firebase Authentication, react-router-dom, TailwindCSS framework daisyUi, reacticons, react-to-pdf, Node.js, Express.js, Vercel, Cors.
                        </li>
                    </ul>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10'>
                        <a target={'_blank'} href="https://tech-edu-43caa.firebaseapp.com/"><button className="btn">Live Link</button></a>
                        <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/tech-edu-client"><button className="btn">GitHub Client Link</button></a>
                        <a target={'_blank'} href="https://github.com/SABIKUN-NAHAR-URMY/tect-edu-server"><button className="btn">GitHub Server Link</button></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TechEdu;