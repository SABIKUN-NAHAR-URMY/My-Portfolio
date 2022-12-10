import React from 'react';
import myImg from '../../images/myImage.JPG';

const AboutMe = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='px-14'>
                <div className='relative'>
                    <img className=' rounded-lg shadow-2xl w-[365px] h-[385px]' src={myImg} alt="" />
                    {/* <div className='absolute right-24 top-1/3 w-[365px] h-[385px] shadow-2xl border-5 rounded-lg border-gray-900'></div> */}
                   
                </div>


            </div>
            <div>

                <h1 className='text-4xl font-bold'>ABOUT ME</h1>
                <p className='mt-5 text-lg'>Hello! I'm Sabikun Nahar Urmy. Web Developer with over 7 months of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML, CSS, TailwindCSS, DaisyUi, Bootstrap, React Bootstrap, JavaScript, React.js, Dom Manipulation, ES6, API, JSON, Responsiveness, React-router-dom, Problem Solving, GitHub, Express.js, Node.js, MongoDB. Strong background in management and leadership.</p>

                <p className='text-xl font-semibold'>
                    NAME: Sabikun Nahar Urmy <br />
                    NATIONALITY: Bangladeshi <br />
                    ADDRESS: Dhaka, Bangladesh <br />
                    PHONE: +880 1516789576 <br />
                    E-MAIL: snurmy18@gmail.com <br />
                </p>
            </div>
        </div>
    );
};

export default AboutMe;