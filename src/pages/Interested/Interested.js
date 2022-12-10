import React from 'react';

const Interested = () => {
    return (
        <div className='m-12'>
            <h1 className='text-4xl font-bold text-center'>MY INTERESTS</h1>
            <div className='text-xl font-bold lg:flex justify-center p-5 '>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white '>Coding</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white '>Drawing</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white '>Travel</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white '>Music</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white '>Coffee</p>
                <p className='p-5 mb-4 border rounded-full mr-4 hover:bg-slate-500 hover:text-white '>Art</p>
            </div>
        </div>
    );
};

export default Interested;