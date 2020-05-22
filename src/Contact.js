import React from 'react';
import Formspree from './Formspree';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-8 col-lg-6 mx-auto text-center">
                            <h1 className="border-bottom border-dark" id="header">Contact</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto mt-3">
                            <Formspree />
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12 mt-5 mx-auto">
                            <h5 className="mb-3" id="header">Restorations KY LLC</h5>
                            <h5 className="mb-3" id="header">restorationskyllc@gmail.com</h5>
                            <h5 className="mb-3" id="header">859.433.0090</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}