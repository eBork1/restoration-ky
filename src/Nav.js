import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-center mx-auto">
                            <a className="nav-item nav-link text-warning px-4" href="/">Home</a>
                            <a className="nav-item nav-link text-warning px-4" href="/about">About</a>
                            <a className="nav-item nav-link text-warning px-4" href="/services">Services</a>
                            <a className="nav-item nav-link text-warning px-4" href="/gallery">Gallery</a>
                            <a className="nav-item nav-link text-warning px-4" href="/contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}