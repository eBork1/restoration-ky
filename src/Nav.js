import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="/">Restoration KY</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="/services">Services</a>
                            <a className="nav-item nav-link" href="/gallery">Gallery</a>
                            <a className="nav-item nav-link" href="/contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}