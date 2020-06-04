import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header1 container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-3">
                        <img src="/rkylogo1.png" className="rkylogo ml-4 mt-1"></img>
                    </div>
                </div>
            </div>
        )
    }
}