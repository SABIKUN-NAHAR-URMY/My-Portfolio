import React from 'react';
import './Interested.css';

const Interested = () => {
    return (
        <div className='m-12' data-aos="fade-right">
            <h1 className='text-4xl font-bold text-center'>MY INTERESTS</h1>
            <div className='text-xl font-bold lg:flex justify-center p-5'>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white interest'>Coding</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white interest'>Drawing</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white interest'>Travel</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white interest'>Music</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white interest'>Coffee</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white interest'>Art</p>
            </div>
        </div>
    );
};

export default Interested;