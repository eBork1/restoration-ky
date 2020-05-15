import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-7  col-md-12 col-sm-12">
                        <h1 className="border-bottom border-dark pb-2" id="header">Specializing in Landscaping</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <img className="" id="homeimg1" src="https://www.houselogic.com/wp-content/uploads/2019/05/spring-landscaping-ideas-yard.jpg"></img>
                    </div>
                </div>
                <div className="row mt-5 mb-5" id="revRow">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <img className="img2" id="homeimg2" src="https://www.thespruce.com/thmb/vjBa6VUztPRNHRvNnUGVOI7O5ww=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-industrial-bricklayer-installing-bricks-on-construction-site-622800884-5aefafd3ff1b7800365fc4e0.jpg"></img>
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

            </div>
        )
    }
}