import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Interested from '../Interested/Interested';

const Home = () => {
    return (
        <div>
            <h3>This is home page </h3>

            <section>
                <Banner></Banner>
            </section>

            <section className='mt-20 mx-10'>
                <AboutMe></AboutMe>
            </section>

            <section>
                <Interested></Interested>
            </section>
        </div>
    );
};

export default Home;