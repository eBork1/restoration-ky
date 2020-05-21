import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
                            <h1 className="border-bottom border-dark pb-2" id="header">About us</h1>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <img src="/about.jpg" id="about" alt="about"></img>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 mx-auto text-center">
                            <a href="https://www.bbb.org/" target="_blank" rel="noopener noreferrer"><img src="/bbb.png" id="bbb" alt="bbb logo"></img></a>
                            <a href="https://www.homeadvisor.com/" target="_blank" rel="noopener noreferrer"><img src="/ha.png" id="bbb" alt="home advisor logo"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}