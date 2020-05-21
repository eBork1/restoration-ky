import React from "react";

export default class Formspree extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/mlepgzqe"
                method="POST"
            >
                <div className="form-group">
                    <label htmlFor="title">Name:</label>
                    <input type="text" className="form-control" name="name" id="name1"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Email:</label>
                    <input type="email" name="_replyto" className="form-control" id="email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Phone:</label>
                    <input type="tel" name="phone" className="form-control" id="email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Message:</label>
                    <textarea className="form-control" name="message" id="message" rows="4"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary btn-block"></input>
                </div>
                {status === "SUCCESS" ? <p>Thanks!</p> : null}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}