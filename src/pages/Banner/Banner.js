import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div>
            <div className="relative ">
                <img src={banner} alt='' />
                <div className="absolute top-0 bg-gray-800 opacity-70">
                    <h3 className="text-4xl text-white font-bold">
                        Hello! <br />
                        I'm Sabikun Nahar Urmy</h3>
                    <p className="mt-2 text-xl text-gray-300">Web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;