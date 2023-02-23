import "./nav.css"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


function Nav(){
    const location = useLocation()
    useEffect(() =>{
        window.scroll({
            top:870,
            behavior: 'smooth',
        }); 
    }, [location.pathname])
    return(
        <nav>
<h3> <Link className='nav-link' to="/history">Histoire</Link></h3> 
<h3> <Link className='nav-link' to="/mastery">Maîtrise</Link></h3> 
<h3> <Link className='nav-link' to="/projets">Projets</Link></h3> 
<h3> <Link className='nav-link' to="/contact">Contact</Link></h3> 

        </nav>
    )
}

export default Nav;

