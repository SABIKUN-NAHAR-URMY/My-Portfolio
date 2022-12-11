import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import banner from '../../images/banner.jpg';

const Banner = () => {

    return (
        <div>
            <div className="relative ">
                <img src={banner} alt='' />
                <div className="absolute top-3 lg:top-1/4">

                    <h1 className="text-4xl lg:text-7xl text-white font-bold lg:p-96" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Hello! <br />
                        I'm Sabikun Nahar Urmy <br />
                        {' '}
                        <span style={{ color: 'white', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Web Developer', 'MERN Stack Developer', 'Front-end Developer', 'React.js Developer!']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;