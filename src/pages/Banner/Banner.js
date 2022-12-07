import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div>
            <div class="relative ">
                <img src={banner} alt='' />
                <div class="absolute top-0  bg-gray-800 opacity-70">
                    <h3 class="text-4xl text-white font-bold">
                        Hello! <br />
                        I'm Sabikun Nahar Urmy</h3>
                    <p class="mt-2 text-xl text-gray-300">Web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;