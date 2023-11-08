import "./mastery.css"
import Home from "../Home";
import Footer from "../Footer";

function Mastery(){
    return(
        <div className="mastery">
            <Home/>
            <div className="background_image">        
                <h1 className="title-content">Maîtrise</h1>
                    <div className="step_bio">
                        <div class="column">
                            <div className="title_bio">Formation</div>
                                <p>
                                    Au cours de la formation j'ai appris à me servir de <strong>GitHub</strong>, de <strong>GitProject</strong>, <strong>Okanban</strong>... J'ai programmé avec le système Linux en codant avec le langage <strong>Javascript</strong>.
                                    Pendant le socle nous avons beaucoup travaillé en back-end en découvrant <strong>Node.js</strong>, en se servant du framework <strong>Express</strong>
                                    puis nous avons aussi développé en <strong>SQL</strong> avec <strong>PostgreSQL</strong>.  Tout les jours un Challenge nous était donné,
                                    ce qui nous laissait beaucoup de temps de pratique. Ensuite, j'ai choisi de me spécialiser en <strong>React </strong>  car  sa technique de développement par composant, très efficace et donc très recherchée, m'a attiré. 
                                    En fin de formation, nous avons travaillé avec <strong>Redux</strong> en manipulant les différents hooks propre à react. <br/><br/>
                                    Au terme de cette formation, nous avons eu un projet à réaliser pendant un mois : Faire une application de A à Z que nous avons d'ailleurs déployée pour la présentation 
                                    (réalisée en direct sur YouTube). Nous avons au cours de ce projet, collaboré comme si nous étions en entreprise avec les méthodes <strong>AGILE</strong> avec l'utilisation d'un <strong>cahier des charges</strong>,
                                     d'<strong> User Stories</strong>, de création des Wireframes avec l'outil<strong> FIGMA</strong>, d'un <strong>MCD</strong>, ainsi que d'un <strong>MLD</strong> et d'un <strong>journal de bord</strong> répertoriant 
                                     nos avanvées quotidiennes. En collaboration entre équipes back et front (2 de chaque) avec réunion sur notre avancée chaque matin,
                                    puis  en étroite communication avec mon collègue front, nous avons dispatché les fonctionnalités à travailler et cela avec une deadline à respecter. Nous avions choisi de développer notre projet avec <strong>Redux</strong>.
                                    C'était une superbe expérience qui me donne envie de m'y replonger. 
                                </p>
                        </div>

                        <div class="column">
                            <div className="title_bio">Apprentissage et Expérience</div>
                                <p>
                                J'ai, dès le mois de Septembre travaillé sur l'autre spécialisation en back, que je n'avais pas choisie à la fin de mon socle. Nous avions à disposition à tout moment les cours en replay .
                                J'ai ensuite passé la certification Opquast très intéressante et l'ai réussie avec mention "confirmée" 💪. J'ai commencé à apprendre la bibliothèque <strong>Jquery</strong> de Javascript et je 
                                me suis aussi intéressé au langage <strong>C#</strong> et j'ai suivi des cours plutôt intéressants. D'avril à juin 2023 (3 mois), j'ai poursuivi un stage chez Portalliance, une filiale d'Airbus 
                                qui, à l'aide d'api et de ses ingénieurs, collectent des calculs pour le maillage de pièces d'avion. Entre la création de projet et son terme, il se passe différentes étapes, réparti en fonction des différents rôles.
                                C'est sur cela que le groupe des développeurs web sont missionnés. <strong>React</strong>, <strong>Go</strong> et <strong>Gitlab</strong> sont les technos utilisées. <br></br> 
                                
                                <br/>A côté de cela, je regarde des vidéos sur youtube et je revisionne 
                                les replays de mes cours de React pour bien assimiler toutes les notions en faisant des exercices en parallèle. Je viens de finir de m'intéresser aux tests unitaires avec <strong>Jest</strong>, j'ai suivi quelques cours
                                sur <strong>Typescript</strong>. Dernièrement j’ai terminé une formation avec <strong>Angular</strong> sur Openclassroom. Je conforte mes apprentissages avec des cours sur Linkedin  Learning et Youtube. 
                                Dernièrement j'ai travaillé avec les pipes de <strong>RxJS</strong> et en ce moment, je créer un projet Angular.
                                Quoi qu'il en soit je continue à prendre de l'expérience de mon côté pour me préparer à toutes éventualités. Je sais aussi travailler avec <strong>Material Ui</strong>, <strong>Semantic Ui</strong>, <strong>Tailwind</strong> et <strong>Bootstrap</strong>.
                                À l'heure actuelle je souhaite trouver un emploi.
                                </p>
                        </div>
                    </div>
            </div>
            <Footer/>
         </div>
    )
}

export default Mastery;