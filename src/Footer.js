import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer mt-5">
                <div className="copyright" align="center">
                    <p className="p-3 text-muted">
                        &copy; {new Date().getFullYear()} www.restorationsky.com - All Rights Reserved.
                    </p>
                    <div className="col-lg-4 col-md-8 col-sm-12">
                        <div className="navbar text-center">
                            <a className="nav-item nav-link text-warning" href="/">Home</a>
                            <a className="nav-item nav-link text-warning" href="/about">About</a>
                            <a className="nav-item nav-link text-warning" href="/services">Services</a>
                            <a className="nav-item nav-link text-warning" href="/gallery">Gallery</a>
                            <a className="nav-item nav-link text-warning" href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}