import React from 'react'
import {Link} from "react-router-dom";

function Navbar({abrirCerrar}) {
    return(
        <nav className="flex justify-between items-center h-16 bg-black text-white relative shadow-sn rounded-b-lg">
            <Link to="/" className='pl-8'>
            <h1 className="font-mono text-xl hover:text-base italic">Palmar.Dev</h1>
            </Link>

        <div className="px-4 cursor-pointer md:hidden" onClick={abrirCerrar}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        </div>
        <div className="pr-8 hidden md:block">
        <Link to="/" className="p-4">
            Home
        </Link>
        <Link to="/About" className="p-4">
            About
        </Link>
        <Link to="/Contact" className="p-4">
            Contact
        </Link>
        <Link to="/Search" className="p-4">
            Search
        </Link>
        <Link to="/Signin" className="p-4">
            Sign-in!
        </Link>
        <Link to="/Signup" className="p-4">
            Sign-up!
        </Link>
        </div>
        </nav>
    )
}
export default Navbar;