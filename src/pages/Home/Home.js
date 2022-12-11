import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Courses from '../Courses/Courses';
import Education from '../Education/Education';
import Interested from '../Interested/Interested';
import ProfessionalSkills from '../ProfessionalSkills/ProfessionalSkills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>

            <section>
                <Banner></Banner>
            </section>

            <section className='mt-20 mx-10'>
                <AboutMe></AboutMe>
            </section>

            <section>
                <Interested></Interested>
            </section>

            <section>
                <Education></Education>
            </section>

            <section>
                <Courses></Courses>
            </section>

            <section className='mt-20'>
                <ProfessionalSkills></ProfessionalSkills>
            </section>

            <section className='mt-20'>
                <Projects></Projects>
            </section>

            <section className='mt-20'>
                <ContactMe></ContactMe>
            </section>
        </div>
    );
};

export default Home;