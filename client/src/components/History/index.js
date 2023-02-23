import "./history.css"
import Home from "../Home";
import Footer from "../Footer"
import { Link } from "react-router-dom";





function History(){
    var today = new Date();
    var time = today.getHours();
    var greet;


    if ((time > 0) && (time <8 )) {
    greet = "bonne nuit";
    } else if ((time > 8) && (time < 12)) {
    greet = "c'est le matin et à cette heure, j'organise ma journée puis je code. ";
    } else if ((time => 12) && (time < 14)){
    greet = "je suis parti manger!";
    } else if ((time => 14) && (time <= 17)) {
    greet = "c'est l'après-midi et à cette heure, je code ou je nage. ";
    } else if ((time => 18) && (time < 19)) {
    greet = "avant le souper, je  me pose un peu en regardant un animé ou je joue à la console.";
    } else if ((time => 19) && (time < 21)){
    greet = "je suis parti dîner!";
    } else if ((time => 21) && (time <= 23)) {
    greet = "je pars combattre le mal ça donne sommeil.";
    } else {
    greet = 'il est 25h!';
    }

  
    return(
    
        <div className="history">
            <Home/>
            <h1 className="title-content">Histoire</h1>
                <p> Mon histoire commence durant ma période de formation dans un tout autre domaine.
                J'ai réalisé 3 années d'étude et j'ai obtenu ma licence en Staps spécialisé en management sportif en 2019... 
                En fait, ce que j'ai surtout réalisé c'est que le code m'intéressé davantage.
                Bien sûr, cette formation a été très intéressante, autant culturellement que professionnellement.
                Mais je me suis rendu compte, que j'avais plus d'attrait pour le développement web.  Mes premières appétences me viennent de plus loin car 
                enfant je m'intéressais déjà à tout ce qui touché à l'informatique. 
                Je ne cache pas que l'événementielle m'intéressais aussi et ma formation y touchait. Mais la période "covid" m'a remis sur le droit chemin. <br/><br/> J'ai pris du recul 
                et j'ai donc commencé les démarches pour avoir un financement de la région.
                Après avoir montré ma détermination par le biais de stage dans le domaine, questionnaire pro... je l'ai obtenu et j'ai commencé la formation chez O'clock. 
                Ecole au top, super formateur, malgré que ce soit en intensif durant 6 mois et donc éprouvant, j'ai passé de très bon moment. 
                Tout ce que j'y ai fait est en détail dans la rubrique &#128073;<Link className="link" to="/mastery">Maîtrise</Link> &#128072;. <br/> <br/> Je vous laisse, {greet}  </p>
            <Footer />
        </div>
          
    )
    
}

export default History;