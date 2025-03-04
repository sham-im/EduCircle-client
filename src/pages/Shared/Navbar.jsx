import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/Logo.png'

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center mx-auto my-4 bg-base-100">
            <div className="w-11/12 flex justify-between items-center bg-base-100">
                <div className="flex-none flex items-center space-x-2">
                    <img className='h-10 rounded-sm' src={logo} alt="" />
                    <a className="btn btn-ghost text-xl">daisyUI</a>
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
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;