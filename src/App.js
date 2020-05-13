import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/gallery">
                        <Gallery />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <p>asdfadsf</p>
            <Footer />
        </div>
    );
}

export default App;
