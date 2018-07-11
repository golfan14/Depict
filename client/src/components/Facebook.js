import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            picture: ''
        }
    }

    responseFacebook = response => {
        console.log (response);
        //CONNECT API ROUTE THAT CREATES NEW USER
        //
        this.setState({
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
        this.props.LogInfn({
            isLoggedIn: true,
            userID: response.userID
        })
    }

    render() {
        let fbContent;

        if (this.props.userdata.isLoggedIn) {
            fbContent = (
                <div>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>    
            )
        } else {
            fbContent = (<FacebookLogin
                appId="2229061227109118"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

export default Facebook;