import "./projets.css"
import Home from "../Home";
import Footer from "../Footer";

function Projets(){
    return(
        <div className="projets">
            <Home/>
            <div className="background_image">
            <h1 className="title-content">Projets</h1>
                
            <article className="projet">     
                    <div className="wrapper-projet">
                  
                       <img className="photo-expsharing" src="img/expsharing.png" alt="photo_expsharing"></img>            
                        
                        <p className="text-projet"><br/><br/> <span>Projet "ExpSharing" (Projet Angular) </span><br/><br/>
                        Ce projet réalisé à la suite de petites formations en autodidacte sur Angular a été dans le but de pratiquer,
                         pour mettre en place les notions apprises.<br/><br/>
                        Ce site permet à l'utilisateur de consulter et ajouter ses expériences qu'il aurait pu avoir sur le sujet
                        des voyages, de ses expériences culinaires ou encore de son jeux vidéos préférés. <br/><br/>
                        Je me suis servi de Rxjs pour faire les appels Api. En local, l'utilisateur peut ajouter un nouveau projet
                        en dynamique en y ajoutant un titre une description et une photo.
                        Je n'ai pas encore déployé le backend car je compte le faire avec NestJs et utiliser du NoSql pour la Base de donnée.<br/><br/>
                        <div style={{color:"red", paddingBottom:"30px"}}>L'application est encore en développement.  </div>
 


                        
                        <div className="link-to-network">
                            <br/><br/> <a href="https://exp-sharing.netlify.app/" target="_blank" rel="noreferrer" className="website-link" translate="no"> Website</a>
                            <a href="https://github.com/LerouvilloisValentin/facesnap" target="_blank" rel="noreferrer" className="github-link" translate="no"> Github</a>
                        </div>
                        </p>
                    </div>
                </article>

                <article className="projet">
                    <div className="wrapper-projet">
                        <a href="https://valoutube.surge.sh" target="_blank" rel="noreferrer" className="photo-valoutube"><img className="photo-valoutube" src="img/valoutube.png" alt="photo_valoutube"></img> </a>            
                        <p className="text-projet">
                        <span>Projet "Valoutube" </span><br/><br/>
                        J'ai choisi de coder ce projet que j'ai mené pendant près d'un mois,
                         qui m'a permis de réutiliser les outils fondamentaux de Node.js:
                        <br/>- Connect to MongoDB,
                        <br/>- Stockage du JWT pour l'authentification dans les cookies,
                        <br/>- Vérification à l'authentification et la connexion puis gestion message d'erreur explicite (avec l'aide d'insomnia),
                        <br/>- CRUD User, CRUD video et CRUD commentaire.<br/><br/>
                        
                        et de React:
                        <br/>- Gestion de l'authentification et de la connexion,
                        <br/>- Authentification rapide via son compte Google(gmail),
                        <br/>- Utilisation de React Redux Toolkit pour requêter MongoDB,
                        <br/>- Style de la page,
                        <br/>- Des fonctionnalités comme aimer une vidéo, en télécharger une depuis son bureau, ajouter un commentaire...
                        <br/>- Méthode dans la barre de recherche précise grâce à l'utilisation des tags.
                        <div className="link-to-network">
                        <br/><br/> <a href="https://valoutube.surge.sh" target="_blank" rel="noreferrer" className="website-link" translate="no"> Website </a>
                        <a href="https://github.com/LerouvilloisValentin/valoutube" target="_blank" rel="noreferrer" className="github-link" translate="no"> Github</a>
                    
                        </div>
                        </p>
                        <div style={{color:"red", marginLeft:"35vw", paddingBottom:"15px", fontSize:"1.1em" }}>Le site n'est actuellement pas hébergé. </div>
                    </div>
                </article>

                <article className="projet">     
                    <div className="wrapper-projet">
                  
                       <img className="photo-mignon" src="img/mignon.png" alt="photo_mignon"></img>            
                        
                        <p className="text-projet"> <span>Projet "Chui trop mignon" (l'apothéose de fin de formation) </span><br/><br/>
                        Dans un premier temps en commun avec le groupe :
                        <br/>- élaboration du cahier des charges avec les objectifs, les besoins et une vue sur les fonctionnalités à choisir pour le développement de l'application,
                        <br/>- userstories, wireframe à l'aide de l'outil whimsical,
                        <br/>- MCD et MLD,
                        <br/>-  Travail avec Github,
                        <br/>- Veille sur la sécurité<br/><br/>

                        Dans un second temps, travail en duo et répartition avec mon binôme front pour pouvoir travailler en autonomie efficacement et cela en React :
                        <br/>- mise en place des fonctionnalités importantes (inscription, authentification (jwt), profil utilisateur, favoris...),
                        <br/>- mise en place des composants et du routage,
                        <br/>- création d'une data fictive dans l'attente de l'avancée de nos collègues du backend,
                        <br/>- mise en place du style (scss),
                        <br/>- utilisation d'Axios pour requêter la BDD,
                        <br/>- sécurité : injection SQL, XSS et je me suis intéressé à Bcrypt, utilisé en Back, pour le hashing des mots de passe.
                        <div className="link-to-network">
                            <br/><br/> <a href="https://tropmeugnon.surge.sh" target="_blank" rel="noreferrer" className="website-link" translate="no"> Website</a>
                            <a href="https://github.com/O-clock-Cassini/projet-14-chui-trop-mignon" target="_blank" rel="noreferrer" className="github-link" translate="no"> Github</a>
                            <div >
                                <span className="tooltip"></span>
                                <span><i className="logo_youtube"></i>
                                    <a href="https://www.youtube.com/watch?v=ozEwinMqyFY&start=434" translate="no" target="_blank" rel="noreferrer"> <img src="https://zupimages.net/up/22/30/g0eu.png" alt="youtube"/> </a>
                                </span>            
                            </div>
                        </div>
                        </p>
                    </div>
                </article>

                </div>
            <Footer/>
        </div>
    )
}

export default Projets;