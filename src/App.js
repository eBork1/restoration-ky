import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './App.css';
import fire from './Fire';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user: {},
        }
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                console.log("not logged in")
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
            console.log(this.state);
        })
    }
    componentDidMount(){
        this.authListener();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Nav />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/services">
                            <Services />
                        </Route>
                        <Route exact path="/gallery">
                            <Gallery 
                            adminStatus={this.state.user === null ? null : "true"}
                            />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/logout">
                            <Logout />
                        </Route>
                    </Switch>
                </Router>

                <Footer />
            </div>
        );
    }
}

export default App;
