import React from 'react';
import firebase from 'firebase';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getImages = this.getImages.bind(this);
    }

    handleChange = event => {
        // console.log(event.target.files[0]);
        this.setState({ uploadedFile: event.target.files[0] });
    }

    handleSubmit = () => {
        var image = this.state.uploadedFile;
        var ref = firebase.storage().ref();
        ref.child("gallery/" + image.name).put(image)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(() => {
                window.location.reload(true);
            })
    }

    getImages = () => {
        var ref = firebase.storage().ref();
        var listRef = ref.child("gallery/");
        var urlArr = [];

        listRef.listAll()
            .then(function (res) {
                res.items.forEach(function (itemRef) {
                    itemRef.getDownloadURL()
                        .then(url => urlArr.push(url))
                        // .then(console.log(urlArr))
                });
            }).catch(function (error) {
                console.log(error);
            });
        this.setState({ urlArr });
    }

    refresh = () => {
        this.forceUpdate();
    }

    componentDidMount() {
        this.getImages();
        setTimeout(function () { this.setState({ loaded: true }); }.bind(this), 2000);
    }

    render() {
        if (!this.state.loaded) {
            return <div>Loading...</div>
        }
        return (
            <div>
                {localStorage.getItem("user") ?
                    <div>
                        {this.props.adminStatus === null ?
                            <p>not logged in</p>
                            :
                            <div>
                                <input className="btn btn=light" type="file" onChange={this.handleChange}></input>
                                <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                                <br />
                                <button onClick={this.refresh}>Refresh</button>
                            </div>
                        }
                    </div>
                    :
                    null
                }
                <div className="container mt-5">
                    {this.state.urlArr && this.state.urlArr.length > 1 ?
                        <div>
                            <div className="row">
                                {this.state.urlArr.map((url, idx) => {
                                    return (
                                        <div key={idx} className="col-4 mx-auto">
                                            <a href={url}><img src={url} id="homeimg1" alt="gallery img"></img></a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        :
                        <div>
                            nothing yet
                                </div>
                    }

                </div>
            </div>
        )
    }
}