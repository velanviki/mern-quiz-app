import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/">
                <a class="navbar-brand" href="#">Quiz App</a>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/createQuestion">
                            <a class="nav-item nav-link active" href="#">Create</a>
                        </Link>
                        <Link to="/editQuestion">
                            <a class="nav-item nav-link active" href="#">Edit</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar