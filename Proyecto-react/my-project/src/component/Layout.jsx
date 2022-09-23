import { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu"
import { useEffect } from "react";

function Layout({children}) {

    const [isOpen, setIsOpen] = useState(false)

useEffect(() =>{
    const ocultarMenu = () => {
        if (window.innerWidth > 768 && isOpen){
            setIsOpen(false)
        }
    }

    window.addEventListener("resize", ocultarMenu)

    return () => {
        window.removeEventListener("resize", ocultarMenu)
};
});

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
        <Navbar abrirCerrar={toggleOpen} />
        {isOpen && <Menu abrirCerrarNuevo={toggleOpen} />}
        {children}
        </div>
    )
}

export default Layout;