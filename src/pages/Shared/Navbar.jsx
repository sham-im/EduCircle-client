import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/Logo.png'

const Navbar = () => {
    return (
        <div>
            {/* <nav className="flex justify-center items-center mx-auto my-4 bg-base-100">
            <div className="w-11/12 flex justify-between items-center bg-base-100">
                <div className="flex-none flex items-center space-x-2">
                    <img className='h-10 rounded-sm' src={logo} alt="" />
                    <a className="btn btn-ghost text-xl">Educircle</a>
                </div>
                <div className='space-x-3'>
                    <Link to='/assignments' className='btn bg-none'>Assgignments</Link>
                    <Link to='/Pending-assignments' className='btn bg-none'>Pending Assgignments</Link>
                </div>
                <div className="flex-none flex items-center space-x-2">
                    <Link to='/Register' className='btn bg-none'>Register</Link>
                <Link to='/Login' className='btn bg-none'>Login</Link>
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary><img className='h-10 w-10 rounded-full' src={logo} alt="" /></summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Create Assignments </a></li>
                                    <li><a>My Attempted Assignments </a></li>
                                    <li><a>My Attempted Assignments </a></li>
                                    <li><a>My Attempted Assignments </a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Parent</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </div>

    );
};

export default Navbar;