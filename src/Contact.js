import React from 'react';
import Formspree from './Formspree';

export default class Contact extends React.Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <h1 id="header">Contact</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                            <Formspree />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}