import "./home.css"
import Nav from "../Nav/index"
import Typical from 'react-typical'

function Home(){
    const date1 = new Date();

    const dateLocale = date1.toLocaleString('fr-FR',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'});

    return(
     <div className="container">
        <section className="presentation" style={{ backgroundImage: 'public\img\fond.jpg', backgroundSize: 'cover', height: "85vh" }}>        
            <Typical
                steps={['Développeur web', 1000, 'Javascript React', 800]}
                translate="no"
                loop={Infinity}
                wrapper="typical"
        />
            <h2 className="date"> {dateLocale}</h2>
        <ul className="wrapper">
            <li className="icon youtube">
                <span className="tooltip" translate="no">Github</span>
                <span><i className="fab fa-github"></i>
                <a href="https://github.com/LerouvilloisValentin"  target="_blank" rel="noreferrer"> <img src="https://zupimages.net/up/23/07/5h8d.png" width="45" height="45" alt="github"/> </a>
                </span>            
            </li>
            <li className="icon linkendin">
                <span className="tooltip">Linkedin</span>
                <span><i className="fab fa-linkendin"></i>
                <a href="https://www.linkedin.com/in/valentin-lerouvillois-6944b4198/" target="_blank" rel="noreferrer"><img src="https://zupimages.net/up/22/30/dxtz.png" alt="linkedin"/> </a>
                </span>
          </li>
        </ul>
        </section>
        <header>
            <h3>06.62.00.54.55</h3>
            <span className="title" translate="no">Valentin's Website</span>
            <h3>Lerouvillois.valentin61<br/>@hotmail.fr</h3>
        </header>
        <Nav/>
     </div>   
    )
}

export default Home;