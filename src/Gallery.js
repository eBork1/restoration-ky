import React from 'react';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {localStorage.getItem("user") ?
                    <div>

                        {this.props.adminStatus === null ?
                            <p>not logged in</p>
                            :
                            <p>wooo! ADMIN LOGGED IN</p>
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