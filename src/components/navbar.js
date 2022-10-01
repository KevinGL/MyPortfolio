

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">A propos de moi</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <a class="nav-link active" href="/projects">Mes projets récents
                        <span class="visually-hidden">(current)</span>
                    </a>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="/projects">Mes projets récents
                                <span class="visually-hidden">(current)</span>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}