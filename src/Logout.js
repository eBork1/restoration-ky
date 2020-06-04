import React from 'react';
import fire from './Fire';

export default class Logout extends React.Component {

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.Logout();
            } else {
                window.location.replace("/")
            }
        })
    }
    
    Logout(){
        fire.auth().signOut();
        localStorage.removeItem("user");
    }
    

    componentDidMount(){
        this.authListener();
    }

    render(){
        return(
            <div>Logging out...</div>
        )
    }
}