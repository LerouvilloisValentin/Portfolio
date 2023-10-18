import { useNavigate } from "react-router-dom";
import "./error.scss"
import { useState } from "react";


function Error(){
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    function goHome() {
        navigate("/")
    }

    function display() {
        setMessage("Commencer à compter à partir de la fin et dans le sens inverse de gauche à droite jusqu'à 15 en repartant du début à la fin de la boucle.")
    }

    return(
    <>
        <div className="header_error">Mauvaise route pour un mauvais style!!</div>
        <div class="discussion">Bon tu n'a rien à faire ici!<br></br>
            Heureusement cliquer sur l'une des case te sors de cette angoisse de page. <br></br>
            Si tu es joueur tu peux t'en tirer d'une façon originale à travers cette énigme: <br></br>
            Il va falloir se remonter les manches, <br></br> savoir compter jusqu'à 15 et bon sang se concentrer vers la fin !<br></br> 
            Il faudra peut être se répété une fois et pour pas perdre ses cases, fonctionner comme un anglais.
        </div>
       
        <button className="solution" onClick={display} >Solution</button>
    
        <div className="message">{message}</div>
        <div class="cube_special ">
            <div class="face_special front" ></div>
            <div class="face_special back"></div>
            <div class="face_special right"></div>
            <div class="face_special left"></div>
            <div class="face_special top"></div>
            <div class="face_special bottom"></div>
        </div>
        <div class="cube_special ">
            <div class="face_special front" ></div>
            <div class="face_special back"></div>
            <div class="face_special right"></div>
            <div class="face_special left"></div>
            <div class="face_special top"></div>
            <div class="face_special bottom"></div>
        </div>
        <button class="cube ">
            <div class="face"></div>
        </button>
        <button class="cube2">
            <div class="face"></div>
        </button>
        <button class="cube3">
            <div class="face"></div>
        </button>
        <button class="cube4" onClick={goHome}  >
            <div class="face"></div>
        </button>
        <button class="cube5">
            <div class="face"></div>
        </button>
        <button class="cube6">
            <div class="face"></div>
        </button>
        <button class="cube7">
            <div class="face"></div>
        </button>
        <button class="cube8">
            <div class="face"></div>
        </button>
        <button class="cube9">
            <div class="face"></div>
        </button>
        <button class="cube10">
            <div class="face"></div>
        </button>
        <button class="cube11">
            <div class="face"></div>
        </button>
    </>

    )
}

export default Error;