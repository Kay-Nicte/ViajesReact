import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Viajes Ixa</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Paquetes</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-light"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Destinos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Euskadi</a></li>
                                <li><a className="dropdown-item" href="#">Catalunya</a></li>
                                <li><a className="dropdown-item" href="#">Andalucía</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Portugal</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Paquetes de viajes</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Favoritos</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Destinos"
                            aria-label="Search"
                        />
                        <button className="btn-search" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
