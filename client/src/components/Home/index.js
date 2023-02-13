import "./home.css"
import Nav from "../Nav/index"
// import "../../../public/img/fond.jpg"

function Home(){
    const date1 = new Date();

    const dateLocale = date1.toLocaleString('fr-FR',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'});

    return(
     <div className="container">
        <section className="presentation">
            <h1>Développeur web Fullstack <br/>Javascript React</h1> 
            <h2 className="date"> {dateLocale}</h2>
        <ul className="wrapper">
            <li className="icon youtube">
                <span className="tooltip">Youtube</span>
                <span><i className="fab fa-youtube"></i>
                <a href="https://www.youtube.com/watch?v=ozEwinMqyFY" target="_blank" rel="noreferrer"> <img src="https://zupimages.net/up/22/30/g0eu.png" alt="youtube"/> </a>
                </span>            
            </li>
            <li className="icon linkendin">
                <span className="tooltip">Linkendin</span>
                <span><i className="fab fa-linkendin"></i>
                <a href="https://www.linkedin.com/in/valentin-lerouvillois-6944b4198/" target="_blank" rel="noreferrer"><img src="https://zupimages.net/up/22/30/dxtz.png" alt="instagram"/> </a>
                </span>
          </li>
        </ul>
        </section>
        <header>
            <h3>06.62.00.54.55</h3>
            <span className="title">Valentin's Website</span>
            <h3>Lerouvillois.valentin61<br/>@hotmail.fr</h3>
        </header>
        <Nav/>
     </div>   
    )
}

export default Home;