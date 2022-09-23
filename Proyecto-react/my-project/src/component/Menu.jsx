import React from 'react'
import {Link} from "react-router-dom"


function Menu({abrirCerrarNuevo}){
    return(
        <div className="grid grid-rows-3 text-center items-center bg-black " onClick={abrirCerrarNuevo}>
        <Link className="p-4 text-white" to="/">
            Home
        </Link>
        <Link className="p-4 text-white " to="/About">
            About
        </Link>
        <Link className="p-4 text-white " to="/Contact">
            Contact
        </Link>
        <Link className="p-4 text-white " to="/Search">
            Search
        </Link>
        <Link className="p-4 text-white " to="/Signin">
            Sign-in!
        </Link>
        <Link className="p-4 text-white " to="/Signup">
            Sign-up!
        </Link>
        </div>
    );
}
export default Menu