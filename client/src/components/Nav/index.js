import "./nav.css"
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";


function Nav(){
    const location = useLocation()
    useEffect(() =>{
        window.scroll({
            top:740,
            behavior: 'smooth',
        }); 
    }, [location.pathname])
    return(
        <nav className="menu">
            <h3> 
                <NavLink 
                className={({ isActive }) => (isActive ? 'nav-link-selected ' : 'nav-link')}                    
                to="/history">
                    Histoire
                </NavLink> 
            </h3> 
            <h3> <NavLink 
                className={({ isActive }) => (isActive ? 'nav-link-selected ' : 'nav-link')}
                to="/mastery">
                Maîtrise
                </NavLink>
                </h3> 
            <h3> <NavLink
                className={({ isActive }) => (isActive ? 'nav-link-selected ' : 'nav-link')}
                to="/projets">
                Projets
                </NavLink>
                </h3> 
            <h3> 
                <NavLink 
           className={({ isActive }) => (isActive ? 'nav-link-selected ' : 'nav-link')}
            to="/contact">
                Contact
                </NavLink>
                </h3> 

        </nav>
    )
}

export default Nav;

