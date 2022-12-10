import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-bold text-2xl'><Link>Home</Link></li>
                        <li className='font-bold text-2xl'><Link>About Me</Link></li>
                        <li className='font-bold text-2xl'><Link>Projects</Link></li>
                        <li className='font-bold text-2xl'><Link to={'/contactMe'}>Contact Me</Link>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl font-bold underline decoration-dashed" to={'/'}>Web Developer</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold text-xl'><Link>Home</Link></li>
                    <li className='font-bold text-xl'><Link>About Me</Link></li>
                    <li className='font-bold text-xl'><Link>Projects</Link></li>
                    <li className='font-bold text-xl'><Link to={'/contactMe'}>Contact Me</Link></li>

                </ul>
            </div>

            <div className="navbar-end">
            <a href='/Sabikun_Resume_WebDeveloper.pdf' className="btn btn-gray text-base-300" download>Download My Resume</a>
            </div>

        </div>
    );
};

export default Header;