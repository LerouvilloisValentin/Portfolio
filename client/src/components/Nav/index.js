import "./nav.css"
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav>
<h3> <Link className='nav-link' to="/history">Histoire</Link></h3> 
<h3> <Link className='nav-link' to="/mastery">Maîtrise</Link></h3> 
<h3> <Link className='nav-link' to="/projets">Projets</Link></h3> 

        </nav>
    )
}

export default Nav;

