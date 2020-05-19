import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header1">
                    <div>
                        <img className="mx-auto p-0" id="banner1" src="/RestorationsKYBanner.png" alt="header banner"></img>
                    </div>
                </header>
            </div>
        )
    }
}