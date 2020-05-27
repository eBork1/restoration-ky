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
    }

    handleChange = event => {
        console.log(event.target.files[0]);
        this.setState({ uploadedFile: event.target.files[0] });
    }

    handleSubmit = () => {
        var image = this.state.uploadedFile;
        var ref = firebase.storage().ref();
        ref.child("gallery/" + image.name).put(image)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => console.log(url))
            .then(()=>{
                window.location.reload(true);
            })
    }

    getImages(){
        var ref = firebase.storage().ref();
        var listRef = ref.child("gallery/");
        listRef.listAll().then(function (res) {
            res.items.forEach(function (itemRef) {
                // All the items under listRef.
                itemRef.getDownloadURL()
                .then(url => console.log(url));
            });
        }).catch(function (error) {
            // Uh-oh, an error occurred!
            console.log(error);
        });
    }

    componentDidMount(){
        this.getImages();
    }

    render() {
        return (
            <div>
                {localStorage.getItem("user") ?
                    <div>

                        {this.props.adminStatus === null ?
                            <p>not logged in</p>
                            :
                            <div>
                                <input type="file" onChange={this.handleChange}></input>
                                <button onClick={this.handleSubmit}>Submit</button>
                            </div>
                        }
                    </div>
                    :
                    <div>
                        regular person view
                </div>
                }
            </div>
        )
    }
}