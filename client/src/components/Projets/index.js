import "./projets.css"
import Home from "../Home";
import Footer from "../Footer";

function Projets(){
    return(
        <div className="mastery">
            <Home/>
            <h1 className="title-content">Projets</h1>
                <article className="projet">     
                    <div className="wrapper-projet">
                        <img className="photo-mignon" src="img/mignon.png" alt="photo_mignon"></img>           
                    
                        <p className="text-projet"> <span>Projet "Chui trop mignon" (l'apothéose) </span><br/><br/>
                        Dans un premier temps en commun avec le groupe :
                        <br/>- élaboration du cahier des charges avec les objectifs, les besoins et une vue sur les fonctionnalités à choisir pour le développement de l'application;
                        <br/>- userstories, wireframe à l'aide de l'outil whimsical,
                        <br/>- MCD et MLD,
                        <br/>-  Travail avec Github,
                        <br/>- Veille sur la sécurité<br/><br/>

                        Dans un second temps, travail en duo et répartition avec mon binôme front pour pouvoir travailler en autonomie efficacement et cela en React :
                        <br/>- mise en place des fonctionnalités importante (inscription, authentification (jwt), profil utilisateur, favoris...)  
                        <br/>- mise en place des composants et du routage.
                        <br/>- création d'une data fictive dans l'attente de l'avancé de nos collègues du backend
                        <br/>- mise en place du style (scss)
                        <br/>- utilisation d'Axios pour requêter la BDD,
                        <br/>- sécurité : injection SQL, XSS et je me suis intéressé à Bcrypt, utilisé en Back, pour le hashing des mots de passes.
                        </p>
                    </div>
                </article>

                <article className="projet">
                    <div className="wrapper-projet">
                        <img className="photo-valoutube" src="img/valoutube.png" alt="photo_valoutube"></img> 
                    <p className="text-projet">
                    <span>Projet "valoutube" </span><br/><br/>
                    J'ai choisis de codé ce projet que j'ai mené pendant près d'un mois,
                    en suivant un tuto sur youtube ce qui m'a permis de réutilisé les outils fondamentaux de <strong>Node.js</strong>:
                    <br/>- Connect to MongoDB,
                    <br/>- Stockage du JWT pour l'authentification dans les cookies,
                    <br/>- Vérification à l'authentification et la connexion puis gestion message d'erreur explicite (avec l'aide d'insomnia),
                    <br/>- CRUD User, CRUD video et CRUD commentaire.<br/><br/>
                    
                    et de <strong>React</strong>:
                    <br/>- Gestion de l'authentification et de la connexion,
                    <br/>- Authentification rapide via son compte Google(gmail),
                    <br/>- Utilisation de React Redux Toolkit pour requêter MongoDB,
                    <br/>- Style de la page,
                    <br/>- Des fonctionnalités comme aimer une vidéo, en télécharger sur l'api, ajouter un commentaire...
                    <br/>- Méthode dans la barre de recherche précise grâce à l'utilisation des tags.
                    </p>
                    </div>
                </article>
            <Footer/>
        </div>
    )
}

export default Projets;