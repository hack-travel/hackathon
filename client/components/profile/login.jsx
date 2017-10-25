import React from 'react';
import fire from './firebase.jsx';
import firebase from 'firebase';
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
    };
    this.facebookAuth = this.facebookAuth.bind(this);
  }


  facebookAuth () {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_about_me')
    provider.addScope('user_birthday')
    provider.addScope('public_profile')
    fire.auth().signInWithPopup(provider)
      .then((data) => {
        this.props.login(data.user, data.additionalUserInfo.profile)
        axios.post('/api/profile/login', {
          profile:  data.additionalUserInfo.profile
        })
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      })
      .catch(err => console.error(err));
  };

  render() {
    return (<button id="FacebookButton" onClick={this.facebookAuth}>Login using Facebook</button>)
  }
}

export default Login
