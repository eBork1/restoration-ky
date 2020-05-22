import React from 'react';
import fire from './Fire';

export default class Logout extends React.Component {
    
    Logout(){
        fire.auth().signOut();
        localStorage.removeItem("user");
    }

    componentDidMount(){
        this.Logout();
    }

    render(){
        return(
            <div>Logging out...</div>
        )
    }
}