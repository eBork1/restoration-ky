import React from 'react';
import fire from './Fire';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errorStatus: ""
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value,
        })
    }

    login(event) {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log("success");
        }).catch((error) => {
            console.log(error);
            this.setState({errorStatus: error});
        });
        
    }

    render() {
        return (
            <div className="login">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h1 className="border-bottom mb-4 pb-2">Login</h1>
                            <form onSubmit={this.login}>
                                <div className="form-group text-center">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input onChange={this.onChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@email.com" />
                                </div>
                                <div className="form-group text-center">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input onChange={this.onChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-dark btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <p>{this.state.errorStatus}</p>
                    </div>
                </div>
            </div>
        )
    }
}