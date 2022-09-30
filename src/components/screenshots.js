import { useEffect, useState } from "react"

export default function Screenshots() {
    const [widgets, setWidgets] = useState([]);

    useEffect(() => {
        setWidgets([
            {
                img: "/screenshots/Dashboard.png",
                title: "API SNCF : Affichage des départs et arrivées des trains (Avec les retards ...)",
                description: "Technologie utilisée : ReactJS / Langage : JavaScript"
            },
            {
                img: "/screenshots/Dashboard2.png",
                title: "Dashboard : Affichage de widgets avec OAuth Facebook et API diverses",
                description: "Technologie utilisée : ReactJS / Langage : JavaScript"
            },
            {
                img: "/screenshots/Freeads.png",
                title: "Free Ads : Mise en ligne de publicités avec gestion utilisateurs",
                description: "Technologie utilisée : Laravel / MySQL, Langage : PHP"
            },
            {
                img: "/screenshots/PACA_Driving.png",
                title: "PACA Driving : Simulateur ferroviaire reproduisant villes, villages et massifs de notre belle région",
                description: "Technologies utilisées : SDL, OpenGL / Langages : C/C++"
            },
            {
                img: "/screenshots/Postit.png",
                title: "Post-its : Site de post-its permettant de publier des notes",
                description: "Technologie utilisée : VueJS / Langage : JavaScript"
            },
            {
                img: "/screenshots/Reddit.png",
                title: "Redditech : Site d'affichage de posts Reddit avec barre de recherche et OAuth",
                description: "Technologie utilisée : NextJS / Langage : JavaScript"
            },
            {
                img: "/screenshots/YOWL.png",
                title: "YOWL : Site de recherche d'extraits d'autres sites avec gestion utilisateurs",
                description: "Technologies utilisées : Laravel et VueJS, MySQL / Langages : PHP et JavaScript"
            },
            {
                img: "/screenshots/My_RottenTomatoes.png",
                title: "My Rotten Tomatoes : Site imitant Rotten Tomatoes avec gestion users et relations many to many",
                description: "Technologies utilisées : NextJS, MongoDB / Langage : JavaScript"
            }
        ]);
    }, []);

    return (
        <div className="screenshots">
            {
                widgets.map((w, index) => {
                    return (
                        <div className="Widget">
                            <a href={"/project/" + index}>
                                <img src={w.img} />
                            </a>
                            <h5>{w.title}</h5>
                            <h6>{w.description}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}