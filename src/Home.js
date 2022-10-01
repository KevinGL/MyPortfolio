import Navbar from './components/navbar.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [projeects, setPictures] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setPictures([
            { picture: "/screenshots/Dashboard.png", title: "Dashboard" },
            { picture: "/screenshots/Dashboard2.png", title: "Dashboard" },
            { picture: "/screenshots/Freeads.png", title: "Free Ads" },
            { picture: "/screenshots/PACA_Driving.png", title: "PACA Driving" },
            { picture: "/screenshots/Postit.png", title: "Post-it" },
            { picture: "/screenshots/Reddit.png", title: "Redditech" },
            { picture: "/screenshots/YOWL.png", title: "YOWL" },
            { picture: "/screenshots/My_RottenTomatoes.png", title: "My Rotten Tomatoes" }
        ]);
    }, []);

    function clicItem(index) {
        navigate("/project/" + index);
    }

    return (
        <>
            <Navbar />
            <div className="Home">
                <div className="Profil">
                    <img src="/tmp_1662590275468.jpg" />
                    <br></br>
                    <p>
                        Kévin, 34 ans, passionné de programmation, ayant derrière moi 11 ans de C/C++, j'ambitionne de devenir développeur web. J'arrive à la fin d'une formation à Epitech Marseille qui m'a permis d'enrichir mes compétences dans ce domaine. Mon expérience personnelle et au sein de la formation m'ont permis de constater à quel point j'étais épanoui et travailleur dans l'univers du développement.
                    </p>
                </div>
            </div>

            <Carousel centerMode="true" autoPlay="true" centerSlidePercentage="25" dynamicHeight="true" autoFocus="false" emulateTouch="false" onClickItem={clicItem}>
                {
                    projeects.map((project) => {
                        return (
                            <div>
                                <img src={project.picture} />

                            </div>
                        )
                    })
                }
            </Carousel>
        </>
    )
}