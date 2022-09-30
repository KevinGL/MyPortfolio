import { useParams } from "react-router-dom";
import Navbar from './components/navbar.js';

export default function DetailProject() {

    const details = [
        {
            title: "Le widget SNCF",
            description: "J'ai réalisé ce widget dans le cadre du projet \"dasboard\" réalisé en binôme, la SNCF fournit une API riche en données que j'ai dans un premier temps testées avec Postman. Le projet est un site frontend réalisé avec ReactJS et utilisant Axios pour les requêtes. La vue se compose de boutons permettant de sélectionner la gare d'une ville donnée et permettant ensuite de lancer des requêtes API renvoyant la liste des prochains départs et des prochaines arrivées. Les résultats sont affichés dans un tableau imitant l'esthétique des panneaux d'affichage SNCF",
            picture: "/screenshots/Dashboard.png"
        },
        {
            title: "Dashboard",
            description: "Dashboard est un projet réalisé en binôme, une occasion pour moi et mon collègue d'organiser et répartir le travail sur GitHub et de le fusionner régulièrement. Le projet consistait à réaliser plusieurs widgets de son choix, pour ma part j'ai réalisé :\n\n- Un widget pour les derniers films en salle\n- Un widget OAuth Facebook\n- Un widget affichant les départs et arrivées des trains\n\nIl est ensuite possible d'activer ou désactiver certains widgets au moyen de switchs et les icônes sont draggables",
            picture: "/screenshots/Dashboard2.png"
        },
        {
            title: "Free Ads",
            description: "Projet de début de formation réalisé en binôme, il s'agit d'un petit site d'affichage de publicités au moyen d'une BDD en MySQL et d'un serveur backend en Laravel. J'ai travaillé sur le CRUD et l'authentification et utilisé Bootstrap pour le design. Ce fut également l'occasion de découvrir des concepts de sécurité intéressants comme les middlewares.",
            picture: "/screenshots/Freeads.png"
        },
        {
            title: "PACA Driving",
            description: "Projet perso réalisé avec la lib SDL et l'API graphique OpenGL. Encore loin d'être abouti, ce projet devra au final permettre de simuler la conduite d'un train dans un décor situé autour de la région aixoise. J'ai utilisé notamment : \n\n- Blender pour la modélisation (L'add-on GIS pour le tracé des routes et des bâtiments)\n-QGIS pour le relief\n\nLes difficultés tournent autour de la gestion du déplacement du train (Calculs mathématiques, matrices) et du bon équilibre entre l'esthétique et les performances.",
            picture: "/screenshots/PACA_Driving.png"
        },
        {
            title: "Post-its",
            description: "Projet d'introduction à VueJS sans BDD (Données stockées dans le local storage) consistant à créer, supprimer ou modifier des post-its. Ce projet a été un bon moyen de se familiariser avec les notions de composants, hooks, boucles v-for, conditions v-if, variables v-model",
            picture: "/screenshots/Postit.png"
        },
        {
            title: "Redditech",
            description: "Projet constitué principalement de deux parties : L'utilisation de l'API Reddit pour récupérer des sujets (Avec barre de recherche) et l'authentification à son compte Reddit. J'ai travaillé sur cette seconde partie, il a fallut jongler avec les autorisations mais je suis parvenu à accéder aux infos de l'user connecté et à les afficher ensuite sur la page principale.",
            picture: "/screenshots/Reddit.png"
        },
        {
            title: "YOWL",
            description: "Projet de fin de tron commun permettant de réaliser un site avec un serveur frontend VueJS et un serveur backend Laravel. Ce fut l'occasion d'apprendre à créer ses propres API avec des contrôleurs renvoyant des objets JSON au lieu de vues. La conception de ce site est passé par l'analyse du besoin du client, la conception d'un diagramme UML et une répartition des tâches via Trello. Je me suis principalement occupé de la partie backend avec la création des routes et la gestion des CRUD user et admin.",
            picture: "/screenshots/YOWL.png"
        },
        {
            title: "My Rotten Tomatoes",
            description: "Site imitant Rotten Tomatoes avec gestion de commentaires et users pouvant ajouter leurs notes aux films. Ce projet a permis de découvrir le concept de site SSR avec un serveur NextJS gérant à la fois les parties backend et frontend. Pour moi ce fut l'occasion de dompter les relations many to many (Plusieurs films pour plusieurs catégories). Bien qu'un peu déroutant au préalable, le concept de serveur à la fois frontend et backend s'est finalement avéré intéressant et facile à prendre en main.",
            picture: "/screenshots/My_RottenTomatoes.png"
        }
    ];

    const { id } = useParams();

    return (
        <div>
            <Navbar />
            <div className="detailProject">
                <h3>{details[id].title}</h3>
                <p className="nl">{details[id].description}</p>
                <img src={details[id].picture} alt={details[id].title} />
            </div>
        </div>
    )
}