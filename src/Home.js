import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container pt-3">
                <div className="row mt-5">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <h1 className="border-bottom border-dark pb-2" id="header">Specializing in Landscaping</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <img className="" id="homeimg1" src="/landscape.jpg" alt="landscaping"></img>
                    </div>
                </div>
                <div className="row mt-5 mb-5 pt-3" id="revRow">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <img className="img2" id="homeimg2" src="/masonry.jpg" alt="masonry"></img>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <h1 className="border-bottom border-dark pb-2 text-right" id="header">Masonry Projects</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-10 col-lg-8 mx-auto text-center border-bottom border-dark pb-2" id="header">
                        <h1 id="header">...and many other <a href="/services">services</a></h1>
                    </div>
                </div>
                <div className="row mt-3 pt-3">
                    <div className="col-3"></div>
                    <div className="col-lg-3 col-sm-12 mx-auto text-center">
                        <p><a href="/services">Retaining Walls</a></p>
                        <p><a href="/services">Pavers</a></p>
                        <p><a href="/services">Fire Places</a></p>
                        <p><a href="/services">Bobcat Service</a></p>
                    </div>
                    <div className="col-lg-3 col-sm-12 mx-auto text-center">
                        <p><a href="/services">Patios</a></p>
                        <p><a href="/services">Pressure Cleaning</a></p>
                        <p><a href="/services">Weatherproofing</a></p>
                        <p><a href="/services">Tree Service</a></p>
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-10 mx-auto text-center bg-primary shadow">
                        <a href="/contact">
                            <h1 id="header" className="p-2">Get a quote TODAY</h1>
                        </a>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 mx-auto text-center">
                        <a href="https://www.bbb.org/"><img src="/bbb.png" id="bbb" alt="bbb logo"></img></a>
                        <a href="https://www.homeadvisor.com/"><img src="/ha.png" id="bbb" alt="home advisor logo"></img></a>
                    </div>
                </div>

            </div>
        )
    }
}